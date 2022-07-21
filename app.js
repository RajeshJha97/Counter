const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
const span = document.querySelector('.counter');

const btns = document.querySelectorAll('.btn');
let cnt = 0;
btns.forEach(function (btn) {
  btn.addEventListener('mouseenter', function () {
    btn.style.background = 'black';
    btn.style.color = 'white';
  });
  btn.addEventListener('mouseleave', function () {
    btn.style.background = 'white';
    btn.style.color = 'black';
  });

  btn.addEventListener('click', function (e) {
    let operations = e.currentTarget.classList;
    if (operations.contains('decrease')) {
      cnt--;
      span.textContent = cnt;
      if (cnt < 0) {
        span.style.color = 'red';
      }
    } else if (operations.contains('reset')) {
      cnt = 0;
      span.textContent = cnt;
      span.style.color = 'black';
    } else {
      cnt++;
      span.textContent = cnt;
      if (cnt > 0) {
        span.style.color = 'green';
      }
    }
  });
});

// decrease.addEventListener('click', function () {
//   cnt--;
//   span.textContent = cnt;
// });
// reset.addEventListener('click', function () {
//   span.textContent = 0;
// });
// increase.addEventListener('click', function () {
//   cnt++;
//   span.textContent = cnt;
// });
