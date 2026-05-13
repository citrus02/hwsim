/**
 * Minimal AI grading proxy example.
 *
 * Run:
 *   npm init -y
 *   npm i express cors
 *   set AI_API_KEY=your_key
 *   set AI_API_URL=https://api.minimax.io/v1/chat/completions
 *   set AI_MODEL=MiniMax-M2.7
 *   node tools/ai-proxy.example.js
 *
 * Frontend default config:
 *   ai/default-config.js points to /api/ai-grade by default.
 *   In production, deploy this proxy at the same origin or change
 *   DEFAULT_API_BASE_URL to your hosted proxy URL.
 */

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

const API_KEY = process.env.AI_API_KEY;
const API_URL = process.env.AI_API_URL || "https://api.minimax.io/v1/chat/completions";
const DEFAULT_MODEL = process.env.AI_MODEL || "MiniMax-M2.7";

app.post("/api/ai-grade", async (req, res) => {
  if (!API_KEY) {
    res.status(500).json({ error: { message: "Server AI_API_KEY is not configured" } });
    return;
  }

  const body = {
    ...req.body,
    model: req.body?.model || DEFAULT_MODEL
  };

  try {
    const upstream = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(body)
    });

    const text = await upstream.text();
    res.status(upstream.status).type(upstream.headers.get("content-type") || "application/json").send(text);
  } catch (err) {
    res.status(502).json({ error: { message: err?.message || "Proxy request failed" } });
  }
});

app.listen(8787, () => {
  console.log("AI proxy listening on http://localhost:8787/api/ai-grade");
});
