function changeTxt(){
    const input=document.querySelector('.input').value;
    let newVal='';
        newVal+=input.replace(/[^a-zA-Z ]/g, '');
    document.querySelector('.output').value=newVal;
}