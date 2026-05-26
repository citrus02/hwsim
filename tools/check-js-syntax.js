const { execFileSync, spawnSync } = require("child_process");
const { existsSync, statSync } = require("fs");
const { join, relative } = require("path");

const root = join(__dirname, "..");
const checkAll = process.argv.includes("--all");
const ignoredParts = new Set([".git", ".kilo", "node_modules"]);

function listTrackedJsFiles() {
  const tracked = execFileSync("git", ["ls-files", "*.js"], {
    cwd: root,
    encoding: "utf8",
  });
  const untracked = execFileSync("git", ["ls-files", "--others", "--exclude-standard", "*.js"], {
    cwd: root,
    encoding: "utf8",
  });
  return `${tracked}\n${untracked}`
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);
}

function listAllJsFiles(dir = root, out = []) {
  const { readdirSync } = require("fs");
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (ignoredParts.has(entry.name)) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      listAllJsFiles(fullPath, out);
    } else if (entry.isFile() && entry.name.endsWith(".js")) {
      out.push(relative(root, fullPath).replace(/\\/g, "/"));
    }
  }
  return out;
}

const files = checkAll ? listAllJsFiles() : listTrackedJsFiles();
const failures = [];

for (const file of files) {
  const fullPath = join(root, file);
  if (!existsSync(fullPath) || !statSync(fullPath).isFile()) continue;

  const result = spawnSync(process.execPath, ["--check", fullPath], {
    cwd: root,
    encoding: "utf8",
  });

  if (result.status !== 0) {
    failures.push({
      file,
      output: `${result.stdout || ""}${result.stderr || ""}`.trim(),
    });
  }
}

if (failures.length) {
  console.error(`JS syntax check failed for ${failures.length} file(s):`);
  failures.forEach(({ file, output }) => {
    console.error(`\n${file}`);
    console.error(output);
  });
  process.exit(1);
}

console.log(`JS syntax check passed for ${files.length} file(s).`);
