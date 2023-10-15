// fetch data from api
async function getEStore() { 
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url) , 
          EStore = await response.json();
    return EStore
}
// display products 
async function displayEStore() { 
    const row = document.querySelector('.row')
    const EStoreData = await getEStore()

    // iterate over EStore Data 
    for(let product of EStoreData) {
        const div = document.createElement("div") // <div class=""></div>
        div.className = "col-lg-4 col-md-6 col-sm-12 my-4";
        div.innerHTML = `
        <div class="card" style="width: 22rem; border:none">
        <img src="${product.image ? product.image : "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX.jpg_UX._SY._UY_."}" class="card-img-top" alt="This is fake image">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <span> Price : </span>
          <h5 class="card-title">${product.price}</h5>
          <span> category : </span>
          <h5 class="card-title">${product.category}</h5>
          <span> Rate : </span>
          <h5 class="card-title">${product.rating.rate}</h5>
          <span> count : </span>
          <h5 class="card-title">${product.rating.count}</h5>
          <a href="${product.url}" target="_blank"
          class="btn btn-danger">Add to cart</a>
        </div>
      </div>
        `
        row.appendChild(div);  
    } 
}

// onDocument Load
document.addEventListener('DOMContentLoaded' , displayEStore)