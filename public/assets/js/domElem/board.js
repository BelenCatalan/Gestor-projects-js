import cards from './cards.js';
import helper from './helpers.js';

const renderPaint = (data) => {
  const newBoard = document.querySelector('.js-newboard');
  data.forEach((list) => {
    //refactorizar renderPaint
    const divListElem = helper.addElement(newBoard, {
      label: 'div',
      class: ['app-list'],
    });

    const listContainer = helper.addElement(divListElem, {
      label: 'div',
      class: ['p-1', 'rounded-sm', 'bg-primary', 'shadow'],
    });

    const listForm = helper.addElement(listContainer, {
      laberl: 'form',
      class: ['app-list-form', 'align-middle', 'p-1', 'position-relative'],
    });

    const inputForm = helper.addElement(listForm, {
      label: 'input',
      class: ['app-list-input', 'form-control', 'form-control-sm'],
      attributes: {
        placeholder: 'Tareas importantes',
        type: 'text',
        value: list.title,
        title: 'Editar el título de la lista',
      },
    });

    const optionsContainer = helper.addElement(listForm, {
      label: 'div',
      class: ['app-list-options'],
    });

    const iconOption = helper.addElement(optionsContainer, {
      label: 'span',
      class: ['pl-2', 'pr-2', 'text-white-50', 'fas', 'fa-ellipsis-v'],
    });

    const btnOptContainer = helper.addElement(optionsContainer, {
      label: 'div',
      class: ['app-list-btns', 'btn-group', 'btn-group-sm'],
    });
    const btnDeleteList = helper.addElement(btnOptContainer, {
      label: 'button',
      class: ['js-delete', 'btn', 'btn-light', 'text-muted', 'border', 'shadow-sm'],
      attributes: { title: 'Borrar esta tarjeta', type: 'button', id: list.id },
    });
    const icondelete = helper.addElement(btnDeleteList, {
      label: 'span',
      class: ['fas', 'fa-trash-alt'],
    });
    const btnLeft = helper.addElement(btnOptContainer, {
      label: 'button',
      class: ['js-move-left', 'btn', 'btn-light', 'text-muted', 'border', 'shadow-sm', 'app-list-move-left'],
      attributes: { title: 'Mover lista izquierda', type: 'button', id: list.id },
    });
    const iconLeft = helper.addElement(btnLeft, {
      label: 'span',
      class: ['fas', 'fa-arrow-left'],
    });

    const btnRight = helper.addElement(btnOptContainer, {
      label: 'button',
      class: ['js-move-right', 'btn', 'btn-light', 'text-muted', 'border', 'shadow-sm', 'app-list-move-left'],
      attributes: { title: 'Mover lista derecha', type: 'button', id: list.id },
    });
    helper.addElement(btnRight, {
      label: 'span',
      class: ['fas', 'fa-arrow-right'],
    });

    cards.paintCards(listContainer, list.card);
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
    addNewCard(listContainer, list);
  });
  addNewList(newBoard);
};
const addNewList = (parent) => {
  const btnNewListContainer = helper.addElement(parent, {
    label: 'div',
    class: '',
  });
  const btnNewList = helper.addElement(btnNewListContainer, {
    label: 'button',
    class: ['js-new-listbtn', 'btn-light', 'btn-outline-primary', 'btn-sm', 'mr-5', 'shadow-sm'],
    attributes: { type: 'button', title: 'añadir lista' },
  });
  helper.addElement(btnNewList, {
    label: 'span',
    class: ['fas', 'fa-plus'],
  });
};

const addNewCard = (parent, list) => {
  const btnAddCard = helper.addElement(parent, {
    label: 'button',
    class: ['js-new-card', 'ml-1', 'btn', 'btn-primary', 'btn-sm', 'text-white-50'],
    attributes: { title: 'Añadir Tarjeta', type: 'button', id: list.id },
  });
  helper.addElement(btnAddCard, {
    label: 'span',
    class: ['fas', 'fa-plus'],
    text: ' Añadir otra tarjeta',
  });
};

export default {
  renderPaint,
};

//# sourceMappingURL=board.js.map
