/** @format */

const reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))([0-2][1-9]|10|20|30|31)\d{3}[1-9Xx]$/;

const shenfenzheng = "331002199408234953";

const res = reg.test(shenfenzheng);
console.log(res);

// 密码强度  至少六位 一个大小一个小写 一个数字 一个特殊
// 多个包含 需要用正向预查 断言

// 其实每次都是停在原地 因为.匹配的是除了 \n 之外的任何单字符
const mimaReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[~!@#$%^&*]).*$/;
const mima = "$aSd185";
console.log(mima.match(mimaReg));

const file = /(\.jpg|\.gif|\.png|\.jpeg)/;

const emailReg = /^([A-z0-9-_])+\@([A-z0-9-_\.])+\.([A-z]{2,4})/;

console.log("fdsaf@qq.com.cn".match(emailReg)); // true
console.log(emailReg.test("fdsaf@163.com.cn"));

const test1 = /([A-z0-9-_])/;
console.log("fdsaf".match(test1));

// 捕获分组 () 不捕获分组(?:)
const str = "abcabc";
const strReg = /(?:a)(b)(c)/;
console.log(str.match(strReg)); //'bc', 'b', 'c'

const dialogReg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
const dialog = "+86-028-43829384-133";
console.log(dialog.match(dialogReg));

// 收集号码

// 130 123456789
// 14 5 7
// 15 0 12456789

const phoneReg = /^(\(\+86\))?(13[0-9]|14[57]|15[0-9]|17[0678]|18[0-9]\d{8}$)/;

// 1994-08-23

var dateReg = /^(19|20)\d{2}([\.-/])?(0[1-9]|1[0-2])\2(0[1-9]|[12][0-9]|3[01])$/;

// # A-F 0-9
var colorReg = /^#([A-Fa-f0-9]){6}|\1{3}$/; // 这里匹配不到第一个子表达式取不到 不能用反向引用
var colorReg = /^#([A-Fa-f0-9]){6}|([A-Fa-f0-9]){3}$/; // 这是对的

// 车牌号
