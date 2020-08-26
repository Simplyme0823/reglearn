/** @format */

// 正向预查

var str = "1231231231";
var reg = /1(?=2)/g;
console.log(str.match(reg)); //[ '1', '1', '1' ]

// 贪婪模式和非贪婪模式
var str = "abcd{{efg}}abcd{{xyz}}";
var reg = /{{.*}}/g; //贪婪模式
console.log(str.match(reg)); //{{efg}}abcd{{xyz}} 贪婪模式

var reg = /{{.*?}}/g; //非贪婪模式
console.log(str.match(reg)); //[ '{{efg}}', '{{xyz}}' ] 非贪婪模式

var str = "aaaaaa";
var reg = /\w?/g;
console.log(str.match(reg)); //['a', 'a', 'a','a', 'a', 'a','']

var reg = /\w??/g;
console.log(str.match(reg)); //['', '', '','', '', '',''] 能少匹配就少匹配 少匹配就是0次

//replace方法
var str = "JSplusplus";
var res = str.replace(/plus/g, "+");
console.log(res);

//将xxyy -> yyxx
var str = "aabbccdd";
var reg = /(\w)\1(\w)\2/g;
var res = str.replace(reg, "$2$2$1$1"); //$拿引用字符串  str.match(reg)的结果为['aabb','a','b']
var res = str.replace(reg, function ($, $1, $2) {
  console.log($, $1, $2);
}); //$拿引用字符串
console.log(res);

// js-plus-plus -> jsPlusPlus
var str = "js-plus-plus";
var reg = /-(\w)/g; // 注意括号
var res = str.replace(reg, function ($, $1) {
  return $1.toUpperCase(); // /-\w/g $1.toUpperCase is not a function  没有括号 根本就没有子表达式
});

// jsPlusPlus -> js_plus_plus
var str = "jsPlusPlus";
var reg = /(\W)/g;
var res = str.replace(reg, function ($, $1) {
  return "_" + $1.toLowerCase();
});

// xxyyzz -> XxYyZz
var str = "xxyyzz";
var reg = /(\w)\1(\w)\2(\w)\3/g;
var res = str.replace(reg, function ($, $1, $2, $3) {
  return $1.toUpperCase() + $1 + $2.toUpperCase() + $2 + $3.toUpperCase() + $3;
});

// aabbcc => a$b$c$ 不能使用function
var str = "aabbcc";
var reg = /(\w)\1(\w)\2(\w)\3/g;

var res = str.replace(reg, "$1$$$2$$$3$$"); //$1 $2 $3 有特殊含义

//匹配 \ 这里要注意的就是转移符号
var str = "aa\\bb\\cc";
var reg = /\\/g;

// abbbbbbbb ->ab
var str = "aaaaabbbbbccccc";
var reg = /(\w)\1*/g;
var res = str.replace(reg, "$1"); //[ 'aaaaa', 'bbbbb', 'ccccc' ]
console.log(res); //abc  因为子表达式有记忆功能 因此$1的值是会变化的

var str = "1000000000000000000";
var str1 = res.replace(/\d{3}\B/g, "$1,"); //\B 非单词边界

var str = "10000000000000000000";
var reg = /(?=(\B)(\d{3})+$)/g;
var str1 = str.replace(reg, ","); //$ 用去匹配结尾 所有从后往前查了
console.log(str1);

// 双大括号替换值{{}}

var str = "My name is {{name}}, I'm {{age}} year old";

var reg = /{{(.*?)}}/g; //非贪婪

var res = str.replace(reg, function (node, key) {
  console.log("node", node); //{{name}} {{age}}
  console.log("key", key); // name age
  return {
    name: "Jnoe",
    age: 20,
  }[key];
});
console.log(res); //My name is Jnoe, I'm 20 year old

var res = str.match(reg);

console.log(res);
