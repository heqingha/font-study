'use strict';

//1.箭头函数
var add = function add(a, b) {
	return a + b;
};
console.log('add', add(2, 3));

var numbers = [1, 2, 3];
var doubleNumbers = numbers.map(function (number) {
	return number * 2;
});
console.log('doubleNumbers', doubleNumbers);

//2.箭头函数this的作用
// let obj = {
// 	name: 'aaa',
// 	say: function(){
// 		setTimeout(function(){
// 			console.log('this.name',this.name);
// 		}, 500)
// 	}
// }
// let obj = {
// 	name: 'aaa',
// 	say: function(){
// 		//hack 加this
// 		var _this = this;
// 		setTimeout(function(){
// 			console.log('this.name',_this.name);
// 		}, 500)
// 	}
// }
var obj = {
	name: 'aaa',
	say: function say() {
		var _this = this;

		setTimeout(function () {
			console.log('this.name', _this.name);
		}, 500);
	}
};
obj.say();

//3.函数默认参数
function desc() {
	var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "wanghaiyan";
	var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

	return name + ' is ' + age + ' years old';
}
console.log('desc', desc());

//4.Rest参数
//当一个函数的最后一个参数有"..."这样的前缀，他就会变成一个参数的数组
function test(first) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	console.log('args', args);
}
test(1, 2, 3);
/**
 * rest参数和arguments的区别
 * 1. rest参数只是没有指定变量名称的参数数组，而arguments是所有参数的集合
 * 2. arguments对象不是一个真正的数组，而rest参数是一个真正的数组，可以使用数组的各种方法
 */
