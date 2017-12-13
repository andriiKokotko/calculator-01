const display = document.getElementById('screen');

document.querySelectorAll('.keys').forEach(el => {
    el.addEventListener('click', numClicked);
});
  
function numClicked(ev) {
    const number = ev.target.innerHTML;
    display.value += number;
};

const clear = document.getElementById('clear');
clear.addEventListener('click', el => display.value = "");

const cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => {
    let val = display.value;
    let num = val.length - 1;
    let newNum =  val.substring(0, num);
    display.value = newNum;
});

const solve = document.getElementById('equals');
solve.addEventListener('click', el => {
    el = display.value;
    el = eval(el);
    display.value = el;
});
