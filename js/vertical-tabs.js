'use strict';

var tabs = document.getElementById('vertical__tabs');
var vertical__tab__content_one = document.getElementsByClassName('vertical--tab--content--1');
var vertical__tab__content_two = document.getElementsByClassName('vertical--tab--content--2');
var vertical__tab__content_three = document.getElementsByClassName('vertical--tab--content--3');
var vertical__tab__content_four = document.getElementsByClassName('vertical--tab--content--4');
 console.log(vertical__tab__content_one[0].parentElement)

function onTabClick(){
    var active = document.getElementsByClassName('active')[0];
    active.classList.remove('active');
    this.classList.add('class','active');
    
    if(this.classList.contains('second--tab')){
        vertical__tab__content_two[0].style.opacity = '1';
        vertical__tab__content_three[0].style.opacity = '0';
        vertical__tab__content_four[0].style.opacity = '0';
        vertical__tab__content_one[0].style.opacity = '0';
    }
    if(this.classList.contains('third--tab')){
        vertical__tab__content_two[0].style.opacity = '0';
        vertical__tab__content_three[0].style.opacity = '1';
        vertical__tab__content_four[0].style.opacity = '0';
        vertical__tab__content_one[0].style.opacity = '0';
    }
    if(this.classList.contains('fourth--tab')){
        vertical__tab__content_two[0].style.opacity = '0';
        vertical__tab__content_three[0].style.opacity = '0';
        vertical__tab__content_four[0].style.opacity = '1';
        vertical__tab__content_one[0].style.opacity = '0';
    }
    if(this.classList.contains('first--tab')){
        vertical__tab__content_two[0].style.opacity = '0';
        vertical__tab__content_three[0].style.opacity = '0';
        vertical__tab__content_four[0].style.opacity = '0';
        vertical__tab__content_one[0].style.opacity = '1';
    }
}
tabs.children[0].addEventListener('click',onTabClick);
tabs.children[1].addEventListener('click',onTabClick);
tabs.children[2].addEventListener('click',onTabClick);
tabs.children[3].addEventListener('click',onTabClick);




