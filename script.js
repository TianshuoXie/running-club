const runs = [
  {
    id: "week-1",
    day: "Mon",
    date: "10",
    month: "Aug",
    title: "Sunrise Easy Run",
    place: "Riverside Park",
    schedule: "Every Monday · 7:00 AM",
    level: "Beginner",
    distance: "3 km",
  },
  {
    id: "week-2",
    day: "Wed",
    date: "13",
    month: "Aug",
    title: "Comfortable Tempo Run",
    place: "Central Track",
    schedule: "Every Wednesday · 6:30 PM",
    level: "Intermediate",
    distance: "5 km",
  },
  {
    id: "week-3",
    day: "Sat",
    date: "16",
    month: "Aug",
    title: "Community Trail Run",
    place: "Greenway Trailhead",
    schedule: "Every Saturday · 8:00 AM",
    level: "Beginner",
    distance: "4 km",
  },
];

const runsList = document.querySelector("#runs-list");
const emptyMessage = document.querySelector("#empty-message");
const filterButtons = document.querySelectorAll(".filter-button");
const STORAGE_KEY = "run-together-joined-runs";

let currentFilter = "All";
let joinedRuns = loadJoinedRuns();

function loadJoinedRuns() {
  try {
    const savedRuns = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return new Set(Array.isArray(savedRuns) ? savedRuns : []);
  } catch (error) {
    console.warn("Could not read saved runs.", error);
    return new Set();
  }
}

function saveJoinedRuns() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...joinedRuns]));
  } catch (error) {
    console.warn("Could not save joined runs.", error);
  }
}

function createRunCard(run) {
  const isJoined = joinedRuns.has(run.id);
  const card = document.createElement("article");
  card.className = "run-card";
  card.dataset.level = run.level;
  card.innerHTML = `
    <div class="run-date" aria-label="${run.day}, ${run.date} ${run.month}">
      <span>${run.day}</span>
      <strong>${run.date}</strong>
      <span>${run.month}</span>
    </div>
    <div class="run-details">
      <h3>${run.title}</h3>
      <p class="run-meta">
        <span>${run.distance}</span>
        <span>${run.place}</span>
        <span>${run.schedule}</span>
      </p>
      <span class="run-level">${run.level}</span>
    </div>
    <button
      class="join-button${isJoined ? " is-joined" : ""}"
      type="button"
      data-run-id="${run.id}"
      aria-pressed="${isJoined}"
    >${isJoined ? "Joined ✓" : "Join Run"}</button>
  `;
  return card;
}

function renderRuns() {
  const visibleRuns = runs.filter((run) => currentFilter === "All" || run.level === currentFilter);
  runsList.replaceChildren(...visibleRuns.map(createRunCard));
  emptyMessage.hidden = visibleRuns.length > 0;
}

function toggleJoin(button) {
  const runId = button.dataset.runId;

  if (joinedRuns.has(runId)) {
    joinedRuns.delete(runId);
  } else {
    joinedRuns.add(runId);
  }

  saveJoinedRuns();
  renderRuns();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderRuns();
  });
});

runsList.addEventListener("click", (event) => {
  const button = event.target.closest(".join-button");
  if (button) {
    toggleJoin(button);
  }
});

renderRuns();
