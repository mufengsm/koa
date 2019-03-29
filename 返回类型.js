const Koa = require('koa')
const app = new Koa()  
const main = (ctx,next) =>{
if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'Hello World' };
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = '<p>Hello World</p>';
  } else if (ctx.request.accepts('xml')) {
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello World</data>';
  } else{
    ctx.response.type = 'text';
    ctx.response.body = 'Hello World';
  };
};  
app.use(main) 
//app.use()用来加载中间件。
app.listen(3000)