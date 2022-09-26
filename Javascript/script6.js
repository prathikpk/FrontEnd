//CallBcak hell
//waiting for one api call before calling the second api

const getTodos=(resource,callback)=>{
    const request=new XMLHttpRequest();//Request object
    
    request.addEventListener("readystatechange",()=>{
        if(request.readyState==4 && request.status==200){
        // console.log(request.responseText);
        const data=JSON.parse(request.responseText)
        callback(undefined,data);
        }
        else if(request.readyState==4){
            callback("could not fetch data",undefined);
        }
    });
    // request.open("GET","https://jsonplaceholder.typicode.com/todos")
    request.open("GET",resource);
    request.send();
};

getTodos("books.json",(err,data)=>{
    console.log(data);
    getTodos("journal.json",(err,data)=>{
        console.log(data);
        getTodos("books.json",(err,data)=>{
            console.log(data);
            getTodos("journal.json",(err,data)=>{
                console.log(data);
            });
        });
    });
});