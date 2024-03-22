
var plusbtns = Array.from(document.querySelectorAll('.fa-square-plus'))
var minusbtns = Array.from(document.querySelectorAll('.fa-square-minus'))
var favs = Array.from(document.querySelectorAll('.fa-thumbs-up'))
var deletebtns = Array.from(document.querySelectorAll('.fa-thumbs-down'))
var cards = Array.from(document.querySelectorAll('.card'))

console.log(favs)
console.log(plusbtns)
console.log(minusbtns)

// favourites
for(let fav of favs) (
    fav.addEventListener("click",function() {
        if (fav.style.color != 'red') {
            (fav.style.color = 'red'  )
        } else{
            fav.style.color = 'black'
        }
    })
)

//  remove btn
for (let i in deletebtns){
    deletebtns[i].addEventListener("click",function(){
        cards[i].remove()
        total()
    })
}

//  plus btn
for(let plusbtn of plusbtns){
    plusbtn.addEventListener("click",function(){
        plusbtn.nextElementSibling.innerHTML++
    })
}


//  minus btn
for(let minusbtn of minusbtns){
    minusbtn.addEventListener("click",function(){
        minusbtn.previousElementSibling.innerHTML > 0 ? minusbtn.previousElementSibling.innerHTML-- : null
    })
}

// function total price
function total(){
    let qte = Array.from(document.querySelectorAll("counter"))
    let price =Array.from(document.querySelectorAll(".unitprice"))

    let s =  0 

    for (let i =0; i < price.length; i++){
        s = s + price[i].innerHTML * qte[i].innerHTML
    }
   document.getElementById('total-price').innerHTML = s
}