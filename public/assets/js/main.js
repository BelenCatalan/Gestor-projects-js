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
        };

        listActs.push(userData);
        console.log(userData);
        console.log(listActs);
        ls.set(listActs);
      });
    });
  }
  board.renderPaint(listActs);
};

getApiData();

console.log(listActs);
listActs.forEach((list) => {
  console.log(list);
});

//# sourceMappingURL=main.js.map
