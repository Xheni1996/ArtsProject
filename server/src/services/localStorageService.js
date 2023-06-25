if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./storage');
  }
  
  const localStorageService = {
    all: (model) => {
      return JSON.parse(localStorage.getItem(model));
    }
  }
  
  module.exports = localStorageService;