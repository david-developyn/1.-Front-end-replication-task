//////////////////////
// GAME IN PROGRESS //

let player_choice, finish_time;

function user_picked(player_choice) {
	this.player_choice = player_choice;
	window.requestAnimationFrame(computer_picks);
	document.getElementById("options-screen").style.display = "none";
	document.getElementById("active-round").style.display = "flex";
	const option_element = document.getElementsByClassName(player_choice)[0].cloneNode(true);
	option_element.onclick = "";
	document.getElementById("player-choice").appendChild(option_element);
	finish_time = new Date().getTime() + 3000;
}

function computer_picks() {
	const computer_choice_element = document.getElementById("computer-choice");
	if (computer_choice_element.children.length === 2) {
		computer_choice_element.children[1].remove();
	}
	const option_element = document.getElementById("options-screen").children[
		Math.floor(
			Math.random() * 5
		)
	].cloneNode(true);
	option_element.onclick = "";
	computer_choice_element.appendChild(option_element);
	if (new Date().getTime() < finish_time) {
		window.requestAnimationFrame(computer_picks);
	} else {
		const score_element = document.getElementById("score");
		switch (this.player_choice) {
			case "rock":
				switch (option_element.classList[0]) {
					case "scissors":
					case "lizard":
						document.getElementById("result-text").innerText = "YOU WIN";
						score_element.innerText = window.parseInt(
							score_element.innerText
						) + 1;
						break;
					case "paper":
					case "spock":
						document.getElementById("result-text").innerText = "YOU LOSE";
						if (score_element.innerText !== "0") {
							score_element.innerText = window.parseInt(
								score_element.innerText
							) - 1;
						}
						break;
					default:
						document.getElementById("result-text").innerText = "YOU DRAW";
				}
				break;
			case "paper":
				switch (option_element.classList[0]) {
					case "rock":
					case "spock":
						document.getElementById("result-text").innerText = "YOU WIN";
						score_element.innerText = window.parseInt(
							score_element.innerText
						) + 1;
						break;
					case "scissors":
					case "lizard":
						document.getElementById("result-text").innerText = "YOU LOSE";
						if (score_element.innerText !== "0") {
							score_element.innerText = window.parseInt(
								score_element.innerText
							) - 1;
						}
						break;
					default:
						document.getElementById("result-text").innerText = "YOU DRAW";
				}
				break;
			case "scissors":
				switch (option_element.classList[0]) {
					case "paper":
					case "lizard":
						document.getElementById("result-text").innerText = "YOU WIN";
						score_element.innerText = window.parseInt(
							score_element.innerText
						) + 1;
						break;
					case "rock":
					case "spock":
						document.getElementById("result-text").innerText = "YOU LOSE";
						if (score_element.innerText !== "0") {
							score_element.innerText = window.parseInt(
								score_element.innerText
							) - 1;
						}
						break;
					default:
						document.getElementById("result-text").innerText = "YOU DRAW";
				}
				break;
			case "lizard":
				switch (option_element.classList[0]) {
					case "paper":
					case "spock":
						document.getElementById("result-text").innerText = "YOU WIN";
						score_element.innerText = window.parseInt(
							score_element.innerText
						) + 1;
						break;
					case "rock":
					case "scissors":
						document.getElementById("result-text").innerText = "YOU LOSE";
						if (score_element.innerText !== "0") {
							score_element.innerText = window.parseInt(
								score_element.innerText
							) - 1;
						}
						break;
					default:
						document.getElementById("result-text").innerText = "YOU DRAW";
				}
				break;
			case "spock":
				switch (option_element.classList[0]) {
					case "rock":
					case "scissors":
						document.getElementById("result-text").innerText = "YOU WIN";
						score_element.innerText = window.parseInt(
							score_element.innerText
						) + 1;
						break;
					case "paper":
					case "lizard":
						document.getElementById("result-text").innerText = "YOU LOSE";
						if (score_element.innerText !== "0") {
							score_element.innerText = window.parseInt(
								score_element.innerText
							) - 1;
						}
						break;
					default:
						document.getElementById("result-text").innerText = "YOU DRAW";
				}
				break;
		}
		document.getElementById("result").style.display = "flex";
	}
}

// GAME IN PROGRESS //
//////////////////////

////////////////
// RULES MENU //

function show_rules_menu() {
	document.getElementById("rules").style.display = "initial";
}

function close_rules_menu() {
	document.getElementById("rules").style.display = "none";
}

// RULES MENU //
////////////////

function restart_game() {
	document.getElementById("active-round").style.display = "none";
	document.getElementById("result").style.display = "none";
	document.getElementById("options-screen").style.display = "block";
	document.getElementById("player-choice").children[1].remove();
}