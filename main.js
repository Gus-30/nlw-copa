function creatGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/flags/icon=${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
      <img src="./assets/flags/icon=${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
  `
}

let delay = -0.2
function createCard(date, day, games) {
  delay = delay + 0.2
  return `
  <div class="card-1" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", creatGame("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda", creatGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "sexta", creatGame("cameroon", "16:00", "brazil"))
