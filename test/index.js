
var ejs = require('../index.js')
  , fs = require('fs')

let str = ejs.render(`
  <% if (user) { %>
      <h2><%= user.name -%></h2>
  <% } %>
`, {
  user: {
    name: 'Niko'
  },
  compileDebug: false,
  scope: {
    user: {
      name: 'Niko'
    }
  }
})

console.log(str);
