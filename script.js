var sound_notice = '<p id="sound-notice" onanimationend="game_screen.innerHTML = welcome">Please turn sound on for best experience.</p>';

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

var failure = '\
<p class = "failure" onanimationend="game_screen.innerHTML = retry;"><b>YOU<br/>FAILED!</b></p>\
'

var retry = '\
<button class = "retry" onclick = "restart_game()">Try again</p>\
'

var stage1_passed = false;

function stage1_check() {
    if (document.getElementById("input1").value == "12") {
        stage1_passed = true;
        game_screen.innerHTML = welcome;
    }
}

function failure_check(stage_passed) {
    if (stage_passed == false) {
        game_screen.innerHTML = failure;
        var sound_of_failure = new Audio('https://github.com/vadrif-draco/Shroofland/blob/master/mission-failed.mp3');
        sound_of_failure.play();
    }
}

function restart_game() {
    stage1_passed = false;
    // same for all stages please
    game_screen.innerHTML = stage1;
}

var game_screen = document.getElementById("game-screen");

var sound_notice_element = document.getElementById("sound-notice");

var input1 = document.getElementById("input1");


window.onload = () => {
    var intro = new Audio('https://github.com/vadrif-draco/Shroofland/blob/master/intro.mp3');
    intro.play();
    game_screen.innerHTML = welcome;
}
