//1. 展开操作之函数调用
//想让函数把一个数组依次作为参数进行调用
function test(x,y,z){
	console.log('x',x);
	console.log('y',y);
	console.log('z',z);
}
var args = [1,2,3];
test.apply(null, args)

test(...args);

//2. 展开操作之数组合并
let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = arr1.concat(arr2);
// console.log('arr3合并', arr3);

let esarr1 = [1,2];
let esarr2 = [3,4];
let esarr3 = [...esarr1, ...esarr2];
// console.log('esarr3合并', esarr3);

//3. 展开操作之对象添加属性,哈哈哈  目前不支持哦
let person = {
	name: 'kaka',
	age: 100
};
let newPerson = {...person,sex:'male'};
// console.log('newPerson',newPerson);

//1. 解构赋值之对象
let { foo, bar } = { bar: "bbb", foo: "aaa" }
console.log('foo', foo);
console.log('bar', bar);

//2. 解构赋值之数组
let [a,b,c] = ['1','2','3'];

// console.log(`a is ${a},b is ${b},c is ${c}`)


