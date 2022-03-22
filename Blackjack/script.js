let player = {
  name : 'Victor',
  chips: 100,
  bet: 10
}
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let playerEl = document.getElementById('player-el')
let cards = []
let sum = 0
let message = ''
let hasBlackJack = false
let gameOn = false


playerEl.textContent =  player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function  startGame() {
   gameOn = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame(){
  cardsEl.textContent = "Cards: "
  for ( i = 0 ; i < cards.length ; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = " Do you want another card?"
  } else if (sum === 21) {
    message = "You Win!"
    hasBlackJack = true
  } else {
    message = "Loser"
    gameOn = false
  }
  messageEl.textContent = message
  betting()
}


function newCard (){
  if ( gameOn === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}

function  betting(){
  if( sum === 21){
       player.chips = ` ${parseInt(player.chips) + parseInt(player.bet)}`
 } else if( sum >= 22){
     player.chips =  ` ${player.chips - player.bet}`
 }
 playerEl.textContent = `Victor: $${player.chips}`
}
