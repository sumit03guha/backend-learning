'use strict';
exports.__esModule = true;
var axios_1 = require('axios');
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1['default'].get(url).then(function (response) {
  var todo = response.data;
  var id = todo.id;
  var title = todo.title;
  var completed = todo.completed;
  console.log(
    '\n    The Todo id is: '
      .concat(id, '\n    The Todo title is: ')
      .concat(title, '\n    The Todo status: ')
      .concat(completed)
  );
});
