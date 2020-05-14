'use strict';

import './edit.js';
import './menu.js';
import apiData from './services/apidata.js';
import ls from './services/local-storage.js';

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
  renderPaint();
};
const renderPaint = () => {
  const newBoard = document.querySelector('.js-newboard');
  listActs.forEach((list) => {
    //refactorizar renderPaint
    const divListElem = addElement(newBoard, {
      label: 'div',
      class: ['app-list'],
    });

    const listContainer = addElement(divListElem, {
      label: 'div',
      class: ['p-1', 'rounded-sm', 'bg-primary', 'shadow'],
    });

    const listForm = addElement(listContainer, {
      laberl: 'form',
      class: ['app-list-form', 'align-middle', 'p-1', 'position-relative'],
    });

    const inputForm = addElement(listForm, {
      label: 'input',
      class: ['app-list-input', 'form-control', 'form-control-sm'],
      attributes: {
        placeholder: 'Tareas importantes',
        type: 'text',
        value: list.title,
        title: 'Editar el título de la lista',
      },
    });
    //code before refactor
    // const divListElem = document.createElement('div');
    // divListElem.classList.add('app-list');
    // newBoard.appendChild(divListElem);

    // const listContainer = document.createElement('div');
    // listContainer.classList.add('p-1', 'rounded-sm', 'bg-primary', 'shadow');
    // divListElem.appendChild(listContainer);

    // const form = document.createElement('form');
    // form.classList.add('app-list-form', 'align-middle', 'p-1', 'position-relative');
    // listContainer.appendChild(form);

    // const inputForm = document.createElement('input');
    // inputForm.classList.add('app-list-input', 'form-control', 'form-control-sm');
    // Object.assign(inputForm, {
    //   placeholder: 'Tareas importantes',
    //   type: 'text',
    //   value: list.title,
    //   title: 'Editar el título de la lista',
    // });
    // listForm.appendChild(inputForm);
  });
};

const addElement = (parent, data) => {
  const element = document.createElement(data.label);
  element.classList.add(...data.class);
  parent.appendChild(element);
  Object.assign(element, data.attributes);
  return element;
};
getApiData();

console.log(listActs);
listActs.forEach((list) => {
  console.log(list);
});

//# sourceMappingURL=main.js.map
