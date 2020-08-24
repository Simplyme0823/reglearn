/** @format */

// + {1,正无穷}
const reg = /\w+/g;
const str = "abcdefg";
// 不回头 贪婪模式
console.log(str.match(reg)); //[ 'abcdefg' ]

// * {0,正无穷}
const reg_ = /\w*/g;
console.log(str.match(reg_)); //[ 'abcdefg', '' ]
const regd = /\d*/g;
console.log(str.match(regd)); //['', '', '', '','', '', '', '']

// 字符串从左到右，依次先匹配多，再匹配少，一旦匹配上就不回头
// 贪婪匹配 能匹配多个 绝不匹配少个

// ？ {0,1}
const reg__ = /\w?/g;
console.log(str.match(reg__)); //['a', 'b', 'c','d', 'e', 'f','g', '']

const reg___ = /\w{1,2}/g;
console.log(str.match(reg___)); //[ 'ab', 'cd', 'ef', 'g' ]

const reg___ = /\w{0,}/g; // *
const reg___ = /\w{1,}/g; // +
const reg___ = /\w{0,1}/g; // ?

// ^n 匹配任何以n开头的字符串
const startReg = /^ab/gm;
const str = "abcdabcd\nabcd";

// 以abcd开头 且 以abcd结尾
// 以abcd开头 或 以abcd结尾

// ?=n 匹配任何其后紧接着指定字符串n的字符串
// ?!n  !为非的意思
const test = "abcdaccd";
const resNext = /a(?=b)/g;

// 子表达式 反向应用第几个子表达式
const sonStr = "bbaaaaccaaaaiddddbaaaa";
// 引用了三次(a) 所以会匹配出aaaa
const sonReg = /(a)\1\1\1/g;
const sonReg_ = /(a)\1(b)\2/g;

// 正则表达式的内置属性
reg.source();
const res = reg.exec(); //返回一个类数组 但是继承自Array  不全局匹配就会一直留在原地
console.log(reg.lastIndex, res); // 可以通过修改lastIndex来修改匹配位置

// test
const lastIndexReg = /123/g;
const lastIndexStr = "123123123123";
lastIndexReg.lastIndex = 4;
lastIndexReg.exec(lastIndexStr); // index为6

// 对于反向引用，匹配结果会把子表达式匹配结果也输出
const reverseReg = /(\w)\1(\w)\2/g;
const reverseStr = "aabbccddddddccceevvv";
reverseReg.exec(reverseStr);
