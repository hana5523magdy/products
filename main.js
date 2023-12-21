let productname=document.querySelector("#productname");
let productprice=document.querySelector("#productprice");
let productcategory=document.querySelector("#productcategory");
let productdesc=document.querySelector("#productdesc");
let productArray=[];

document.querySelector(".add-product").onclick=function(){
    addproduct()
}


function addproduct(){
    let product={
        name: productname.value ,
        price: productprice .value,
        category: productcategory.value,
        desc: productdesc.value,
    };
    productArray.push(product);
    showproducts();
    clear();
}

function showproducts(){
    let p='';
    for (let i =0 ; i<productArray.length ; i++){
        p += `
        <tr>
        <td> ${i}</td>
        <td>${productArray[i].name}</td>
        <td>${productArray[i].price}</td>
        <td>${productArray[i].category}</td>
        <td>${productArray[i].desc}</td>
        <td><button class="delete" onclick = 'deleteProducts(${i})'>Delete</button></td>
        </tr>
    `
    document.querySelector("tbody").innerHTML= p;
    }
}

function clear(){
    productname .value="";
    productprice.value="";
    productcategory.value="";
    productdesc.value="";
}

function deleteProducts(soad){
    console.log(soad);
    productArray.splice(soad , 1);
    showproducts()
}

