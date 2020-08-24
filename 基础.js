/** @format */

//RegExp regular expression
//操作字符串的逻辑公式

const reg = new RegExp("^Test", "gim"); //i ignore g globale m  multi-line
const str = "This is a Test. \nTest is important";

//验证规则：字符串片段，大小写默认敏感，连续的
str.match(reg);

//也可以使用字面量，但是优缺点 不能直接使用变量
const v = "Test";
const zimian = /v/;
zimian.test(str); //false

// 正则对象
const newreg = /test/;
const newreg_ = new RegExp(newreg);
const newreg__ = RegExp(newreg);
console.log(newreg, newreg_);
newreg.a = 1;
console.log(newreg_.a); //undefined
console.log(newreg__.a); //1

//表达式[]
const a = "0987fsdaf-0e0r912dsaf-0dsfa";
const numbserReg = /[0123456789][0123456789][0123456789]/g;
// 没有匹配987是因为 正则是一旦匹配过去了 就不会回头
console.log(a.match(numbserReg)); //[ '098', '912' ]

// 取三位 每个中括号号的内容是任意取一个
const strReg = /[wx][xy][z]/g;
const strs = "wxyz";
console.log(strs.match(strReg)); // xyz

// 在[]中写^是非的意思

// 用|表示或
const orStr = "123fdsafdsa234";
const orStrReg = /(123|234)[a-z]/g;

// 元字符 正则使用的转义字符
// \w ===[0-9A-z_]
// \W === [^\w]
const wstr = "1234%abc-%&";
const wStrReg = /\Wab/;

// \d ===[0-9]
// \D ===[^\d]

// \s ===[\r\n\t\v\f]
// \S ===[^\s]

// \b 单词边界
// \B 非单词边界

// . 可以匹配除了回车和换行的所有字符
