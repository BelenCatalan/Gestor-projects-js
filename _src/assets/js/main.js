'use strict';

import './edit.js';
import './menu.js';
import apiData from './services/apidata.js';
import ls from './services/local-storage.js';
import board from './domElem/board.js';

let listActs = [];

const getApiData = () => {
  if (ls.isValid()) {
    listActs = ls.get();
  } else {
    apiData.getDataApi().then((data) => {
      // listActs = data;
      data.board.list.map((list) => {
        let userData = {
          title: list.title,
          card: list.cards,
          id: list.id,
        };

        listActs.push(userData);
        console.log(userData);
        console.log(listActs);
        ls.set(listActs);
      });
    });
  }

  render();
};

const moveListLeft = (ev) => {
  console.log('mov left', ev.currentTarget.id);
};
const moveListRight = (ev) => {
  console.log('mov right', ev.currentTarget.id);
};
const moveListDelete = (ev) => {
  console.log('delete', ev.currentTarget.id);
};
const addNewList = (ev) => {
  console.log('new list', ev.currentTarget);
};
const addNewCard = (ev) => {
  console.log('new card', ev.currentTarget);
};
const moveCardUp = (ev) => {
  console.log('card up', ev.currentTarget.id);
};
const moveCardDown = (ev) => {
  console.log('card down', ev.currentTarget.id);
};
const inputListTitle = (ev) => {
  console.log('input text', ev.currentTarget.id);
};

const render = () => {
  board.renderPaint(listActs);
  listenEvents('.js-move-left', 'click', moveListLeft);
  listenEvents('.js-move-right', 'click', moveListRight);
  listenEvents('.js-delete', 'click', moveListDelete);
  listenEvents('.js-upCard', 'click', moveCardUp);
  listenEvents('.js-downCard', 'click', moveCardDown);
  listenEvents('.js-listTitle', 'click', inputListTitle);
  // listenEvents('.js-foo', 'click', inputListTitle);
 // listenEvents('.js-foo', 'click', inputListTitle);
  const addNewListBtn = document.querySelector('.js-new-listbtn');
  addNewListBtn.addEventListener('click', addNewList);

  listenEvents('.js-new-card', 'click', addNewCard);

  // const addNewCardBtn = document.querySelectorAll('.js-new-card');
  // for (const btn of addNewCardBtn) {
  //   btn.addEventListener('click', addNewCard);
  // }
};

const listenEvents = (selector, event, handleEvent) => {
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    element.addEventListener(event, handleEvent);
  }
};
getApiData();

console.log(listActs);
listActs.forEach((list) => {
  console.log(list);
});
