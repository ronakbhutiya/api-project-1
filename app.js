const l = document.querySelector(".main");
const heading = document.querySelector("h1");
const getData = async () => {
  heading.innerHTML = "Loading...";
  const response = await fetch("https://fakestoreapi.in/api/products");
  const result = await response.json();
  //   console.log(result.products);
  result.products.forEach((element) => {
    heading.innerHTML = "products";

    // console.log(element);
    const v = document.createElement("div");
    v.classList.add("item");
    v.innerHTML = `<img src="${element.image}" alt="">
                <h2><span></span>  ${element.title}</h2>
                <div class="details">
                <p><span>Category:</span>  ${element.category}</p>
               <p><span>Brand:</span>  ${element.brand}</p>
                <p><span>Color:</span>  ${element.color}</p>
                <p><span>Model:</span>  ${element.model}</p>
                <p><span>Price: $</span>  ${element.price}</p>      
                </div>
    `;
    l.appendChild(v);
  });
};
getData();
