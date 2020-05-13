const getDataApi = () => {
  return fetch('./api/board.json').then((response) => response.json());
};

export default {
  getDataApi: getDataApi,
};

//# sourceMappingURL=apidata.js.map
