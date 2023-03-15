setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const numberDay = date.getDay();
  const arrayDay = new Array(
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  );
  if (seconds.length = 1) {
    seconds = "0" + seconds
  }
  const day = arrayDay[numberDay];
  document.getElementById(
    "clock"
  ).innerHTML = `<p class="day">${day}</p><p class="time">${hour}:${minutes}:${seconds}</p>`;
}, 1);
