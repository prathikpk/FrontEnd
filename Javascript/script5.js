// setTimeout(()=>{
//     console.log("callback fn called")
// });
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
//-----------------------------------------------------------

//xmlhttprequest
//used to request data from external server
//request are made to ApI end point

/**                                                          
 * Ready State                                               
 * 0-unsent                         
 * 1-Open                         
 * 2-Headers received                         
 * 3-Loading                         
 * 4-Complete/Done
*/                         
/**
 * Response Status
 * Note for correct url status code-200
 * 
 * 100-199:informational response
 * 200-299:success response
 * 300-399:Redirection messages
 * 400-499:client error message
 * 500-599:server error message
 */
// const getTodos=()=>{
// const request=new XMLHttpRequest();//Request object

// request.addEventListener("readystatechange",()=>{
//     if(request.readyState==4 && request.status==200){
//     // console.log(request,request.readyState);
//     console.log(request.responseText);
//     }
//     else if(request.readyState==4){
//         console.log("could not fetch data");
//     }
// });
//     request.open("GET","https://jsonplaceholder.typicode.com/todos")
//     request.send();
// };
// getTodos();
//-------------------------------------------------------------------------------

//Coding using callback
const getTodos=(callback)=>{
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
    request.open("GET","books.json");
    request.send();
};
getTodos((err,data)=>{
    console.log("callback called..");
    if(err){
        console.log(""+err);
    }
    else{
        console.log(data);
    }
});