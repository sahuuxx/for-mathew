let opened = new Set();

const letters = {
  1: {
    text: "Loving you has felt so so peaceful. It's like realizing I don’t have to rush or prove or explain — I can just be, and you stay.",
  },
  2: {
    text: "When I look at you I know you're the person I will always choose and always come back to
  },
  3: {
    text: "I love making memories with you, I can't wait till we get to meet in real life",
  },
  4: {
    text: "Every version of me has felt safer since you arrived. That’s something I’ll always thank you for.",
  },
  final: {
    text: "If love is the quiet way we show we care — then this is me, showing you. Still. Every day.",
  }
};

function openLetter(num) {
  const data = letters[num];
  typeText(data.text, data.time);
  opened.add(num);
  checkUnlock();
}

function typeText(text, time) {
  const modal = document.getElementById("modal");
  const letterText = document.getElementById("letterText");
  const timestamp = document.getElementById("timestamp");

  modal.style.display = "flex";
  letterText.innerText = "";
  timestamp.innerText = "";

  let i = 0;
  const interval = setInterval(() => {
    letterText.innerText += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
      timestamp.innerText = time;
    }
  }, 30);
}

function closeLetter() {
  document.getElementById("modal").style.display = "none";
}

function checkUnlock() {
  if (opened.size >= 4) {
    const final = document.getElementById("finalEnvelope");
    final.classList.remove("locked");
    final.onclick = () => openLetter("final");
  }
}
