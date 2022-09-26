// array
// const scores=[0,10,20,30,40,50,60]

// // filter
// const filteredscore=scores.filter(scores=>{return scores>=30});
// console.log(filteredscore);

// const users=[
//     {name:"Jayesh",subscribed:true},
//     {name:"Manish",subscribed:false},
//     {name:"Vijay",subscribed:false},
//     {name:"Krishna",subscribed:true},
// ];

// const subscribeduser=users.filter(user=>{return user.subscribed==true});

// console.log(subscribeduser);
// //------------------------------------------------------------------------------------
// // Map 
// const prices=[100,200,300,150,250];
// const discountPrice=prices.map(price=>{return price-price*0.3});
// console.log(discountPrice);

// const products=[
//     {name:"Parle-g",price:10},
//     {name:"Frooti",price:100},
//     {name:"Maggi",price:20},
//     {name:"Pasta",price:40}
// ];

// const discountPrice1=products.map(product=>{
//     if(product.price>20){
//     return {name:product.name,price:product.price-product.price*0.2};
// }
// return product;
// });
// console.log(discountPrice1);
// console.log(products);

//--------------------------------------------------------------------------------
//reduce
// const ages=[10,20,30,40,50];
// const result=ages.reduce((sum,age)=>sum+age);
// console.log(result);

// const productCat=[
//     {category:"groceries",name:"Parle-g",price:10},
//     {category:"groceries",name:"Frooti",price:12},
//     {category:"electronics",name:"boat headphone",price:20},
//     {category:"groceries",name:"Pasta",price:40}
// ];
// const totalcost=productCat.reduce((sum,prod)=>{
//   return sum+prod.price;
// },0);
// console.log(totalcost);
// -------------------------------------------------------------------------------
//find method
// const scores=[10,20,45,55,20,18,30,60];
// const scoresGreaterThan50=scores.find((score)=>{
//       return score>50;
// });
// console.log(scoresGreaterThan50);
// -----------------------------------------------------------------------------------
//Sort
// let students=["Ashish","ritest","Shubham","shivam","Reena","Prathik"];
// students=students.map(s=>s.toUpperCase()).sort();
// // students.sort();
// console.log(students);

// let scores=[10,20,5,8,45,55,20,18,30,60];
// scores.sort((a,b)=>{
//   // if(a<b){
//   //   return -1;
//   // }
//   // else if(a>b){
//   //   return 1;
//   // }
//   // else{
//   //   return 0;
//   // }
//   return a-b;
// });
// console.log(scores);
// const players=[
//   {name:"finch",score:50},
//   {name:"Surya",score:60},
//   {name:"Virat",score:50},
//   {name:"Dhoni",score:65}
// ]
// players.map(s=>s.name.toUpperCase());
// players.sort((a,b)=>{
//   return a.name.localeCompare(b.name);
// });
//  console.log(players);
// players.sort((a,b)=>{
//   return a.score-b.score});
// console.log(players);
// const products=[
//   {name:"tshirt",price:500},
//   {name:"chinos",price:1200},
//   {name:"jeans",price:1100},
//   {name:"shirt",price:800},
//   {name:"Jacket",price:2500}
// ];
// let discountedProducts=products.filter((product)=>
//       product.price>1000);
//   discountedProducts=discountedProducts.map(prod=>{
//     return {name:prod.name,price:prod.price-prod.price*0.3}
//   })
//   console.log(discountedProducts);

