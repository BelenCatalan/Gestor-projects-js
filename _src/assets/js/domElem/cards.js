import helper from './helpers.js';

const paintCards = (parent, cards) => {
  cards.forEach((card) => {
    const divCardElem = helper.addElement(parent, {
      label: 'article',
      class: ['js-card', 'app-card', 'm-1', 'mb-2', 'p-2', 'bg-white', 'rounded-sm', 'app-cursor-pointer', 'shadow-sm'],
    });
    const tagsContainer = helper.addElement(divCardElem, {
      label: 'div',
      class: '',
    });
    card.tags.forEach((tag) => {
      const tagElem = helper.addElement(tagsContainer, {
        label: 'span',
        class: ['badge', 'badge-secondary', 'bg-success', 'mr-1'],
        text: tag,
      });
    });
    const cardTitle = helper.addElement(divCardElem, {
      label: 'div',
      class: '',
    });
    const title = helper.addElement(cardTitle, {
      label: 'h3',
      class: ['h6'],
      text: card.title,
    });

    const infoCard = helper.addElement(divCardElem, {
      label: 'div',
      class: ['text-black-50'],
    });
    helper.addElement(infoCard, {
      label: 'small',
      class: ['pr-2', 'fas', 'fa-align-left'],
    });
    helper.addElement(infoCard, {
      label: 'small',
      class: ['far', 'fa-check-square'],
    });
    const textInfoS = helper.addElement(infoCard, {
      label: 'small',
      class: '',
      attributes: { title: 'Subtareas completadas: 3 de 5' },
      text: ' 3/5',
    });

    renderBtnsCards(divCardElem, card);
  });
};

const renderBtnsCards = (parent, data) => {
  const btnsContainer = helper.addElement(parent, {
    label: 'div',
    class: ['app-card-btns', 'btn-group-vertical', 'btn-group-sm'],
  });
  const upCardBtn = helper.addElement(btnsContainer, {
    label: 'button',
    class: ['js-upCard', 'btn', 'btn-light', 'text-muted', 'border', 'shadow-sm', 'app-card-up-button'],
    attributes: {
      type: 'button',
      title: 'Mover esta tarjeta hacia arriba',
      id: data.id,
    },
  });
  helper.addElement(upCardBtn, {
    tag: 'span',
    class: ['fas', 'fa-arrow-up'],
  });

  const downCardBtn = helper.addElement(btnsContainer, {
    label: 'button',
    class: ['js-downCard', 'btn', 'btn-light', 'text-muted', 'border', 'shadow-sm', 'app-card-up-button'],
    attributes: {
      type: 'button',
      title: 'Mover esta tarjeta hacia abajo',
      id: data.id,
    },
  });
  helper.addElement(downCardBtn, {
    tag: 'span',
    class: ['fas', 'fa-arrow-down'],
  });
};

export default {
  paintCards,
};
