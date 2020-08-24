/** @format */

// 转义 -> 转换意义 改变意义
// 转移符号 \  转移字符：\字符


// 在使用两个双引号的时候会将name识别成变量，然后没有用加号拼接
// JS会先识别字符串
// const sql = "select t."name" from test";
//                        ^^^^
// SyntaxError: Unexpected identifier

const sql = "select t."name" from test";


// \n 换行 \r回车 \t制表符 这是个编辑系统用的 例如Windows按回车会添加\r\n
// 但是\n在页面上会被识别成一个空格 html是文本 \n变成了字符


// 添加\ 转译成空格
const a = 'a\
          b';