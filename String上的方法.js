/** @format */

const reg = /(\w)\1(\w)\2/;
const str = "aabbccdd";
const res = str.match(reg);

console.log(res.length);
str.toLocaleLowerCase; // 中东 土耳其等特殊语言 有特殊的 大小写方式，针对英文字母加locale与否都能实现功能

str.charCodeAt; // Unicode
String.fromCharCode(72, 69, 76, 73, 79); // Unicode编码 H E L L O

// str.indexOf(b, 3); // 从第几位开始从头匹配，匹配不到返回-1
// str.lastIndexOf(b, 3); // 从第几位开始从尾巴匹配

str.substr; // 开始[包含]，长度  整数
str.substring; // [开始，结束) 前闭后开  如果开始大于结束，那么会自动调换位置让开始小于结束

str.link; // 系列方法返回HTML元素

// toString返回字符串   valueOf 返回原本的值
// Date 返回时间的特有字符串  valueOf 13位毫秒时间戳
// Array  数组元素，分割的字符串 valueOf数组原本的值
// object [object Object]     valueOf对象原本的值
// function [native code] 为内置函数
// toString(params) params为进制 radix  valueOf没有参数

const test = Object.prototype.toString.call([]);

function myTypeof(val) {
  var type = typeof val;
  var toString = Object.prototype.toString;
  var resSet = {
    "[object Object]": "object",
    "[object Array]": "array",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Boolean]": "boolean",
    "[object Date]": "date",
    "[object RegExp]": "regexp",
  };
  if (val === null) {
    return null;
  } else if (type === "object") {
    var res = toString.call(val);
    return resSet[res];
  } else {
    return type;
  }
}
console.log(test);
