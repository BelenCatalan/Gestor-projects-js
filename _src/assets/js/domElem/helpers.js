const addElement = (parent, data) => {
  const element = document.createElement(data.label);
  element.classList.add(...data.class);
  parent.appendChild(element);
  Object.assign(element, data.attributes);
  return element;
};

export default {
  addElement,
};
