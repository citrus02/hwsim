import { initVersionManager } from "./version.js";

try {
  initVersionManager();
} catch (error) {
  console.error("❌ initVersionManager 出错:", error);
}
