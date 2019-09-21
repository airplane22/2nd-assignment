window.onload = () => {
	const app = document.querySelector("#app");
	const testDiv = document.createElement("div");
	const practiceOne = document.createElement("p");
	const practiceTwo = document.createElement("p");

	testDiv.append(practiceOne, practiceTwo);
	app.prepend(testDiv);

	//--------------------------

	const HIDING_CN = "hiding";

    const timer = document.querySelector(".timer");
    timer.innerHTML = "";
	const anlgtimerContainer = document.querySelector(".anlg-clock");
	anlgtimerContainer.innerHTML="";
	const secondHand = document.createElement("img");
	secondHand.src = "http://images.webskills.kr/etc/s.png";

	anlgtimerContainer.appendChild(secondHand);

	const timerContainer = document.querySelector(".dgt-clock");
    timerContainer.innerHTML="";
	const timerTitle = document.createElement("h1");

    const btnDiv = document.createElement("div");
    const plusBtn = document.createElement("button");
    const minusBtn = document.createElement("button");
    const startBtn = document.createElement("button");

    timerContainer.appendChild(timerTitle);
    timerContainer.appendChild(btnDiv);
    btnDiv.appendChild(plusBtn);
    btnDiv.appendChild(minusBtn);
    btnDiv.appendChild(startBtn);

    let time = `00`;

    timerTitle.innerText = time;
    plusBtn.innerText = `+`;
    minusBtn.innerText = `-`;
    startBtn.innerText = `start`;


	function plusSeconds(){
    	let seconds = parseInt(time);
        if (seconds !== 60){
        	seconds += 1;
        	degree = 6*seconds;
        	secondHand.style.transform = `rotate(${degree}deg)`;
		}
    	time = `${seconds < 10 ? `0${seconds}` : seconds}`;
        timerTitle.innerText = time;
	}

	function minusSeconds(){
    	let seconds = parseInt(time);
    	if (seconds !== 0){
    		seconds -= 1;
    		degree = 6*seconds;
        	secondHand.style.transform = `rotate(${degree}deg)`;
		}
    	time = `${seconds < 10 ? `0${seconds}` : seconds}`;
        timerTitle.innerText = time;
	}

	function countSeconds(){
		let seconds = parseInt(time);
    	if (seconds !== 0){
    		seconds -= 1;
    		degree = 6*seconds;
        	secondHand.style.transform = `rotate(${degree}deg)`;
         	time = `${seconds < 10 ? `0${seconds}` : seconds}`;
			timerTitle.innerText = time;
    		return;
		} else {
    		btnDiv.classList.remove(HIDING_CN);
    		clearInterval(countTime);
		}
	}

	function startTimer(){
		btnDiv.classList.add(HIDING_CN);
		window.countTime = setInterval(countSeconds, 1000); //1초마다

	}

	function loadTimer() {
    	plusBtn.addEventListener("click", plusSeconds);
    	minusBtn.addEventListener("click", minusSeconds);
    	startBtn.addEventListener("click", startTimer);
	}

	loadTimer();

};
