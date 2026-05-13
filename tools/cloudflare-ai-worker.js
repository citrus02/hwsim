/**
 * Cloudflare Worker AI grading proxy.
 *
 * Required secrets / variables:
 *   AI_API_KEY      Your provider API key. Keep it secret.
 *   AI_API_URL      Optional. Defaults to DeepSeek chat completions.
 *   AI_MODEL        Optional. Defaults to deepseek-v4-flash.
 *   ALLOWED_ORIGIN  Optional. Comma-separated allowed browser origins.
 *
 * Recommended route:
 *   https://www.hwsim.top/api/*
 */

const DEFAULT_API_URL = "https://api.deepseek.com/chat/completions";
const DEFAULT_MODEL = "deepseek-v4-flash";
const DEFAULT_ALLOWED_ORIGIN = [
  "https://www.hwsim.top",
  "https://hwsim.top",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5500",
  "http://localhost:8787",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5500",
  "http://127.0.0.1:8787",
  "null"
].join(",");

function getAllowedOrigins(env) {
  return String(env.ALLOWED_ORIGIN || DEFAULT_ALLOWED_ORIGIN)
    .split(",")
    .map(origin => origin.trim())
    .filter(Boolean);
}

function getCorsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowedOrigins = getAllowedOrigins(env);
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Vary": "Origin"
  };
}

function jsonResponse(request, env, status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...getCorsHeaders(request, env)
    }
  });
}

function isAllowedOrigin(request, env) {
  const origin = request.headers.get("Origin");
  return !!origin && getAllowedOrigins(env).includes(origin);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: getCorsHeaders(request, env)
      });
    }

    if (url.pathname !== "/api/ai-grade") {
      return jsonResponse(request, env, 404, { error: { message: "Not found" } });
    }

    if (request.method !== "POST") {
      return jsonResponse(request, env, 405, { error: { message: "Method not allowed" } });
    }

    if (!isAllowedOrigin(request, env)) {
      return jsonResponse(request, env, 403, { error: { message: "Origin is not allowed" } });
    }

    if (!env.AI_API_KEY) {
      return jsonResponse(request, env, 500, { error: { message: "AI_API_KEY is not configured" } });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse(request, env, 400, { error: { message: "Invalid JSON body" } });
    }

    const upstreamBody = {
      ...body,
      model: body?.model || env.AI_MODEL || DEFAULT_MODEL
    };

    try {
      const upstream = await fetch(env.AI_API_URL || DEFAULT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${env.AI_API_KEY}`
        },
        body: JSON.stringify(upstreamBody)
      });

      const text = await upstream.text();
      return new Response(text, {
        status: upstream.status,
        headers: {
          "Content-Type": upstream.headers.get("Content-Type") || "application/json",
          ...getCorsHeaders(request, env)
        }
      });
    } catch (err) {
      return jsonResponse(request, env, 502, {
        error: { message: err?.message || "Proxy request failed" }
      });
    }
  }
};
