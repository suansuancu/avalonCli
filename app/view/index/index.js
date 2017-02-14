import 'avalon2';
import 'mmRouter';
import './route.config.js';

let login = require("../../html/login.html");
let home = require("../../html/home.html");
let header = require("../../html/header.html");
let nav = require("../../html/nav.html");
let subnav = require("../../html/subnav.html");
let apiUser = require("../../html/apiUser.html");


let vm = avalon.define({
  $id: "test",
  main: '',
  currentPath: ''
});

let map = {
  'login': login,
  'home': home
}


avalon.router.add("/:tab", function (param) {

  vm.main = map[param];
})

//注册组件
avalon.component('ms-header', {
  template: header

});

avalon.component('ms-nav', {
  template: nav

});
avalon.component('ms-subnav', {
  template: subnav

});
avalon.component('ms-apiuser', {
  template: apiUser

});

avalon.history.start({
  root: "/",
  html5: true
});

let hash = location.hash.replace(/#!?/, '')
avalon.router.navigate(hash || '/login', 1)//默认打开
avalon.scan(document.body);



