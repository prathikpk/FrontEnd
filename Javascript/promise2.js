const getTodos=(resourse)=>{
    return new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest();//Request object
    
    request.addEventListener("readystatechange",()=>{
        if(request.readyState==4 && request.status==200){
        // console.log(request.responseText);
        const data=JSON.parse(request.responseText)
        resolve(data);
        }
        else if(request.readyState==4){
            reject("data could not be fetched");
        }
    });
    request.open("GET",resourse);
    request.send();
    });
};
// getTodos("journal.json").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

//Channing promises
getTodos("books.json").then((data)=>{
    console.log(data);
    return getTodos("journal.json");
    }).then((data)=>{
        console.log(data);
        return getTodos("books.json");
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
     console.log(err);
});