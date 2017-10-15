
let ejs = require('../index.js')
// let ejs = require('../lib/ejs@2.js')

// let str = ejs.render(`
//   <h1>Hello World</h1>
// `, {
//   user: {
//     name: 'Niko'
//   },
//   // compileDebug: false,
//   scope: {
//     user: {
//       name: 'Niko'
//     }
//   }
// })
//
// console.log(str);

let template = '<h1>Hello, <%= name %></h1>'
let data = {
  name: 'Niko Bellic'
}

let renderStr = ejs.render(template, data)

console.log(renderStr)

console.log(ejs.render('<%= "<hello />"%>'));

console.log(ejs.render(`
  <h1><%- name %></h1>
  <%# This name will be Niko Bellic %>
`, {
  name: 'Niko Bellic'
}));

console.log(ejs.render(`
  <h1>
    <%- 'Title' %>
  </h1>
`));

console.log(ejs.render(`
  <h1><% -%>
    <%- 'Title' -%>
  </h1>
`));
