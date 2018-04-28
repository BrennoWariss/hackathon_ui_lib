'use strict';

var section__code = document.getElementById('section__code');
var div__code = document.getElementById('code');
var code__content = section__code.children[2];

function showHideCode(){
   if(section__code.children[0].innerHTML === 'hide markup'){
    section__code.children[0].innerHTML = '';
    section__code.children[0].innerHTML = 'show markup';
    section__code.children[0].style.color = 'green';
    section__code.removeChild(code__content);
   }else {
    section__code.children[0].innerHTML = '';
    section__code.children[0].innerHTML = 'hide markup';
    section__code.children[0].style.color = 'black';
    section__code.appendChild(code__content);
   }
}

section__code.children[0].addEventListener('click',showHideCode);