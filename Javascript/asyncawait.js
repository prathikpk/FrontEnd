// const getTodos = async () => {
//     const response = await fetch("books.json");//await:until resolved it will wait
//     const data = await response.json();
//     console.log(data);
//     const response1 = await fetch("journal.json");
//     const data1 = await response1.json();
//     console.log(data1);
// };
// const test = getTodos();
// -----------------------------------------------------
const getTodos = async (resource) => {
    const response = await fetch(resource);//await:until resolved it will wait
    const data = await response.json();
    return data;
};
getTodos("books.json").then((data)=>{
    console.log(data);
    getTodos("journal.json").then((data)=>{
        console.log(data);
    })
}).catch((err)=>{
    console.log("could not fetch data");
});
