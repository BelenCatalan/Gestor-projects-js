const addElement = (parent, data) => {
  const element = document.createElement(data.label);
  element.classList.add(...data.class);
  parent.appendChild(element);
  Object.assign(element, data.attributes);
  if (data.text !== undefined) {
    const textEle = document.createTextNode(data.text);
    element.appendChild(textEle);
  }
  return element;
};

export default {
  addElement,
};
