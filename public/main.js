let playerOne = 'choose'
let playerTwo = 'choose'
let resetplayers = () => {
	location.reload()
}
let pOnerock = () => {
	playerOne = 'rock'
	document.querySelector('.instructions').textContent = 'Pick one Slayer Two'
}
let pOnescissors = () => {
	playerOne = 'scissors'
	document.querySelector('.instructions').textContent = 'Pick one Slayer Two'
}
let pOnepaper = () => {
	playerOne = 'paper'
	document.querySelector('.instructions').textContent = 'Pick one Slayer Two'
}
document.querySelector('.player-one .rock').addEventListener('click', pOnerock)
document
	.querySelector('.player-one .paper')
	.addEventListener('click', pOnepaper)
document
	.querySelector('.player-one .scissors')
	.addEventListener('click', pOnescissors)

let pTworock = () => {
	playerTwo = 'rock'
	if (playerOne == 'rock') {
		document.querySelector('.instructions').textContent = 'Tie!'
	}
	if (playerOne == 'scissors') {
		document.querySelector('.instructions').textContent = 'Slayer One Wins!'
	}
	if (playerOne == 'paper') {
		document.querySelector('.instructions').textContent = 'Slayer Two Wins!'
	}
}
let pTwoscissors = () => {
	playerTwo = 'scissors'
	if (playerOne == 'scissors') {
		document.querySelector('.instructions').textContent = 'Tie!'
	}

	if (playerOne == 'paper') {
		document.querySelector('.instructions').textContent = 'Slayer One Wins!'
	}
	if (playerOne == 'rock') {
		document.querySelector('.instructions').textContent = 'Slayer Two Wins!'
	}
}
let pTwopaper = () => {
	playerTwo = 'paper'
	if (playerOne == 'paper') {
		document.querySelector('.instructions').textContent = 'Tie!'
	}
	if (playerOne == 'scissors') {
		document.querySelector('.instructions').textContent = 'Slayer One Wins!'
	}
	if (playerOne == 'rock') {
		document.querySelector('.instructions').textContent = 'Slayer Two Wins!'
	}
}
document.querySelector('.player-two .rock').addEventListener('click', pTworock)
document
	.querySelector('.player-two .paper')
	.addEventListener('click', pTwopaper)
document
	.querySelector('.player-two .scissors')
	.addEventListener('click', pTwoscissors)
document.querySelector('.reset').addEventListener('click', resetplayers)
