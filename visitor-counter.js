function initVisitorCounter() {
  const counterSpan = document.getElementById("busuanzi_value_site_uv");
  const fallbackSpan = document.getElementById("visitor-count");

  if (counterSpan || !fallbackSpan) return;

  let checkCount = 0;
  const interval = setInterval(() => {
    const busuanziValue = document.getElementById("busuanzi_value_site_uv");
    if (busuanziValue?.innerText) {
      fallbackSpan.innerText = busuanziValue.innerText;
      clearInterval(interval);
    } else if (checkCount > 30) {
      const savedCount = localStorage.getItem("hogwarts_visitors");
      const localCount = savedCount === null
        ? Math.floor(Math.random() * 100 + 42)
        : parseInt(savedCount, 10) + 1;
      localStorage.setItem("hogwarts_visitors", String(localCount));
      fallbackSpan.innerText = String(localCount);
      clearInterval(interval);
    }
    checkCount++;
  }, 100);
}

document.addEventListener("DOMContentLoaded", initVisitorCounter);
