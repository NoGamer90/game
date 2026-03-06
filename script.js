function startGame() {
  alert("Launching game hub...");
}

function joinCommunity() {
  alert("Redirecting to community page...");
}

// Example dynamic news feed
const newsFeed = document.getElementById("news-feed");
const updates = [
  "🎉 New Puzzle Quest levels released!",
  "🔥 Shadow Fight tournament starts next week!",
  "🛠 Minecraft Clone updated with new skins!"
];

updates.forEach(update => {
  const p = document.createElement("p");
  p.textContent = update;
  newsFeed.appendChild(p);
});