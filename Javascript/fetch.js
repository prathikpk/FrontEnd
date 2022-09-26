//Javascript inbuilt API-Fetch Api
//Internally Fetch API implements Promise
//fetch returns a Promise,promise is resolvedd and rejected on failure

fetch("books.json").then((response)=>{
    // console.log("resolved",response);
    // console.log(response.json());
    return response.json();
}).then((data)=>{
    console.log(data);
    return fetch("journal.json");
}).then((response)=>{
    return response.json();
    }).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("error",err);
});