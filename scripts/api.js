'use strict';

const api = function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/evanjohn';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback).fail(function (request, status, error) {
      const err = JSON.parse(request.responseText).message;
      console.log(err);
  });
  };

  const createItem = function(name, callback) {
    let newItem = {
      name: name
    };
    newItem = JSON.stringify(newItem);
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: function (request, status, error) {
        const err = JSON.parse(request.responseText).message;
        console.log(err);
    }
    });
  };

  const updateItem = function (id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
      error: function (request, status, error) {
        const err = JSON.parse(request.responseText).message;
        console.log(err);
    }
    });
  };

  const deleteItem = function (id, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json', 
      success: callback,
      error: function (request, status, error) {
        const err = JSON.parse(request.responseText).message;
        console.log(err);
    }
    });
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}();