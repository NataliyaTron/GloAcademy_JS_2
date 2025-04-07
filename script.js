"use strict";

const guessNumber = () => {
  const botNumber = Math.floor(Math.random() * 100) + 1;

  const checkNumber = () => {
    const userNumber = prompt("Угадай число от 1 до 100");

    if (userNumber === null) {
      alert("Игра окончена");
      return;
    } else if (isNaN(userNumber)) {
      alert("Введи число!");
      userName = prompt("Попробуй еще раз");
      return checkNumber();
    } else if (userNumber > botNumber) {
      alert("Загаданное число меньше");
      return checkNumber();
    } else if (userNumber < botNumber) {
      alert("Загаданное число больше");
      return checkNumber();
    } else if (userNumber == botNumber) {
      alert("Поздравляю, Вы угадали!!!");
    }
  };
  checkNumber();
};

guessNumber();
