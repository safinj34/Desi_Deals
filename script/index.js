
// document.getElementById("cuttingBoard").addEventListener("dblclick",function (){
//     console.log("hari clicked")


// }
// );

// function removeSpace(str){
//     return str.replaceAll(" ","".toUpperCase())
// }

// const title= document.querySelectorAll(".card-title")


// for(let titles of title){
//     titles.innerHTML=`<span class='text-pink-500'>${removeSpace(titles.innerText)}</span>`
//     console.log(titles)
// }


const cartbtns=document.getElementsByClassName("cart-btn")

for(let cartButtons of cartbtns){
    cartButtons.addEventListener("click",function (){
        // const productImg=cartButtons.parentNode.parentNode.childNodes[1].childNodes[1].src;
         const productImg=cartButtons.parentNode.parentNode.children[0].children[0].src;
         const productTitle=cartButtons.parentNode.parentNode.children[1].children[0].innerText
        const productPrice=cartButtons.parentNode.parentNode.children[1].children[2].children[0].innerText
        const totalPrice=getElementBy("total-price").innerText
        const currentTotal=Number(productPrice)+Number(totalPrice)
        getElementBy("total-price").innerText=currentTotal
        const cartContainer=getElementBy("cart-container")
        const newCart=document.createElement("div")
        newCart.innerHTML=`<div class=" bg-gray-200 flex justify-between p-4 my-5 rounded-xl"><img class="w-10" src="${productImg}" alt=""><div><h2>${productTitle}</h2><h2><span>${productPrice}</span> Tk</h2></div></div>`
        cartContainer.append(newCart)
    

    })
    
}

function getElementBy(id){
    const element=document.getElementById(id)
    return element
}

