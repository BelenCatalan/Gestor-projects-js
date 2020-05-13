'use strict';

import './edit.js';
import './menu.js';
import apiData from './services/apidata.js';

let listActs = [];

const getApiData = () => {
  apiData.getDataApi().then((data) => {
    data.board.list.map((list) => {
      let userData = {
        title: list.title,
        card: list.cards,
      };
      listActs.push(userData);
      // paintListActs();
    });
  });
};

getApiData();
console.log(listActs);

//# sourceMappingURL=main.js.map
