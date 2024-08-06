// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const buttonMonth = document.querySelector('.monthly');
const buttonAnnua = document.querySelector('.annually');
const buttonActive = document.querySelector('.btn-active');
const card1 = document.querySelector('#card-1');
const card2 = document.querySelector('#card-2');
const card3 = document.querySelector('#card-3');
const btnBuy = document.querySelector('#buy');
// session
    buttonMonth.addEventListener('click', () => {
    buttonMonth.classList.add('btn-active');
    buttonAnnua.classList.remove('btn-active');
    sessionStorage.setItem('activeButton', 'monthly');
});
buttonAnnua.addEventListener('click', () => {
    buttonAnnua.classList.add('btn-active');
    buttonMonth.classList.remove('btn-active');
    sessionStorage.setItem('activeButton', 'annually');
});

if (sessionStorage.getItem('activeButton') === 'annually') {
    buttonAnnua.classList.add('btn-active');
    buttonMonth.classList.remove('btn-active');
} else {
    buttonMonth.classList.add('btn-active');
    buttonAnnua.classList.remove('btn-active');
}

card1.addEventListener('click', () => {
    card1.classList.add('card-focus');
    card1.classList.remove('card');
    card2.classList.remove('card-focus');
    card2.classList.add('card');
    card3.classList.remove('card-focus');
    card3.classList.add('card');
});
card2.addEventListener('click', () => {
    card2.classList.add('card-focus');
    card2.classList.remove('card');
    card1.classList.remove('card-focus');
    card1.classList.add('card');
    card3.classList.remove('card-focus');
    card3.classList.add('card');
});
card3.addEventListener('click', () => {
    card3.classList.add('card-focus');
    card3.classList.remove('card');
    card1.classList.remove('card-focus');
    card1.classList.add('card');
    card2.classList.remove('card-focus');
    card2.classList.add('card');
});
// tao class khi active co su thay doi va tao function onlick khi click vao button do thi class active dc them vao
//  tao bien = class duoc active 
//  set local cho bien vua tao 
