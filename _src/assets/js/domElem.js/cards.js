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
      });
      const tagName = document.createTextNode(tag);
      tagElem.appendChild(tagName);
    });
    const cardTitle = helper.addElement(divCardElem, {
      label: 'div',
      class: '',
    });
    const title = helper.addElement(cardTitle, {
      label: 'h3',
      class: ['h6'],
    });
    const titleContent = document.createTextNode(card.title);
    title.appendChild(titleContent);
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
    });
    const textinfoElem = document.createTextNode(' 3/5');
    textInfoS.appendChild(textinfoElem);
  });
};

export default {
  paintCards,
};
