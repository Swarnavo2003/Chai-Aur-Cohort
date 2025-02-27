function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "AM" : "PM";

  timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  dateElement.textContent = now.toDateString();
}

setInterval(updateClock, 1000);

updateClock();
