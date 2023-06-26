// INTRODUCTION TO DOM EVENTS
/*
user clicks
user hovers
user scrolls
fills out form
user double clicks
user mouses over an element
user drags and drops
user presses key, etc
*/

const changeBtn = document.querySelector('.change-bg');
const resetBtn = document.querySelector('.reset-bg');

changeBtn.addEventListener('click', function () {
  document.body.style.backgroundColor = '#b23c3e';
  console.log('The Change button has been pressed');
});

resetBtn.addEventListener('click', function () {
  document.body.style.backgroundColor = '#ffff';
  console.log('The Reset button has been pressed');
});
