/* =========================================================================
   SOUND MAP — interaction logic
   Reads HOTSPOTS from hotspots.js, builds an invisible hover zone for each
   symbol on top of the canvas image, and plays/highlights the matching
   sound on mouseenter / mouseleave.
   ========================================================================= */

const wrap   = document.getElementById("canvas-wrap");
const img    = document.getElementById("canvas-img");
const readout = document.getElementById("calib-readout");

const FADE_MS = 180;          // fade in/out duration
const audioCache = new Map(); // src -> HTMLAudioElement (reused, not recreated)

function getAudio(src) {
  if (!audioCache.has(src)) {
    const a = new Audio(src);
    a.loop = true;
    a.preload = "auto";
    a.volume = 0;
    audioCache.set(src, a);
  }
  return audioCache.get(src);
}

function fade(audio, to, ms) {
  clearInterval(audio._fadeTimer);
  const from = audio.volume;
  const steps = Math.max(1, Math.round(ms / 16));
  let i = 0;
  audio._fadeTimer = setInterval(() => {
    i++;
    audio.volume = from + (to - from) * (i / steps);
    if (i >= steps) {
      clearInterval(audio._fadeTimer);
      audio.volume = to;
      if (to === 0) audio.pause();
    }
  }, 16);
}

function stopAllAudio() {
  audioCache.forEach((audio) => fade(audio, 0, FADE_MS));
}

function playSounds(soundOrArray) {
  const list = Array.isArray(soundOrArray) ? soundOrArray : [soundOrArray];
  list.forEach((src) => {
    const audio = getAudio(src);
    audio.currentTime = audio.currentTime || 0;
    audio.play().catch(() => {
      /* browsers block autoplay before first user gesture; this is fine,
         the user has already moved the mouse over the page by this point */
    });
    fade(audio, 1, FADE_MS);
  });
}

function stopSounds(soundOrArray) {
  const list = Array.isArray(soundOrArray) ? soundOrArray : [soundOrArray];
  list.forEach((src) => {
    if (audioCache.has(src)) fade(audioCache.get(src), 0, FADE_MS);
  });
}

/* ---------- build hotspot elements from HOTSPOTS data ---------- */

HOTSPOTS.forEach((spot) => {
  const el = document.createElement("div");
  el.className = "hotspot";
  el.dataset.id = spot.id;
  el.title = spot.label || "";
  el.style.left = spot.x + "%";
  el.style.top = spot.y + "%";
  el.style.width = spot.w + "%";
  el.style.height = spot.h + "%";

  el.addEventListener("mouseenter", () => {
    el.classList.add("active");
    playSounds(spot.sound);
  });

  el.addEventListener("mouseleave", () => {
    el.classList.remove("active");
    stopSounds(spot.sound);
  });

  wrap.appendChild(el);
});

/* =========================================================================
   CALIBRATION MODE
   Press "C" to toggle. While on, clicking anywhere on the image logs (and
   displays) that point's position as an x%/y% pair you can paste straight
   into hotspots.js to fix/add a hotspot.
   ========================================================================= */

let calibrating = false;
let markers = [];

window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "c") {
    calibrating = !calibrating;
    wrap.classList.toggle("calibrating", calibrating);
    readout.hidden = !calibrating;
    if (calibrating) {
      readout.textContent = "Calibration mode ON — click any symbol on the image.\n";
    } else {
      markers.forEach((m) => m.remove());
      markers = [];
    }
  }
});

wrap.addEventListener("click", (e) => {
  if (!calibrating) return;

  const rect = img.getBoundingClientRect();
  const xPct = ((e.clientX - rect.left) / rect.width) * 100;
  const yPct = ((e.clientY - rect.top) / rect.height) * 100;

  const marker = document.createElement("div");
  marker.className = "calib-marker";
  marker.style.left = xPct + "%";
  marker.style.top = yPct + "%";
  wrap.appendChild(marker);
  markers.push(marker);

  const line = `{ x: ${xPct.toFixed(2)}, y: ${yPct.toFixed(2)} }`;
  readout.textContent += line + "\n";
  console.log(line);
});
