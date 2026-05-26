let lastTouchEnd = 0;

function preventPinchZoom(event) {
  if (event.touches && event.touches.length > 1) {
    event.preventDefault();
  }
}

function preventDoubleTapZoom(event) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}

function clampHorizontalScroll() {
  if (window.scrollX !== 0) {
    window.scrollTo(0, window.scrollY);
  }
}

document.addEventListener("touchstart", preventPinchZoom, { passive: false });
document.addEventListener("touchmove", preventPinchZoom, { passive: false });
document.addEventListener("touchend", preventDoubleTapZoom, { passive: false });
document.addEventListener("gesturestart", event => event.preventDefault(), { passive: false });
document.addEventListener("gesturechange", event => event.preventDefault(), { passive: false });
document.addEventListener("gestureend", event => event.preventDefault(), { passive: false });
window.addEventListener("scroll", clampHorizontalScroll, { passive: true });
