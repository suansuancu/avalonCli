import 'avalon2';
import 'mmRouter';
import './route.config'


let login = require("../../html/login.html");
let home = require("../../html/home.html");
let header = require("../../html/header.html");
let nav = require("../../html/nav.html");
let subnav = require("../../html/subnav.html");
let apiUser = require("../../html/apiUser.html");
let actionlog = require("../../html/actionlog.html");
let changepwd = require("../../html/changepwd.html");
let fileflush = require("../../html/fileflush.html");

let vm = avalon.define({
  $id: "test",
  main: '',
  currentPath: '',
  mainContent:''
});

let map = {
  'login': login,
  'home': home
}

//整体改变页面的内容，从login页面整个变为home页面
avalon.router.add("/:tab", function (param) {

  vm.main = map[param];

})

//改变mainContent的内容为文件刷新的部分
avalon.router.add("/content/fileflush", function (param) {

  vm.mainContent = fileflush;

})
avalon.router.add("/ucenter/api_user", function (param) {

  vm.mainContent = apiUser;

})
avalon.router.add("/ucenter/actionlog", function (param) {

  vm.mainContent = actionlog;

})
avalon.router.add("/ucenter/index", function (param) {

  vm.mainContent = changepwd;

})

//注册组件 ***注意组件的名称不能大写如:ms-subNav，会报错
avalon.component('ms-header', {

  template: header

});
avalon.component('ms-nav', {

  template: nav

});
avalon.component('ms-subnav', {
  template: subnav

});



avalon.history.start({
  root: "/",
  html5: true
});

let hash = location.hash.replace(/#!?/, '')
avalon.router.navigate(hash || '/login', 1)//默认打开
avalon.scan(document.body);



