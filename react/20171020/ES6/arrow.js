//1.箭头函数
let add = (a,b) => a+b
console.log('add',add(2,3))

let numbers = [1,2,3];
let doubleNumbers = numbers.map((number) => number * 2)
console.log('doubleNumbers', doubleNumbers)

//2.箭头函数this的作用
// let obj = {
// 	name: 'aaa',
// 	say: function(){
// 		setTimeout(function(){
// 			console.log('this.name',this.name);
// 		}, 500)
// 	}
// }
let objaa = {
	name: 'aaa',
	say: function(){
		//hack 加this
		var _this = this;
		setTimeout(function(){
			console.log('this.name',_this.name);
		}, 500)
	}
}
let obj = {
	name: 'aaa',
	say: function(){
		setTimeout(() => {
			console.log('this.name',this.name);
		}, 500)
	}
}
obj.say();

//3.函数默认参数
function desc(name="wanghaiyan", age=100){
	return name + ' is ' +age+ ' years old'
}
console.log('desc',desc());

//4.Rest参数
//当一个函数的最后一个参数有"..."这样的前缀，他就会变成一个参数的数组
function test(first, ...args){
	console.log('args',args)
}
test(1,2,3)
/**
 * rest参数和arguments的区别
 * 1. rest参数只是没有指定变量名称的参数数组，而arguments是所有参数的集合
 * 2. arguments对象不是一个真正的数组，而rest参数是一个真正的数组，可以使用数组的各种方法
 */
