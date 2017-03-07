// copyright Loho, Lorenz, Joswig, Raber & polymake team


// ------------ FUNCTIONS FOR INITIALIZATION ----------------------------------------

//initialize: get the data and load the animations
function initialize(round){

	roundNumber.innerHTML = '1/' + numOfRounds;
	allCorrect = true;

	setDifficulty();
	setupAnimations();
	hideFoldings();
	setNetEventListeners();	

	// get the data
  var perm = randomPermutation();
  dataTuple = getTuple(round, currDifficulty);

	initializeNets(perm);

	loadScripts();

	roundStartTime = Date.now();
	countingTime = true;
}

function initializeNets(perm){
	resetDragging();
	for (var i=0; i<numberOfPolytopes; i++){
		nets[i].src = 'data/nets/' + dataTuple[perm[i]] + '.svg';
		nets[i].name = dataTuple[perm[i]];
	}
}


// show only numberOfPolytopes many polytopes and adjust the size
function setupAnimations(){
	for (var i=0; i<numberOfPolytopes; i++){
		polytopes[i].style.display = 'block';
		equals[i].style.display = 'inline';
		containers[i].style.display = 'block';
	}
	for (var i=0; i<numberOfPolytopes-1; i++){
		arrows[i].style.display = 'block';
	}

	for (var i=numberOfPolytopes-1; i<maxNumberOfPolytopes-1; i++){
		arrows[i].style.display = 'none';
	}

	for (var i=numberOfPolytopes; i<maxNumberOfPolytopes; i++){
		polytopes[i].style.display = 'none';
		equals[i].style.display = 'none';
		containers[i].style.display = 'none';
	}

	rendererFactor = rendererFactors[numberOfPolytopes-2];
	for (var i=0; i<numberOfPolytopes-1; i++){
		arrows[i].style.width = arrowWidths[numberOfPolytopes-2];
	}
	for (var i=0; i<numberOfPolytopes; i++){
		nets[i].style.height= netHeights[numberOfPolytopes-2];
	}

	//document.getElementById('polytopesRow').style.height = mainRowHeights[numberOfPolytopes-2];
	document.getElementById('netsRow').style.height = netRowHeights[numberOfPolytopes-2];
	document.getElementById('equalsRow').style.height = equalsRowHeights[numberOfPolytopes-2];

	selectNumOfPolys.value = numberOfPolytopes;
}


function startGame(){
	showDragHint();
	nextButton.innerHTML = translation[language]['Next'];
	gameIsOver = false;
	round = 1;
	time = 0;
	timeNumber.innerHTML = time;
	points = 0;
	game.style.display = 'block';
	startScreen.style.display = 'none';
	restoreGame();


	// difficulty 7 only works with 3 polytopes
	if (numberOfPolytopes != 3 && difficulty == 7){
		numberOfPolytopes = 3;
	}

	initialize(1);
}

function showDragHint(){
	dragHint.style.display = 'block';
	switch(numberOfPolytopes){
		case 2: 
			dragHint.style.left = '28.5vw';
			dragHint.style.top = '46vmin';
			break;
		case 3: 
			dragHint.style.left = '21vw';
			dragHint.style.top = '48vmin';
			break;
		case 4:
			dragHint.style.left = '16.5vw';
			dragHint.style.top = '44vmin';
			break;
		default:
			dragHint.style.left = '13vw';
			dragHint.style.top = '42vmin';
	}
}


function restoreGame(){

	for (var i=0; i<maxNumberOfPolytopes; i++){
		// show normal equals
		equals[i].src = 'img/equal.svg';
		// hide additional points
		addPointsDivs[i].innerHTML = '';
	}


	setControls();
	rotationTime = maxRotationTime * initialRotationTime;

	// show normal gaming screen
	nextButton.style.display = 'none';
	solutionButton.style.display = 'none';
	okButton.style.display = 'inline-block';
	resetButton.style.display = 'inline-block';
	pointsNumber.innerHTML = points;
	bestScoreNumber.innerHTML = highscore;
	addPointsDiv.style.display = 'none';
	moreScreen.style.display = 'none';
	interact('.draggable').draggable(true);
}



function setControls(){

	controlsRotationSpeed = rotSpeedRange.value;
	controlsZoomSpeed = zoomSpeedRange.value;
	controlsNoPan = !panEnabledCheckbox.checked;
	controlsNoZoom = !zoomEnabledCheckbox.checked;

	for (var i=0; i<numberOfPolytopes; i++){
		if (polytopeControls[i]){
			polytopeControls[i].zoomSpeed = zoomSpeedRange.value;
			polytopeControls[i].rotateSpeed = rotSpeedRange.value;
			polytopeControls[i].noZoom = !zoomEnabledCheckbox.checked;
		}
	}
	for (var i=0; i<numberOfPolytopes; i++){
		if (foldingControls[i]){
			foldingControls[i].zoomSpeed = zoomSpeedRange.value;
			foldingControls[i].rotateSpeed = rotSpeedRange.value;
			foldingControls[i].noZoom = !zoomEnabledCheckbox.checked;
		}
	}
}



//------------------- FUNCTIONS FOR DIFFICULTY---------------------------------

function setDifficulty(){
	if (calibration && !testMode){
		currDifficulty = computeDifficulty(round);	
	}else{
		currDifficulty = difficulty;
	}
}


// computes the difficulty if calibration is enabled
function computeDifficulty(round){
	if (numOfRounds ==1) return difficulty;
	halfRounds = Math.floor(numOfRounds/2);
	if (round > halfRounds) return difficulty;
	return Math.max(1,difficulty - Math.floor((halfRounds +1 - round)/halfRounds* difficultyOffset));
}



//------------------- FUNCTIONS FOR ANIMATION ---------------------------------

// load the scripts for animating the polytopes and the foldings
function loadScripts(){
	polytopeCreators = [];
	foldingCreators = [];
	polyScripts.innerHTML = '';
	foldingScripts.innerHTML = '';
	currScrNum = 0;
	currFoldingScrNum = 0;
	appendScript();
	appendFoldingScript();
}


// append script for creating next polytope 
function appendScript(){
	// scripts fully loaded -> start creating the polytopes
	if (currScrNum >= numberOfPolytopes){
		createPolytopes();
	} 

	// ... otherwise load next script 
	else{
		var polyScript = document.createElement('script');
		polyScript.className = 'polyScript';
		polyScript.src = 'data/polytopes/' + dataTuple[currScrNum] + '.js';
		polyScripts.appendChild(polyScript);
		currScrNum++;
	}
}

// append script for creating next folding
function appendFoldingScript(){
	if (currFoldingScrNum >= numberOfPolytopes){
	} 

	// ... otherwise load next script 
	else{
		var foldingScript = document.createElement('script');
		foldingScript.className = 'foldingScript';
		foldingScript.src = 'data/foldings/' + dataTuple[currFoldingScrNum] + '.js';
		foldingScripts.appendChild(foldingScript);
		currFoldingScrNum++;
	}
}

function createPolytopes(){

	// before rendering new polytopes the old ones need to be stoped
	stopAnimatingPolytopes();

	// start rendering
	if (polytopeCreators && polytopeCreators.length == numberOfPolytopes){
		for (var i=0; i<numberOfPolytopes; i++){
			polytopeCreators[i](i, backgroundColor, 40, polytopeLineWidth(), rendererWidth(), rendererHeight());
		}
	}

	// restore move cursor
	var canvasDivs = document.getElementsByTagName('canvas');
	for (var i=0; i< canvasDivs.length; i++){
		canvasDivs[i].style.cursor = 'move';
	}
}


function createFoldings(){

	dragHint.style.display = 'none';
	stopAnimatingFoldings();
	rotationTime = 0;
	firstFolding = true;

	// reset folding values
	oldScale = 0;

	// hide the svgs and show the foldings
	for (var i=0; i<numberOfPolytopes; i++){
		containers[i].style.display = 'none';
		foldings[i].style.display = 'block';
	}
	// start rendering the foldings
	for (var i=0; i<numberOfPolytopes; i++){
		var ind = dataTuple.indexOf(nets[i].name);
		foldingCreators[ind](i, backgroundColor, 40, foldingLineWidth(), rendererWidth(), rendererHeight());
	}

	// move the controls to the barycenter so that rotation is always around the barycenter
	moveToBaryCenter();
	// update the zoom of the camera
	updateZoom();
	saveOldFoldingCameras();

	//foldingRange.style.display = 'block';
	setTimeout(startFolding, 1000);

	// set controls of polytopes and foldings
	setControls();
}


function stopAnimatingPolytopes(){
	for (var i=0; i<renderIds.length; i++){
		cancelAnimationFrame(renderIds[i]);
	}
}


function stopAnimatingFoldings(){
	// stop animation
	for (var i=0; i<foldingRenderIds.length; i++){
		cancelAnimationFrame(foldingRenderIds[i]);
	}

	clearIntervals();
	//clearRotIntervals();
}

function clearIntervals(){
	intervals.forEach(function(interval){
		clearInterval(interval);
	});
	intervals = [];

	timeouts.forEach(function(timeout){
		clearTimeout(timeout);
	});	
	timeouts = [];
}

//function clearRotIntervals(){
//	rotIntervals.forEach(function(interval){
//		clearInterval(interval);
//	});
//	rotIntervals = [];
//}

function hideFoldings(){
	stopAnimatingFoldings();

	// hide the foldings and show the svgs
	for (var i=0; i<numberOfPolytopes; i++){
			foldings[i].innerHTML = '';
			foldings[i].style.display = 'none';
			containers[i].style.display = 'block';
	}
	
	foldingActivated = false;
}


//------------------- FUNCTIONS FOR ROTATION ---------------------------------
// the speed scale for the initial rotation of the polytopes
function speedScale(direction, time){
	switch(direction){
		default: return rotationSpeed * Math.sin(Math.PI * time/rotationTime);
	}
}

var rotations = {
	0: {'x': 0.005, 'y': 0.01, 'z': 0.02},
	1: {'x': -0.01, 'y': 0.02, 'z': -0.005},
	2: {'x': -0.02, 'y': -0.005, 'z': 0.01},
	3: {'x': 0.02, 'y': -0.01, 'z': 0.005},
	4: {'x': -0.005, 'y': 0.02, 'z': -0.01}
}
function rotation(direction, divNum){
	return rotations[divNum][direction];	
}

//------------------- FUNCTIONS FOR NETS ---------------------------------

function changePlaces(net1, net2){
	var tmp1 = net1.src, tmp2 = net1.name;
	net1.src = net2.src;
	net1.name = net2.name;
	net2.src = tmp1;
	net2.name = tmp2;
}

// swap two nets after arrow between them is clicked
function swapNets(evt){
	var arrowNr = Number(evt.currentTarget.name);
	var leftNet = document.getElementsByClassName('net')[arrowNr];
	var leftDropzone = leftNet.parentNode;
	var rightNet = document.getElementsByClassName('net')[arrowNr+1];
	var rightDropzone = rightNet.parentNode;
	updateMappings(leftNet,leftDropzone,rightNet.id,rightDropzone.id);
	resetAndExchange(leftNet,rightDropzone,rightNet,leftDropzone);
}

function highlightArrow(evt){
	evt.currentTarget.style.opacity = 1;
}

function unhighlightArrow(evt){
	evt.currentTarget.style.opacity = 0.5;
}


// ------------------ FUNCTIONS FOR BUTTONS------------------------------- 

function resetButtonClick(){
	showStartScreen();
}

function okButtonClick(){
	checkMatching();
}

function newGameButtonClick(){
	gameOver.style.display = 'none';
	showStartScreen();
}

function showRestartHint(){
	restartHint.style.display = 'block';
	setTimeout(function(){restartHint.style.display = 'none';}, 3500);
}




// ------------------ FUNCTIONS FOR SETTINGS ------------------------------- 

function showSettings(){
	settingsScreen.style.display = "block";
}

function hideSettings(){
	settingsScreen.style.display = 'none';
}

function showStartScreen(){
	game.style.display = 'none';
	startScreen.style.display = 'block';
	stopAnimatingPolytopes();
	stopAnimatingFoldings();
	hideFoldings();
	//resetDifficulties();
	//resetNumOfPolys();
}

function showMoreScreen(){
	moreScreen.style.display = 'block';
}

function hideMoreScreen(){
	moreScreen.style.display = 'none';
}

function resetDifficulties(){
	for (var i=0; i<difficultyDivs.length; i++){
		difficultyDivs[i].style.backgroundColor = 'transparent';
	}
	startDifficulties[0].style.backgroundColor = blueColor;
	gameDifficulties[0].style.backgroundColor = blueColor;
}

function resetNumOfPolys(){
	for (var i=0; i<numOfPolysDivs.length; i++){
		numOfPolysDivs[i].style.backgroundColor = 'transparent';
	}
	numOfPolysDivs[1].style.backgroundColor = blueColor;
}


//function selectMode(event){
//
//	numOfRounds = Number(selectNumOfRounds.value);
//	rotationTime = maxRotationTime * Number(initialRotationTime.value);
//	rotationSpeed= maxRotationSpeed* Number(initialRotationSpeed.value);
//	numberOfPolytopes = Number(selectNumOfPolys.value);
//	difficulty = Number(selectedDifficulty.getAttribute('alt'));
//
//	// difficulty 7 only works with 3 polytopes
//	if (numberOfPolytopes != 3 && difficulty == 7){
//		document.getElementById('difficulty6').click();
//		document.getElementById('difficulty7').style.display = 'none';
//	} else if (numberOfPolytopes !=3){
//		document.getElementById('difficulty7').style.display = 'none';
//	} else if (numberOfPolytopes ==3){
//		document.getElementById('difficulty7').style.display = 'inline-block';
//	}
//
//	// time settings
//	if (selectTime.checked){ 
//		timeDiv.style.display = 'block';
//		for (var i=0; i<timeCol.length; i++){
//			timeCol[i].style.display = 'block';
//		}
//	}
//	else{ 
//		timeDiv.style.display = 'none';	
//		for (var i=0; i<timeCol.length; i++){
//			timeCol[i].style.display = 'none';
//		}
//	}
//
//	// go back to game
//	settings.style.display = 'none';
//	game.style.display= 'block';
//	resetGame();
//}

function changeLanguage(){
	language = selectLanguage.value;
	writeTranslatedText();
}	

function restrictNumOfPolys(on) {
   for (var i=0; i<numOfPolysDivs.length; i++){
      numOfPolysDivs[i].style.backgroundColor = 'transparent';
      if (on) {
         numOfPolysDivs[i].style.opacity = 0.4;
         numOfPolysDivs[i].style.cursor = 'default';
         numOfPolysDivs[i].removeEventListener('click', selectNumOfPolys);
      } else {
         numOfPolysDivs[i].style.opacity = 1;
         numOfPolysDivs[i].style.cursor = 'pointer';
         numOfPolysDivs[i].addEventListener('click', selectNumOfPolys);
      }

   }
   numOfPolysDivs[1].style.backgroundColor = blueColor;
   numberOfPolytopes = 3;
}

function selectDifficulty(event){
		var diffDiv = event.currentTarget;
		for (var i=0; i<difficultyDivs.length; i++){
			difficultyDivs[i].style.backgroundColor = 'transparent';
		}
		diffDiv.style.backgroundColor= blueColor;
		difficulty = Number(diffDiv.getAttribute('alt'));
		gameDifficulties[difficulty-1].style.backgroundColor = greyColor;

      if (difficulty == 7) {
         restrictNumOfPolys(true);
      } else {
         restrictNumOfPolys(false);
      }
}


function selectLanguage(event){
		var langDiv = event.currentTarget;
		for (var i=0; i<languageDivs.length; i++){
			languageDivs[i].style.backgroundColor = 'transparent';
		}
		langDiv.style.backgroundColor= blueColor;
		language = langDiv.getAttribute('alt');
		writeTranslatedText();
}

function selectNumOfPolys(event){
		var numDiv = event.currentTarget;
		for (var i=0; i<numOfPolysDivs.length; i++){
			numOfPolysDivs[i].style.backgroundColor = 'transparent';
		}
		numDiv.style.backgroundColor= blueColor;
		numberOfPolytopes= Number(numDiv.getAttribute('alt'));


}


//----------------- FUNCTIONS FOR TIME ------------------------

// update time every second
var timeInterval = 1000;
setInterval(function(){
	if (countingTime){
		time += timeInterval/1000;
		timeNumber.innerHTML = time;
	}}, timeInterval);



// ------------------ FUNCTIONS FOR SCORE ------------------------------- 

function showAdditionalPoints(addPoints){

	// highest reachable score in this round
	var maxPoints = currDifficulty * numberOfPolytopes;

	// show the additional score in the corresponding color
	switch(addPoints){
		case 0: addPointsText = '<span style="color:' + redColor + '"> + ' + addPoints + '</span>'; break;
		case maxPoints: addPointsText = '<span style="color:' + greenColor + '"> + ' + addPoints + '</span>'; break;
		default: addPointsText = '<span style="color:' + yellowColor + '"> + ' + addPoints + '</span>'; break;
	}

	addPointsDiv.innerHTML = addPointsText;
	addPointsDiv.style.display = 'inline';
}

function showSingleAdditionalPoints(singleAddPoints){
	for (var i=0; i<numberOfPolytopes; i++){
		if (singleAddPoints[i] == 0){
			addPointsDivs[i].innerHTML = '+0';
			addPointsDivs[i].style.color = redColor;
		} else{
			addPointsDivs[i].innerHTML = '+' + String(singleAddPoints[i]);
			addPointsDivs[i].style.color = greenColor;
		}	
	}
}


function additionalPoints(){
  var addPoints = 0;
  var singleAddPoints = new Array(numberOfPolytopes);
	// check how many answers were correct
	correctMatches = 0;
  for (var i=0; i<numberOfPolytopes; i++){
    if (nets[i].name != dataTuple[i]){
	  equals[i].src = 'img/notequal.svg';
	  allCorrect = false;
	  singleAddPoints[i] = 0;
    } else{
			correctMatches++;
			equals[i].src = 'img/equal.svg';
			addPoints += difficulty;
	  		singleAddPoints[i] = difficulty;
		}
  }
	return [addPoints,singleAddPoints] ;
}



// ------------------ FUNCTIONS FOR LOGFILE------------------------------- 
function writeToLogFile(){
	if (logfile){
		var xhr=new XMLHttpRequest();
		xhr.open("POST", "dataStats.json", true);
		xhr.setRequestHeader('Content-type', 'application/json');
		dataTuple.sort();
		var jsonData = [dataTuple.join(), correctMatches/numberOfPolytopes, roundTime, difficulty];
		xhr.send(JSON.stringify(jsonData));
	}
}




// ------------------ FUNCTIONS FOR CHECKING, END OF GAME, NEXT ROUND, ... ------------------------------- 
function checkMatching(){

	// get the round time
	countingTime = false;
	roundTime = Math.round(10*(Date.now()-roundStartTime)/1000)/10;

	//hide submit button
	okButton.style.display = 'none';

	// show additional score
	var aP = additionalPoints();
	addPoints = aP[0];
	var singleAddPoints = aP[1];
	showAdditionalPoints(addPoints);
	showSingleAdditionalPoints(singleAddPoints);

	// disable drag and drop for nets
	disableNetInteraction();
	

	nextButton.style.display = 'inline-block';
	if (round == numOfRounds){
		nextButton.innerHTML = translation[language]['Finish'];
	}
	solutionButton.style.display = 'inline-block';

}


function disableNetInteraction(){
	interact('.draggable').draggable(false);
	for (var i=0; i<maxNumberOfPolytopes; i++){
		nets[i].onmousemove = undefined;
		nets[i].onmouseout = undefined;
		nets[i].style.cursor = 'default';
	}
}



function nextRound(){

	//write to log file
	writeToLogFile();
	// update score
	points += addPoints;

	restoreGame();

	// check if game is over
  round++;
  if (round > numOfRounds){
    endOfGame();
  } else{
    initialize(round);
  }

	if (!gameIsOver) roundNumber.innerHTML = (round) + '/' + numOfRounds;
}


// show end of game 
function endOfGame(){

	gameIsOver = true;

	// update highscore
	if (points > highscore || points == highscore && time < highscoreTime){
  	highscore = points;
  	highscoreTime = time;
	}
	
	// show end of game screen
  gameOver.style.display = 'inline-block';
  stopAnimatingPolytopes();
  stopAnimatingFoldings();
  disableNetInteraction();

  // disable move cursor for animations
  var canvasDivs = document.getElementsByTagName('canvas');
  for (var i=0; i<numberOfPolytopes; i++){
	  canvasDivs[i].style.cursor = 'default';
  }

  okButton.style.display = 'none';
  resetButton.style.display = 'none';
	

	// show score and time
  yourPointsDiv.innerHTML = points;
  yourTimeDiv.innerHTML = time;
  highscoreDiv.innerHTML = highscore;
  highscoreTimeDiv.innerHTML = highscoreTime;
}


