var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
var score5 = 0;
var score6 = 0;
var lives1 = 20;
var lives2 = 15;
var lives3 = 10;
var lives4 = 10;
var lives5 = 5;
var lives6 = 3;
var startTime = 0;
var isRunning1 = false;
var isRunning2 = false;
var isRunning3 = false;
var isRunning4 = false;
var isRunning5 = false;
var isRunning6 = false;
var stop = 0;
function reset() {
  setText("score_input1", 0);
  setSize("veryeasyball", 75, 75);
  score1 = 0;
  setText("score_input2", 0);
  setSize("easyball", 75, 75);
  score2 = 0;
  setText("score_input3", 0);
  setSize("mediumball", 75, 75);
  score3 = 0;
  setText("score_input4", 0);
  setSize("hardball", 75, 75);
  score4 = 0;
  setText("score_input5", 0);
  setSize("veryhardball", 75, 75);
  score5 = 0;
  setText("score_input6", 0);
  setSize("extremeball", 75, 75);
  score6 = 0;
  setText("lives_input1", 20);
  setSize("veryeasyball", 75, 75);
  lives1 = 20;
  setText("lives_input2", 15);
  setSize("easyball", 75, 75);
  lives2 = 15;
  setText("lives_input3", 10);
  setSize("mediumball", 75, 75);
  lives3 = 10;
  setText("lives_input4", 10);
  setSize("hardball", 75, 75);
  lives4 = 10;
  setText("lives_input5", 5);
  setSize("veryhardball", 75, 75);
  lives5 = 5;
  setText("lives_input6", 3);
  setSize("extremeball", 75, 75);
  lives6 = 3;
}
reset();
function resetTime() {
  stopTimedLoop();
  setText("time1", "Time: " + 0);
  setText("time2", "Time: " + 0);
  setText("time3", "Time: " + 0);
  setText("time4", "Time: " + 0);
  setText("time5", "Time: " + 0);
  setText("time6", "Time: " + 0);
  startTime = 0;
  timedLoop(1000, function() {
    setText("time1", "Time: " + startTime);
    setText("time2", "Time: " + startTime);
    setText("time3", "Time: " + startTime);
    setText("time4", "Time: " + startTime);
    setText("time5", "Time: " + startTime);
    setText("time6", "Time: " + startTime);
    startTime = startTime + 1;
  });
}
resetTime();
onEvent("home1", "click", function(event) {
  setScreen("Home");  
});
onEvent("next1", "click", function(event) {
  setScreen("Difficulty");
  resetTime();
});
onEvent("home2", "click", function(event) {
  setScreen("Home");
  reset();
  resetTime();
});
onEvent("playagain1", "click", function(event) {
  setScreen("Difficulty");
  reset();
  resetTime();
});
onEvent("tryagain1", "click", function(event) {
  setScreen("Difficulty");
  reset();
  resetTime();
});
onEvent("veryeasy", "click", function(event) {
  setScreen("VeryEasy");
  setText("score_input1", 0);
  setText("lives_input1", 20);
  resetTime();
  if (!isRunning1) {
    isRunning1 = true;
  }
  if (startTime == 10) {
    setScreen("LoseScreen");
    setText("finalscoreinput", getText("score_input1"));
  }
});
onEvent("veryeasyball", "click", function(event) {
  setText("score_input1", score1 + 10);
  setPosition("veryeasyball", randomNumber(50, 280), randomNumber(50, 350));
  score1 = score1 + 10;
  if (score1 == 100) {
    setScreen("WinScreen");
    resetTime();
  }
});
onEvent("greenmarblebackground", "click", function(event) {
  setText("lives_input1", lives1 - 1);
  lives1 = lives1 - 1;
  if (lives1 == 10) {
    setSize("veryeasyball", 50, 50);
  } else if ((lives1 == 5)) {
    setSize("veryeasyball", 25, 25);
  } else if ((lives1 == 0)) {
    setScreen("LoseScreen");
    setText("finalscoreinput", getText("score_input1"));
  }
});
onEvent("back1", "click", function(event) {
  setScreen("Difficulty");
  reset();
  resetTime();
});
onEvent("easy", "click", function(event) {
  setScreen("Easy");
  setText("score_input2", 0);
  setText("lives_input2", 15);
  if (!isRunning2) {
    isRunning2 = true;
    if (startTime == 30) {
      setScreen("LoseScreen");
      setText("finalscoreinput", getText("score_input2"));
    }
  }
});
onEvent("easyball", "click", function(event) {
  setText("score_input2", score2 + 5);
  setPosition("easyball", randomNumber(50, 280), randomNumber(50, 350));
  score2 = score2 + 5;
  if (score2 == 100) {
    setScreen("WinScreen");
    resetTime();
  }
});
onEvent("lightgreenmarblebackground", "click", function(event) {
  setText("lives_input2", lives2 - 1);
  lives2 = lives2 - 1;
  if (lives2 == 10) {
    setSize("easyball", 45, 45);
  } else if ((lives2 == 5)) {
    setSize("easyball", 20, 20);
  } else if ((lives2 == 0)) {
    setScreen("LoseScreen");
    setText("finalscoreinput", getText("score_input2"));
  }
});
onEvent("back2", "click", function(event) {
  setScreen("Difficulty");
  reset();
  resetTime();
});
onEvent("medium", "click", function(event) {
  setScreen("Medium");
  setText("score_input3", 0);
  setText("lives_input3", 10);
  if (!isRunning3) {
    isRunning3 = true;
    if (startTime == 60) {
      setScreen("LoseScreen");
      setText("finalscoreinput", getText("score_input3"));
    }
  }
});
onEvent("mediumball", "click", function(event) {
  setText("score_input3", score3 + 2);
  setPosition("mediumball", randomNumber(50, 280), randomNumber(50, 350));
  score3 = score3 + 2;
  if (score3 == 100) {
    setScreen("WinScreen");
    resetTime();
  }
});
onEvent("yellowmarblebackground", "click", function(event) {
  setText("lives_input3", lives3 - 1);
  lives3 = lives3 - 1;
  if (lives == 5) {
    setSize("mediumball", 40, 40);
  } else if ((lives3 == 0)) {
    setScreen("LoseScreen");
    setText("finalscoreinput", getText("score_input3"));
  }
});
onEvent("back3", "click", function(event) {
  setScreen("Difficulty");
  reset();
  resetTime();
});
onEvent("hard", "click", function(event) {
  setScreen("Hard");
  setText("score_input4", 0);
  setText("lives_input4", 10);
  if (!isRunning4) {
    isRunning4 = true;
    if (startTime == 20) {
      setScreen("LoseScreen");
      setText("finalscoreinput", getText("score_input5"));
      resetTime();
    }
  }
});
onEvent("hardball", "click", function(event) {
  setText("score_input4", score4 + 5);
  setPosition("hardball", randomNumber(50, 280), randomNumber(50, 350));
  score4 = score4 + 5;
  if (score4 == 100) {
    setScreen("WinScreen");
    resetTime();
  }
});
onEvent("orangemarblebackground", "click", function(event) {
  setText("lives_input4", lives4 - 1);
  lives4 = lives4 - 1;
  if (lives4 == 5) {
    setSize("hardball", 30, 30);
  } else if ((lives4 == 0)) {
    setScreen("LoseScreen");
    setText("finalscoreinput", getNumber("score_input4"));
  }
});
onEvent("back4", "click", function(event) {
  setScreen("Difficulty");
  reset();
  resetTime();
});
onEvent("veryhard", "click", function(event) {
  setScreen("VeryHard");
  setText("score_input5", 0);
  setText("lives_input5", 5);
  if (!isRunning5) {
    isRunning5 = true;
    if (startTime == 40) {
      setScreen("LoseScreen");
      setText("finalscoreinput", getText("score_input5"));
    }
  }
});
onEvent("veryhardball", "click", function(event) {
  setText("score_input5", score5 + 2);
  setPosition("veryhardball", randomNumber(50, 280), randomNumber(50, 350));
  score5 = score5 + 2;
  if (score5 == 100) {
    setScreen("WinScreen");
    resetTime();
  }
});
onEvent("redmarblebackground", "click", function(event) {
  setText("lives_input5", lives5 - 1);
  lives5 = lives5 - 1;
  if (lives5 == 4) {
    setSize("veryhardball", 60, 60);
  } else if ((lives5 == 3)) {
    setSize("veryhardball", 45, 45);
  } else if ((lives5 == 2)) {
    setSize("veryhardball", 30, 30);
  } else if ((lives5 == 1)) {
    setSize("veryhardball", 15, 15);
  } else if ((lives5 == 0)) {
    setScreen("LoseScreen");
    setText("finalscoreinput", getText("score_input5"));
  }
});
onEvent("back5", "click", function(event) {
  setScreen("Difficulty");
  reset();
  resetTime();
});
onEvent("extreme", "click", function(event) {
  setScreen("Extreme");
  setText("score_input6", 0);
  setText("lives_input6", 3);
  if (!isRunning6) {
    isRunning6 = true;
    if (startTime == 120) {
      setScreen("LoseScreen");
      setText("finalscoreinput", getText("score_input6"));
    }
  }
});
onEvent("extremeball", "mouseover", function(event) {
  setPosition("extremeball", randomNumber(50, 280), randomNumber(50, 350));
});
onEvent("extremeball", "click", function(event) {
  setText("score_input6", score6 + 1);
  score6 = score6 + 1;
  if (score6 == 100) {
    setScreen("WinScreen");
    resetTime();
  }
});
onEvent("darkredmarblebackground", "click", function(event) {
  setText("lives_input6", lives6 - 1);
  lives6 = lives6 - 1;
  if (lives6 == 2) {
    setSize("extremeball", 45, 45);
  } else if ((lives6 == 1)) {
    setSize("extremeball", 15, 15);
  } else if ((lives6 == 0)) {
    setScreen("LoseScreen");
    setText("finalscoreinput", getText("score_input6"));
  }
});
onEvent("back6", "click", function(event) {
  setScreen("Difficulty");
  reset();
  resetTime();
});
