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
  createCard("20/11", "domingo", creatGame("qatar", "a", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    creatGame("england", "b", "10:00", "iran") +
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
      creatGame("brazil", "g", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    creatGame("wales", "b", "07:00", "iran") +
      creatGame("qatar", "a", "10:00", "senegal") +
      creatGame("netherlands", "a", "13:00", "ecuador") +
      creatGame("england", "b", "16:00", "united states")
  ) +
  createCard(
    "26/11",
    "sábado",
    creatGame("tunisia", "d", "07:00", "australia") +
      creatGame("poland", "c", "10:00", "saudi arabia") +
      creatGame("france", "d", "13:00", "denmark") +
      creatGame("argentina", "c", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    creatGame("japan", "e", "07:00", "costa rica") +
      creatGame("belgium", "f", "10:00", "morocco") +
      creatGame("croatia", "e", "13:00", "canada") +
      creatGame("spain", "f", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    creatGame("cameroon", "g", "07:00", "serbia") +
      creatGame("south korea", "e", "10:00", "ghana") +
      creatGame("brazil", "g", "13:00", "switzerland") +
      creatGame("portugal", "f", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    creatGame("ecuador", "a", "07:00", "senegal") +
      creatGame("netherlands", "a", "10:00", "qatar") +
      creatGame("iran", "b", "13:00", "united states") +
      creatGame("wales", "b", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    creatGame("tunisia", "d", "07:00", "france") +
      creatGame("australia", "d", "10:00", "denmark") +
      creatGame("poland", "c", "13:00", "argentina") +
      creatGame("saudi arabia", "c", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    creatGame("croatia", "f", "07:00", "belgium") +
      creatGame("canada", "f", "10:00", "morocco") +
      creatGame("japan", "e", "13:00", "spain") +
      creatGame("costa rica", "e", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    creatGame("south korea", "h", "07:00", "portugal") +
      creatGame("ghana", "h", "10:00", "uruguay") +
      creatGame("serbia", "g", "13:00", "switzerland") +
      creatGame("cameroon", "g", "16:00", "brazil")
  )
