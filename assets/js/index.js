J.ready(function(){
  J.class("func-img").tip([
    "获取一个或多个汉字完整拼音",
    "获取一个或多个汉字拼音首字母",
    "获取一个或多个汉字的总笔画数"
  ]);
  J.id('_year').txt((new Date()).getFullYear())
});