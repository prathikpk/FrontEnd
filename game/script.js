
document.querySelectorAll('.start').forEach(e=> {
    e.addEventListener('click', s=>{
        s.value=Math.floor(Math.random()*40)+1 
        a=s.value
        console.log(a);
    })
});

var turns = 0;
function start(){
 if(turns<6){
    turns++;
 }else
 document.querySelectorAll("#btn").forEach(d=>{
    d.disabled = true;
}) 
}

document.querySelectorAll('#btn').forEach(e=> {
    e.addEventListener('click', function() {
        if (e.innerText==a){
            this.style.backgroundColor="green"
            document.querySelectorAll("#btn").forEach(e=>{
                e.disabled = true;
            })
            if(this.style.backgroundColor="green"){
                alert("You guessed the correct number in "+turns+"!!!")
            }
        }
        else if(e.innerText>a){
            this.style.backgroundColor="red"
        }else if(e.innerText<a){
            this.style.backgroundColor="yellow"
        }
    })
  });