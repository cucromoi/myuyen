const loveStartDate = new Date("2025-10-25T00:00:00"); 

const today = new Date();
const diffTime = today - loveStartDate;
const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));

const daysLoveEl = document.getElementById("daysLove");
if (daysLoveEl) {
  daysLoveEl.textContent = diffDays;
}

const showWishBtn = document.getElementById("showWishBtn");
const wishPopup = document.getElementById("wishPopup");
const closePopup = document.getElementById("closePopup");

if (showWishBtn && wishPopup) {
  showWishBtn.addEventListener("click", () => {
    wishPopup.classList.add("show");
  });
}

if (closePopup && wishPopup) {
  closePopup.addEventListener("click", () => {
    wishPopup.classList.remove("show");
  });
}

if (wishPopup) {
  wishPopup.addEventListener("click", (e) => {
    if (e.target === wishPopup) {
      wishPopup.classList.remove("show");
    }
  });
}

const floatingHearts = document.getElementById("floatingHearts");

function createHeart() {
  if (!floatingHearts) return;

  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerHTML = Math.random() > 0.5 ? "💙" : "🤍";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.fontSize = (14 + Math.random() * 16) + "px";

  floatingHearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 11000);
}

setInterval(createHeart, 700);