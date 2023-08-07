setInterval(() => {
  const date = new Date();
  const year = date.getFullYear();
  const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  const numberDay = date.getDay();
  const numberMonth = date.getMonth();
  const arrayDay = new Array(
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  );
  const arrayMonth = new Array(
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  )
  const day = arrayDay[numberDay];
  const month = arrayMonth[numberMonth - 1];
  document.getElementById(
    "clock"
  ).innerHTML = `<p class="day">${day}</p><p class="time">${hour}:${minutes}:${seconds}</p><br/><p class="day">${month}, ${year}</p>`;
}, 1);
