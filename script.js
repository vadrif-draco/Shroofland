var sound_notice = '<p id="sound-notice" onanimationend="game_screen.innerHTML = start_prompt">Please use headphones for best experience.</p>';

var sound_notice_element = document.getElementById("sound-notice");
var game_screen = document.getElementById("game-screen");
const sound = new Audio('');

var start_prompt = '\
<button class = "retry" onclick = "start_game()">Begin</p>\
'
    // To be fair, the "retry" class that I used for the try again button was very fitting so I just reused it here lol.
function start_game() {
    game_screen.innerHTML = welcome;
    sound.src = 'intro.mp3';
    sound.play();
}

var welcome = '\
<p class="welcome w1">Hi,</p>\
<p class="welcome w2">Welcome to Shroofland.</p>\
<p class="welcome w3">Here, you shall witness the shroofening.</p>\
<p class="welcome w4">You shall go through an excerpt of the pain...</p>\
<p class="welcome w5" onanimationend="game_screen.innerHTML = stage1">... of being a shroof.</p>\
'

var stage1 = '\
<p class = "text1" style="font-size: 1.5em;">What is <b style="color:white;">7 </b>+<b style="color:white;"> 5</b> ?</p>\
<br/>\
<input class = "input1" id = "input1" type="number" oninput="stage1_check()" onanimationend="failure_check(stage1_passed)" \
placeholder="Think fast, Shroof!" />\
'

var stage1_passed = false;

function stage1_check() {
    if (document.getElementById("input1").value == "12") {
        stage1_passed = true;
        game_screen.innerHTML = passage1;
    }
}

var passage1 = '\
<p class = "text1_pass" style="font-size: 1.5em;">What is <b style="color:white;">7 </b>+<b style="color:white;"> 5</b> ?</p>\
<br/>\
<input class = "input1_pass" type="number" value="12" disabled onanimationend="stage2_start()"/> \
'

function stage2_start() {
    game_screen.innerHTML = stage2
    sound.src = 'stage2.mp3';
    sound.play();
}
var stage2 = '\
<p style="font-size: 1.5em;">What is your favorite <br/><b style="color:white;">whale family</b>?</p>\
<br/>\
<div class = "stage2_choices_container">\
<button class = "stage2_btn c1" onclick = "failure_check(stage2_passed)">Balaenopteridae</p>\
<button class = "stage2_btn c2" onclick = "failure_check(stage2_passed)">Balaenidae</p>\
<button class = "stage2_btn c3" onclick = "failure_check(stage2_passed)">Cetotheriidae</p>\
<button class = "stage2_btn c4" onclick = "failure_check(stage2_passed)">Eschrichtiidae</p>\
<button class = "stage2_btn c5" onclick = "stage2_pass()">Monodontidae.. dee?</p>\
<button class = "stage2_btn c6" onclick = "failure_check(stage2_passed)">Physeteridae</p>\
<button class = "stage2_btn c7" onclick = "failure_check(stage2_passed)">Kogiidae</p>\
<button class = "stage2_btn c8" onclick = "failure_check(stage2_passed)">Ziphiidae</p>\
</div>\
'

var stage2_passed = false;

function stage2_pass() {
    stage2_passed = true;
    game_screen.innerHTML = passage2;
}

var passage2 = '<video autoplay width="360" preload="auto"\
<source src="Monodontidae.mp4" type="video/mp4">\
</video>'



var failure = '\
<p class = "failure" onanimationend="game_screen.innerHTML = retry;"><b>YOU<br/>FAILED!</b></p>\
'

function failure_check(stage_passed) {
    if (stage_passed == false) {
        game_screen.innerHTML = failure;
        sound.src = 'mission-failed.mp3';
        sound.play();
    }
}

var retry = '\
<button class = "retry" onclick = "restart_game()">Try again</p>\
'

function restart_game() {
    stage1_passed = false;
    // same for all stages please
    game_screen.innerHTML = stage1;
}

// window.onload = stage2_start(); // Development bypass
window.onload = load_game(); // Actual start

function load_game() {

    game_screen.innerHTML = sound_notice;
}