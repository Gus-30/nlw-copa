function creatGame(player1, group, hour, player2) {
  return `
    <li>
    <figure>
      <img src="./assets/flags/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <figcaption>${player1}</figcaption>
    </figure>
            <div class="info">
                <span>Grupo ${group}<br></span>
                <strong>${hour}</strong>
            </div>
    <figure>
      <img src="./assets/flags/icon=${player2}.svg" alt="Bandeira do ${player2}" />
      <figcaption>${player2}</figcaption>
    </figure>
    </li>
  `
}

let delay = -0.2
function createCard(date, day, games) {
  delay = delay + 0.2
  return `
  <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", creatGame("Qatar", "a", "13:00", "Ecuador")) +
  createCard(
    "21/11",
    "segunda",
    creatGame("england", "b", "10:00", "Iran") +
      creatGame("senegal", "a", "13:00", "netherlands") +
      creatGame("united states", "b", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    creatGame("argentina", "c", "07:00", "saudi arabia") +
      creatGame("denmark", "d", "10:00", "tunisia") +
      creatGame("mexico", "c", "13:00", "poland") +
      creatGame("france", "d", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    creatGame("morocco", "f", "07:00", "croatia") +
      creatGame("germany", "e", "10:00", "japan") +
      creatGame("spain", "e", "13:00", "costa rica") +
      creatGame("belgium", "f", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    creatGame("switzerland", "g", "07:00", "cameroon") +
      creatGame("uruguay", "h", "10:00", "south korea") +
      creatGame("portugal", "h", "13:00", "ghana") +
      creatGame("brazil", "G", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    creatGame("cameroon", "g", "07:00", "serbia") +
      creatGame("south korea", "e", "10:00", "ghana") +
      creatGame("brazil", "G", "13:00", "switzerland") +
      creatGame("portugal", "f", "16:00", "uruguay")
  ) +
  createCard("02/12", "sexta", creatGame("cameroon", "G", "16:00", "brazil"))
