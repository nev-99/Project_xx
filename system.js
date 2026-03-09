document.addEventListener("DOMContentLoaded", () => {

const logPane = document.getElementById("logPane");
const statePanel = document.getElementById("statePanel");
const hoverDebugArea = document.getElementById("hoverDebugArea");
const roomGrid = document.getElementById("roomGrid");

/* ===== ログ ===== */

function log(text) {
  const div = document.createElement("div");
  div.textContent = text;
  logPane.appendChild(div);
  logPane.scrollTop = logPane.scrollHeight;
}

/* ===== 感情モデル ===== */

const A = new EmotionModelA();

function renderState() {

  const s = A.snapshot();

  statePanel.innerHTML = "";

  Object.entries(s).forEach(([k,v]) => {

    const div = document.createElement("div");
    div.textContent = `${k}: ${v.toFixed(2)}`;

    statePanel.appendChild(div);

  });

}

renderState();

/* ===== 外部データ ===== */

const actionData = Array.isArray(window.scenarioData)
  ? window.scenarioData
  : [];

const hoverData = window.hoverActionData || {};

/* ===== 感情変化適用 ===== */

function applyEmotionChanges(changes) {

  if (!changes) return;

  A.applyEmotionChanges(changes);

}

/* ===== メインシーン進行 ===== */

let index = 0;
let paused = false;

function runNext() {

  if (paused) return;

  if (index >= actionData.length) {

    log("=== Scene Ended ===");

    return;

  }

  const a = actionData[index];

  log(a.contentEN);
  log(a.contentJP);

  applyEmotionChanges(a.emotionChanges);

  renderState();

  index++;

  setTimeout(runNext, a.duration || 1000);

}

runNext();

/* =============================
   hoverDataからアイテム生成
============================= */

function generateRoomItems() {

  roomGrid.innerHTML = "";

  Object.keys(hoverData).forEach((key) => {

    const div = document.createElement("div");

    div.className = "item";
    div.dataset.item = key;
    div.textContent = key;

    roomGrid.appendChild(div);

  });

}

generateRoomItems();

/* ===== hover debugバー ===== */

const debugBars = {};

function createBars() {

  hoverDebugArea.innerHTML = "";

  Object.keys(hoverData).forEach((key) => {

    if (!hoverData[key].timeline) return;

    const maxTime = Math.max(
      ...hoverData[key].timeline.map((e)=>e.time)
    );

    const container = document.createElement("div");
    container.className = "bar-container";

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = `${key} (0 / ${maxTime}s)`;

    container.appendChild(label);

    const wrapper = document.createElement("div");
    wrapper.className = "progress-wrapper";

    const fill = document.createElement("div");
    fill.className = "progress-fill";

    wrapper.appendChild(fill);

    hoverData[key].timeline.forEach((ev)=>{

      const marker = document.createElement("div");

      marker.className = "marker";
      marker.style.left = (ev.time / maxTime) * 100 + "%";

      wrapper.appendChild(marker);

    });

    container.appendChild(wrapper);

    hoverDebugArea.appendChild(container);

    debugBars[key] = { fill, label, maxTime };

  });

}

createBars();

/* ===== Hover制御 ===== */

let hoverStart = null;
let activeKey = null;
let noticeTriggered = false;

function startHover(key) {

  if (!hoverData[key]) return;

  activeKey = key;

  hoverStart = Date.now();

  noticeTriggered = false;

  paused = true;

  hoverData[key].timeline.forEach(e => e.triggered = false);

  function loop() {

    if (!activeKey) return;

    const elapsed = (Date.now() - hoverStart) / 1000;

    const bar = debugBars[key];

    if (bar) {

      bar.fill.style.width =
        Math.min((elapsed / bar.maxTime) * 100, 100) + "%";

      bar.label.textContent =
        `${key} (${elapsed.toFixed(1)} / ${bar.maxTime}s)`;

    }

    if (!noticeTriggered && elapsed >= hoverData[key].noticeDelay) {

      noticeTriggered = true;

      log(`A notices the ${key}.`);

    }

    hoverData[key].timeline.forEach((ev)=>{

      if (!ev.triggered && elapsed >= ev.time) {

        ev.triggered = true;

        log(ev.contentEN);
        log(ev.contentJP);

        applyEmotionChanges(ev.emotionChanges);

        renderState();

      }

    });

    requestAnimationFrame(loop);

  }

  requestAnimationFrame(loop);

}

function stopHover() {

  if (activeKey && debugBars[activeKey]) {

    debugBars[activeKey].fill.style.width = "0%";

  }

  activeKey = null;

  paused = false;

}

/* hoverイベント */

function attachHoverEvents() {

  document.querySelectorAll(".item").forEach((el)=>{

    const key = el.dataset.item;

    el.addEventListener("mouseenter", ()=>startHover(key));
    el.addEventListener("mouseleave", stopHover);

  });

}

attachHoverEvents();

/* ===== 感情tick ===== */

setInterval(()=>{

  A.tick(1);

  renderState();

},1000);

});