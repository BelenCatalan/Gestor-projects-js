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

const render = () => {
  board.renderPaint(listActs);
  const listLeftBtn = document.querySelectorAll('.js-move-left');
  for (const btn of listLeftBtn) {
    btn.addEventListener('click', moveListLeft);
  }

  const listRightBtn = document.querySelectorAll('.js-move-right');
  for (const btn of listRightBtn) {
    btn.addEventListener('click', moveListRight);
  }

  const listDeleteBtn = document.querySelectorAll('.js-delete');
  for (const btn of listDeleteBtn) {
    btn.addEventListener('click', moveListDelete);
  }
  const addNewListBtn = document.querySelector('.js-new-listbtn');
  addNewListBtn.addEventListener('click', addNewList);

  const addNewCardBtn = document.querySelectorAll('.js-new-card');
  for (const btn of addNewCardBtn) {
    btn.addEventListener('click', addNewCard);
  }
};
getApiData();

console.log(listActs);
listActs.forEach((list) => {
  console.log(list);
});

//# sourceMappingURL=main.js.map
