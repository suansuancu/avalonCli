/**
 * Created by dell on 2017/2/13.
 */

//avalon配置路由
//基础管理
avalon.router.add('/ucenter/api_user', function () {
  vm.currentPath = this.path
});
avalon.router.add('/ucenter/actionlog', function () {
  vm.currentPath = this.path
});
avalon.router.add('/ucenter/index', function () {
  vm.currentPath = this.path
});

//基础管理
avalon.router.add('/content/fileflush', function () {
  vm.currentPath = this.path
});
avalon.router.add('/content/dirflush', function () {
  vm.currentPath = this.path
});
avalon.router.add('/preload/preloadlist', function () {
  vm.currentPath = this.path
});
avalon.router.add('/log/loglist', function () {
  vm.currentPath = this.path
});
avalon.router.add('/inject/injectlist', function () {
  vm.currentPath = this.path
});

//域名管理
avalon.router.add('/dispose/domain', function () {
  vm.currentPath = this.path
});
avalon.router.add('/dispose/source_temp', function () {
  vm.currentPath = this.path
});

//报表管理
avalon.router.add('/report/bandwidth_search', function () {
  vm.currentPath = this.path
});
avalon.router.add('/report/httpCodeSearchPage', function () {
  vm.currentPath = this.path
});
avalon.router.add('/report/bandwidth_analysis', function () {
  vm.currentPath = this.path
});
avalon.router.add('/report/http_status_analysis', function () {
  vm.currentPath = this.path
});
avalon.router.add('/report/request_count_analysis', function () {
  vm.currentPath = this.path
});
avalon.router.add('/report/traffic_analysis', function () {
  vm.currentPath = this.path
});
avalon.router.add('/report/hit_rate_analysis', function () {
  vm.currentPath = this.path
});

