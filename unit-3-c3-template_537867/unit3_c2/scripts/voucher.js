




    const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res[0].vouchers)
        appendvouchers(res[0].vouchers);
    })
     






appendvouchers=(data)=>{
let container=document.getElementById('voucher_list');
container.innerHTML=null;

    for(let i=0;i<data.length;i++){

        let box=document.createElement('div');

        
        let n=document.createElement('p');
        n.innerText=data[i].name;

        let img=document.createElement('img');
        img.src=data[i].image;


        let p=document.createElement('h4');
        p.innerText=data[i].price;

        let btn=document.createElement('button');
        btn.innerText="Buy";
        btn.setAttribute('class','buy_voucher');
        btn.addEventListener('click',function(){
            buyproduct(data[i]);
        
        })

        box.append(img,n,p,btn);
        container.append(box);

    }
}



 

let arr=JSON.parse(localStorage.getItem('purchase')) || [];

let tot=arr.reduce(function(sum,data,index,arr){

    return sum+Number(data.price);

},0)
console.log(tot);
document.getElementById('wallet_balance').innerText=tot;

function buyproduct(data){
    console.log(data);
    arr.push(data);
    localStorage.setItem('purchase',JSON.stringify(arr));
        
    
    
    // arr.push(data);
    // localStorage.setItem('purchase',JSON.stringify(arr));
    
}
        


    
        


    


// function main(){
//     let data=getset();

//     if(data===undefined){
//         return false;
//     }
//     append(data);
// }