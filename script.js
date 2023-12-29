'use strict';

const firstAnswer = document.querySelector('.first-answer');
const secondAnswer = document.querySelector('.second-answer');
const thirdAnswer = document.querySelector('.third-answer');
const fourthAnswer = document.querySelector('.fourth-answer');

const firstIcon = document.querySelector('.icon1');
const secondIcon = document.querySelector('.icon2');
const thirdIcon = document.querySelector('.icon3');
const fourthIcon = document.querySelector('.icon4');

firstIcon.addEventListener('click', function () {
  if (firstAnswer.classList.contains('hidden')) {
    firstAnswer.classList.remove('hidden');

    const icon = './images/icon-minus';
    firstIcon.src = `${icon}.svg`;
  } else if (!firstAnswer.classList.contains('hidden')) {
    firstAnswer.classList.add('hidden');

    const icons = './images/icon-plus';
    firstIcon.src = `${icons}.svg`;
  }
});

secondIcon.addEventListener('click', function () {
  if (secondAnswer.classList.contains('hidden')) {
    secondAnswer.classList.remove('hidden');

    const secIcon = './images/icon-minus';
    secondIcon.src = `${secIcon}.svg`;
  } else if (!secondAnswer.classList.contains('hidden')) {
    secondAnswer.classList.add('hidden');

    const secIcons = './images/icon-plus';
    secondIcon.src = `${secIcons}.svg`;
  }
});

thirdIcon.addEventListener('click', function () {
  if (thirdAnswer.classList.contains('hidden')) {
    thirdAnswer.classList.remove('hidden');

    const thirIcon = './images/icon-minus';
    thirdIcon.src = `${thirIcon}.svg`;
  } else if (!thirdAnswer.classList.contains('hidden')) {
    thirdAnswer.classList.add('hidden');

    const thirIcons = './images/icon-plus';
    thirdIcon.src = `${thirIcons}.svg`;
  }
});

fourthIcon.addEventListener('click', function () {
  if (fourthAnswer.classList.contains('hidden')) {
    fourthAnswer.classList.remove('hidden');

    const fourIcon = './images/icon-minus';
    fourthIcon.src = `${fourIcon}.svg`;
  } else if (!fourthAnswer.classList.contains('hidden')) {
    fourthAnswer.classList.add('hidden');

    const fourIcons = './images/icon-plus';
    fourthIcon.src = `${fourIcons}.svg`;
  }
});
