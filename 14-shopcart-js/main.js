let shop = document.body.querySelector('.shop')


let basket =[]
let shopItemsData = [
    {
        id:"fasfasfasf",
        name:'Casual Shirt',
        price:45,
        desc:"Lorem ipsum dad fasf asf aaaa ttatwet consec",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Exjgy2Zjh5r7CjYsa2c-chmcH43n9RF-MQ&usqp=CAU'
    },
    {
        id:"fa25sfasf",
        name:'Mens Suit',
        price:45,
        desc:"Lorem ipsum dad fasf asf aaaa ttatwet consec",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Exjgy2Zjh5r7CjYsa2c-chmcH43n9RF-MQ&usqp=CAU'
    },
    {
        id:"fas35253f",
        name:'T Shirt',
        price:45,
        desc:"Lorem ipsum dad fasf asf aaaa ttatwet consec",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Exjgy2Zjh5r7CjYsa2c-chmcH43n9RF-MQ&usqp=CAU'
    },
    {
        id:"f325asf",
        name:'PANTS',
        price:45,
        desc:"Lorem ipsum dad fasf asf aaaa ttatwet consec",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Exjgy2Zjh5r7CjYsa2c-chmcH43n9RF-MQ&usqp=CAU'
    }
]


let generateShop =()=>{
      
    return (shop.innerHTML =shopItemsData.map((x)=>{
        let {name,price,desc,img,id} = x
        return `
        <div id=product-id-${id} class="item">
        <img src=${img} alt=${img}>
        <div class="details">
            <h1>${name}</h1>
            <p>${desc}</p>
            <div class="price">
                <div class="sum">$${price}</div>
                <div class="counter">
                    <i onclick="increment(${id})" class="bi bi-plus"></i>
                    <div id=${id} class="amount">0</div>
                    <i onclick="decrement(${id})" class="bi bi-dash"></i>
                </div>
            </div>
        </div>
        </div>
        `
    }).join('')
    
    )
}

generateShop()

function increment(id){
     let selectedItem = id
     let search = basket.find(x=>x.id===selectedItem)

     if(search===undefined){
          basket.push({
            id:selectedItem,
            item:1
          })
     }
     else{
          search.item+=1
     }
     localStorage.setItem("data",JSON.stringify(basket))
     update(id)
}
function decrement(id){ 
    let selectedItem = id
    let search = basket.find(x=>x.id===selectedItem)
    if(search.item===0) return;
       
    else{
         search.item-=1
    }
    localStorage.setItem("data",JSON.stringify(basket))
    update(id)
}

function update(id){
     let search = basket.find(x=>x.id===id)

     id.innerHTML = search.item
     calculation()
}

function calculation(){
    let basketSum =  document.getElementById('navbar__count')
    console.log(basket)
    basketSum.innerHTML =basket.map((x)=>x.item).reduce((x,y) => x + y, 0)
     
    
}