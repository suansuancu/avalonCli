import 'avalon2';
import 'mmRouter';
import './route.config.js';
var login = require("../../html/login.html");
var home = require("../../html/home.html");
var header = require("../../html/header.html");
var nav = require("../../html/nav.html");

let vm = avalon.define({
  $id: "test",
  main: '',
  currentPath: ''
});

var map = {
  'login': login,
  'home': home
}


avalon.router.add("/:tab", function (param) {
  console.log(param)
  vm.main = map[param];
})

//注册组件
avalon.component('ms-header', {
  template: header

});

avalon.component('ms-nav', {
  template: nav

});

avalon.history.start({
  root: "/",
  html5: true
});

var hash = location.hash.replace(/#!?/, '')
avalon.router.navigate(hash || '/login', 1)//默认打开
avalon.scan(document.body);



