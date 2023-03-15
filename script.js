setInterval(() => {
  const date = new Date();
  const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
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
  const day = arrayDay[numberDay];
  document.getElementById(
    "clock"
  ).innerHTML = `<p class="day">${day}</p><p class="time">${hour}:${minutes}:${seconds}</p>`;
}, 1);
