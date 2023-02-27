"use strict";
// variable
const gameRule = document.querySelector(".game-rule");
const opportunity = document.querySelector(".opportunity");

const player0 = document.querySelectorAll(".player0");
const player1 = document.querySelectorAll(".player1");

const ruleBtn = document.querySelector(".rule");
const rollBtn = document.querySelector(".roll");
const startBtn = document.querySelector(".start");
const submitBtn = document.querySelector(".submit");
const modalCloseBtn = document.querySelector("#close-btn");

const diceDiv = document.querySelector(".dice-div");
const greenDice = document.querySelectorAll(".green-dice");

const randomNum = () => Math.trunc(Math.random() * 6) + 1;
let countOpp = 3;
let playing = true;
let activePlayer = 1;
let diceArr = [];

// 좀 더 정교하게 만들어야 한다.
let filter1;
let filter2;
let filter3;
let filter4;
let filter5;
let filter6;

// filter1 !== [] && 클릭된 칸이 에이스라면 ? 에이스.textContent = 1 * filter1.length : 에이스.textContent = 0;
// filter2 !== [] && 클릭된 칸이 데우스라면 ? 데우스.textContent = 1 * filter1.length : 데우스.textContent = 0;
// filter3 !== [] && 클릭된 칸이 쓰리라면 ? 쓰리.textContent = 1 * filter1.length : 쓰리.textContent = 0;
// filter4 !== [] && 클릭된 칸이 포스라면 ? 포스.textContent = 1 * filter1.length : 포스.textContent = 0;
// filter5 !== [] && 클릭된 칸이 파이브라면 ? 파이브.textContent = 1 * filter1.length : 파이브.textContent = 0;
// filter6 !== [] && 클릭된 칸이 식스라면 ? 식스.textContent = 1 * filter1.length : 식스.textContent = 0;

// 페이지 로드됐을 때 조건
const invisible = function () {
	diceDiv.classList.add("invisible");
	opportunity.classList.add("invisible");
};
invisible();

//////////////////////////////////////////////////////////////////////////////
// 함수
//////////////////////////////////////////////////////////////////////////////
const countLeft = function () {
	countOpp--;
	opportunity.textContent = `${countOpp} Left`;
	if (countOpp === 0) {
		countOpp = 0;
		rollBtn.classList.add("invisible");
		for (let i = 0; i < greenDice.length; i++) {
			diceArr.push(Number(greenDice[i].src.slice(-5, -4)));
		}
		console.log(diceArr);
		filter1 = diceArr.filter((num) => num === 1);
		filter2 = diceArr.filter((num) => num === 2);
		filter3 = diceArr.filter((num) => num === 3);
		filter4 = diceArr.filter((num) => num === 4);
		filter5 = diceArr.filter((num) => num === 5);
		filter6 = diceArr.filter((num) => num === 6);
	}
};

const playerChange = function () {
	document.getElementById(`${activePlayer}p`).classList.toggle("who_turn");
	!playing ? (activePlayer = 1) : (activePlayer = 2);
	document.getElementById(`${activePlayer}p`).classList.toggle("who_turn");
	rollBtn.classList.remove("invisible");
	countOpp = 3;
	diceArr = [];
	filter1;
	filter2;
	filter3;
	filter4;
	filter5;
	filter6;
	opportunity.textContent = `${countOpp} Left`;
	submitBtn.classList.toggle("invisible");
	for (let i = 0; i < greenDice.length; i++) {
		greenDice[i].src = `img/green_dice1.png`;
		greenDice[i].classList.remove("selected-dice");
	}
	playing ? (playing = false) : (playing = true);
};

const player0ScoreFunc = function (i, e) {
	if (player0[i].textContent !== "") {
		// 점수칸이 비어있지 않으면 더이상 클릭이 안되게.
		player0[i].classList.add("no-click"); // 리셋버튼을 누르면 해당 속성 삭제!!
	} else if (e.target.parentNode.classList.contains("aces")) {
		// 클릭된 칸의 부모클래스가  에에스라면
		filter1 !== []
			? (e.target.textContent = 1 * filter1.length)
			: (e.target.textContent = 0);
	} else if (e.target.parentNode.classList.contains("deuces")) {
		filter2 !== []
			? (e.target.textContent = 2 * filter2.length)
			: (e.target.textContent = 0);
	} else if (e.target.parentNode.classList.contains("threes")) {
		filter3 !== []
			? (e.target.textContent = 3 * filter3.length)
			: (e.target.textContent = 0);
	} else if (e.target.parentNode.classList.contains("fours")) {
		filter4 !== []
			? (e.target.textContent = 4 * filter4.length)
			: (e.target.textContent = 0);
	} else if (e.target.parentNode.classList.contains("fives")) {
		filter5 !== []
			? (e.target.textContent = 5 * filter5.length)
			: (e.target.textContent = 0);
	} else if (e.target.parentNode.classList.contains("sixes")) {
		filter6 !== []
			? (e.target.textContent = 6 * filter6.length)
			: (e.target.textContent = 0);
	}
};

const player1ScoreFunc = function (i, e) {
	if (player1[i].textContent !== "") {
		// 점수칸이 비어있지 않으면 더이상 클릭이 안되게.
		player1[i].classList.add("no-click"); // 리셋버튼을 누르면 해당 속성 삭제!!
	} else if (e.target.parentNode.classList.contains("aces")) {
		// 클릭된 칸의 부모클래스가  에에스라면
		filter1 !== []
			? (e.target.textContent = 1 * filter1.length)
			: (e.target.textContent = 0);
	} else if (e.target.parentNode.classList.contains("deuces")) {
		filter2 !== []
			? (e.target.textContent = 2 * filter2.length)
			: (e.target.textContent = 0);
	} else if (e.target.parentNode.classList.contains("threes")) {
		filter3 !== []
			? (e.target.textContent = 3 * filter3.length)
			: (e.target.textContent = 0);
	} else if (e.target.parentNode.classList.contains("fours")) {
		filter4 !== []
			? (e.target.textContent = 4 * filter4.length)
			: (e.target.textContent = 0);
	} else if (e.target.parentNode.classList.contains("fives")) {
		filter5 !== []
			? (e.target.textContent = 5 * filter5.length)
			: (e.target.textContent = 0);
	} else if (e.target.parentNode.classList.contains("sixs")) {
		filter6 !== []
			? (e.target.textContent = 6 * filter6.length)
			: (e.target.textContent = 0);
	}
};

//  tbodyChildren[0].         children[1]
//  점수표 카테고리 클래스. children[1] === player0 / children[2] === player1
//  e.target.parentNode ===>  클릭된 input의 부모가 어떤 점수표 카테고리를 갖고
// 점수표의 빈킨을 클릭하면 player0인지 player1인지 판단 , 1p인지 2p인지 판단해야 함
const player0Score = function () {
	for (let i = 0; i < player0.length; i++) {
		player0[i].addEventListener("click", function (e) {
			submitBtn.classList.remove("invisible");
			player0ScoreFunc(i, e);
			console.log(e.target);
			console.log(activePlayer);
		});
	}
};

const player1Score = function () {
	// 이 함수기 작동이 안됨... 뭔가 문제?
	for (let i = 0; i < player1.length; i++) {
		player1[i].addEventListener("click", function (e) {
			submitBtn.classList.remove("invisible"); // 왜 작동을 안하지?
			player1ScoreFunc(i, e);
			console.log(e.target);
			console.log(activePlayer);
		});
	}
};

//////////////////////////////////////////////////////////////////////////////
// 이벤트 리스너
//////////////////////////////////////////////////////////////////////////////

// start button
startBtn.addEventListener("click", function () {
	diceDiv.classList.remove("invisible");
	opportunity.classList.remove("invisible");
	submitBtn.classList.add("invisible");
	document.getElementById(`1p`).classList.add("who_turn");
});

// rule modal - open
ruleBtn.addEventListener("click", () => gameRule.classList.remove("invisible"));

// rule modal - close
modalCloseBtn.addEventListener("click", () => gameRule.classList.add("invisible"));

rollBtn.addEventListener("click", countLeft);

// 아래 조건문으로 각 플레이어는 상대방의 점수표에 기록할 수 없음
activePlayer === 1 ? player0Score() : player1Score();

//////////////////////////////////////////////////////////////////////////
for (let i = 0; i < greenDice.length; i++) {
	// roll dice
	rollBtn.addEventListener("click", function () {
		if (!greenDice[i].classList.contains("selected-dice")) {
			greenDice[i].src = `img/green_dice${randomNum()}.png`;
		}
	});

	// if select green dice, green dice size down 50%
	greenDice[i].addEventListener("click", function () {
		let diceNum = Number(greenDice[i].src.slice(-5, -4));
		greenDice[i].classList.toggle("selected-dice");
	});
}
//////////////////////////////////////////////////////////////////////////////

// SUBMIT 버튼을 누르면 플레이어가 변경됨. // if 문 안에 submit 버튼을 넣는다.....
if (playing) submitBtn.addEventListener("click", playerChange);
/* if (playing) {
	submitBtn.addEventListener("click", function () {
		playerChange();
		playing = false;
	});
} else {
	submitBtn.addEventListener("click", function () {
		playerChange();
		playing = true;
	});
} */
