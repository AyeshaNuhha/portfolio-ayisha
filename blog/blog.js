const timer = document.getElementById('timer');
const launchDate = new Date("July 1, 2025 00:00:00").getTime();

const updateTimer = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    clearInterval(updateTimer);
    timer.innerHTML = "🚀 We Are Live!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((distance / (1000 * 60)) % 60);
  const secs = Math.floor((distance / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}, 1000);
