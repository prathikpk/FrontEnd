//promise-resolved,reject

const getSomething=()=>{
    return new Promise((resolve,reject)=>{
        //resolve("Data received")
        reject("could not fetch data");
    });
};

// getSomething().then((data)=>{
//     console.log(data);
// },(err)=>{
//      console.log(err);
// });

getSomething().then((data)=>{
    console.log(data);
}).catch((err)=>{
     console.log(err);
});
