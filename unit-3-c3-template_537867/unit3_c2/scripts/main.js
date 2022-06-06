// console.log("ppp")

let getdata=()=>{

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let address=document.getElementById('address').value;
    let amount=document.getElementById('amount').value;
    // console.log(name,email,address,amount);

    let obj={
        Name:name,
        Email:email,
        Address:address,
        Amount:amount,
    };
    console.log(obj);
    
    localStorage.setItem('user',JSON.stringify(obj));

    let name1=document.getElementById('name').value="";
    let email1=document.getElementById('email').value="";
    let address1=document.getElementById('address').value="";
    let amount1=document.getElementById('amount').value="";

}