//DOM manipulation

// const para=document.querySelector("p");

// console.log(para);

// para.innerText="Statement updated to Wonderful world!!!";
//  const paras=document.querySelectorAll("p");

//  console.log(paras);

//  paras.forEach(para=>{
//     para.innerText+=" more text...";
//  })

// const errPara=document.querySelector(".error");

// console.log(errPara);

// errPara.innerText="error messaged changed...";

//get elementbyId()
//getelementsbyclassname()
//getelementsbytagname()

//const content=document.querySelector(".content");
// content.innerHTML="<h1>New Content added...</h1>";

// const players=["Sachin","Sehwag","Yuvi","Dravid"];
// players.forEach(player=>{
//     content.innerHTML+=`<p>${player}</p>`
//     // content.innerHTML+="<p>"+player+"</p>"
// });

// const studentDetails=[
//     {id:101,name:"Ritesh",course:"BE-CS",gradYear:2022},
//     {id:102,name:"Divesh",course:"BE-Auto",gradYear:2021},
//     {id:103,name:"Ganesh",course:"BE-IT",gradYear:2022},
//     {id:104,name:"Mangesh",course:"BE-Mech",gradYear:2020},
//     {id:105,name:"Pritesh",course:"BE-CS",gradYear:2023},
//     {id:106,name:"Mahesh",course:"BE-IT",gradYear:2022}
// ];

// const info=document.querySelector("table");
// let html=``;

// studentDetails.forEach((students)=>{
//     html+=`<tr>
//     <td>${students.id}</td>
//     <td>${students.name}</td>
//     <td>${students.course}</td>
//     <td>${students.gradYear}</td>"
//     </tr>`;
// })
// info.innerHTML+=html;
// -----------------------------------------------------------------
//getting and setting tag attributes
//getAttribute()
//setAttribute()

// const link=document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href","http://www.instagram.com");
// console.log(link.getAttribute("href"));
// link.innerText="Link to Instagram";

// const para=document.querySelector("p");
// para.setAttribute("class","success");
// para.innerText="Some success text in para";
// para.setAttribute("style","color:green")

// ----------------------------------------------------------------------
//Adding and removing css classes
// const para=document.querySelector("p");
// para.classList.replace("error","success");
// para.classList.toggle("error");
// classList.add()
// classList.remove()
// classList.replace()
//-----------------------------------------------------------------------
//Parent,child and sibling
// const article=document.querySelector("article");
// const children=article.children;
// const tag=document.querySelector("p");
// tag.classList.add("error");
// const headh2=document.querySelector("h2");
// headh2.classList.add("success")
// console.log(children);

//using for add classes in tag
// for(let i=0;i<children.length;i++){
//     // console.log(children[i].localName);
//     if(children[i].localName=='p'){
//         children[i].classList.add("error");
//     }
//     if(children[i].localName=='h1' || children[i].localName=='h2'){
//         children[i].classList.add("success");
//     }
// }

//using forEach
// Array.from(children).forEach((child)=>{
//     if(child.localName=='p'){
//         child.classList.add("error");
//     }
//     if(child.localName=='h1' || child.localName=='h2'){
//         child.classList.add("success");
//     }
// });

// const head2=document.querySelector("h2");
// console.log(head2.parentElement);//gives the parent element
// console.log(head2.previousElementSibling);//gives the previous sibling
// console.log(head2.nextElementSibling);//give the next element sibling
//----------------------------------------------------------------------------------------

// const h1=document.querySelector("h1");
//const input=document.querySelector("input");
// const button=document.querySelector("button");

// button.addEventListener('click',e=>{
//     // if(h1.innerText=="Events Demo"){
//     //     h1.innerText="Event changed the text..";
//     // }else{
//     //     h1.innerText="Events Demo";
//     // }
//     h1.innerText=input.value;
//     input.value=" ";
// });
//----------------------------------------------------------------------------------------------
//Adding and Removing Elements

let playerList;

const ul=document.querySelector("ul");
const input=document.querySelector("input");
const button=document.querySelector("button");

let html=``;
button.addEventListener('click',e=>{
    console.log(input.value);
    if(input.value!=""){
    html=`<li>${input.value}</li>`
    input.value=" ";
    ul.innerHTML+=html;
    html=``;
    }
});
// button.addEventListener('click',e=>{
//     const li=document.createElement("li");
//     li.textContent=input.value;
//     ul.append(li);
//     input.value="";
//     let playerList=document.querySelectorAll("li");
//     playerList.forEach((player)=>{
//         player.addEventListener('click',e=>{
//             console.log(e.target);
//             e.target.remove();
//         })
//     });
//});

//Event Bubbling(events are propogated from children to parent element)
// ul.addEventListener('click',e=>{
//     if(e.target.localName=="li"){
//     e.target.remove();
//     }
// });