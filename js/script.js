/* jshint esversion: 6 */
var questionFirst = prompt("Ваш бюджет?",5000);
var questionSecond = prompt("Название вашего магазина?","Lololo");

var shopGoods = [];
shopGoods [0] = prompt("Какой тип товаров будем продавать?","Клубника");
shopGoods [1] = prompt("Какой тип товаров будем продавать?","Клубника");
shopGoods [2] = prompt("Какой тип товаров будем продавать?","Клубника");

var employers = {
	name: 'Sasha',
	age: 18
};
var mainList = {
	budget: questionFirst,
	shopName: questionSecond,
	shopGoods,
	employers,
	open: true
};

alert (Math.floor(questionFirst/30));
console.log(mainList);