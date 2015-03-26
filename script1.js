autosize(document.querySelectorAll('textarea'));

var randomButton = document.getElementById('random');
var columnEls = document.getElementsByClassName('column');
var editButton = document.getElementById('edit');
var leftInputEl = document.getElementById('left-input');
var rightInputEl = document.getElementById('right-input');
var leftOutputEl = document.getElementById('left-output');
var rightOutputEl = document.getElementById('right-output');
var leftWordsList = [];
var rightWordsList = []; 

randomButton.addEventListener( 'click', function(){
    for (var i = 0; i < columnEls.length; i++) {
        columnEls[i].className="column flipped";
        leftWordsList = leftInputEl.value.split("\n");
        rightWordsList = rightInputEl.value.split("\n");  
    }
    editButton.style.visibility = 'visible';
    leftOutputEl.innerHTML = leftWordsList[Math.floor(leftWordsList.length*Math.random())];
    rightOutputEl.innerHTML = rightWordsList[Math.floor(rightWordsList.length*Math.random())];
  }, false);


editButton.addEventListener('click', function() {
      for (var i = 0; i < columnEls.length; i++) {
        columnEls[i].className="column";
    }
        editButton.style.visibility = 'hidden';

}, false);

