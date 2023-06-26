const textInput = document.querySelector("input[type='text']");
console.log(textInput);

// textInput.addEventListener('keydown', function () {
//   console.log('keydown');
// });

// textInput.addEventListener('keyup', function () {
//   console.log('keyup');
// });

// textInput.addEventListener('keypress', function () {
//   console.log('keypress');
// });
textInput.addEventListener('click', function (e) {
  console.log(e);
  console.log(e.target);
});
