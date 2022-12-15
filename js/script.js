
const buttonColours = ['red', 'yellow', 'green', 'blue', 'pink', 'purple'];
let userClickedPattern = [];
let level = 0;
let gamePattern = [];
const title = $('h1');
$('.btn').click(function() {
	 let userChosenColour = $(this).attr("id");
	userClickedPattern.push(userChosenColour);

	playSound(userChosenColour);
	animatedPress(userChosenColour);
	checkAnswer(userClickedPattern);
});

function nextSequence() {

	let randomNumber = Math.floor(Math.random() * 6);

	let randomChosenColour = buttonColours[randomNumber];

	gamePattern.push(randomChosenColour);

	let buttonSelected = $(`#${ randomChosenColour }`).fadeOut().fadeIn();

	playSound(randomChosenColour);

	level++;

}
$('.btn-iniciar').on('click', () => {
	nextSequence();
	title.text(`Nivel ${level = 0}`)
})
let playSound = (name) => {
	const audio = new Audio(`../sounds/${name}.mp3`);
	audio.play();

}

function animatedPress(currentColour){
	$(`#${currentColour}`).addClass('pressed');
	setTimeout(() => {

	$(`#${currentColour}`).removeClass('pressed');

	}, 100)
}

function checkAnswer( currentLevel ) {

let lastColor = userClickedPattern.length - 1;
	console.log(lastColor);
console.log('user', userClickedPattern)
console.log('game', gamePattern);
	if(userClickedPattern[lastColor] != gamePattern[lastColor]) {
		console.log('wrong')
		playSound("wrong");
		userClickedPattern = [];
		gamePattern = [];
		title.text("Perdiste, presiona el boton Iniciar Juego para volver a jugar");
		$('body').addClass("game-over");
		setTimeout(() => {
		$('body').removeClass("game-over");
		}, 200)
		title.addClass('lost');

	} else if(userClickedPattern.length === gamePattern.length){
		console.log('true');
		
	title.text(`Nivel ${level = gamePattern.length}`)
		setTimeout(() => nextSequence(), 1000);
		userClickedPattern=[];

	}
}
