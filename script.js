let fruits = ['apple', 'banana', 'cherry'];
//common array method
fruits.push('pineapple'); // add  at the  end
fruits.pop(); // remove last 
fruits.unshift('blueberry'); //  add at  first
fruits.shift(); //remove first
console.log(fruits);
//searching  
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.includes('apple')); //boolean
//Transforming
const arr = [1, 3, 5, 7,];
console.log(arr.map(n => n*2));
console.log(arr.filter(n => n>2));
console.log(arr.reduce((a,b) => a+b,0));


let orders = [
    {id: 1, status: "pending"},
    {id: 2, status: "shipped"},
    {id: 3, status: "delivered"}
    ];

orders.forEach(order => {
    console.log(`Order #${order.id} is ${order.status}`);
});

let prices = [100, 200, 300];
let pricesWithVAT = prices.map(p => p * 1.12);
console.log(pricesWithVAT);

let users = [
    {name: "Alice", active:true},
    {name: "Bob", active:false}
    ]

let activeUsers = users.filter(user => user.active);
console.log(activeUsers);

