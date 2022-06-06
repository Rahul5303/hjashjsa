let arr1=JSON.parse(localStorage.getItem('purchase')) || [];



arr1.map((e,i)=>{

let container=document.getElementById('purchased_vouchers');
container.innerHTML=null;
   
        
    
            let box=document.createElement('div');
    
            
            let n=document.createElement('p');
            n.innerText=e.name;
    
            let img=document.createElement('img');
            img.src=e.image;
    
    
            let p=document.createElement('h4');
            p.innerText=e.price
    
            box.append(img,n,p);
            container.append(box);
    
    
    });