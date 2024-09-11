
'use strict';
window.onload = function() {
    var preloaderTimeLimit = 3000;
      var preloader = document.getElementById('preloader');
      setTimeout(function() {
      preloader.style.display = 'none';
      }, preloaderTimeLimit);
  }

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
// const overlay = document.querySelector('div');
// overlay.className='overlay';
// document.body.appendChild(overlay);

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    // overlay.classList.toggle('active');
});
