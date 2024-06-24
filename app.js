const l = document.querySelector(".main");
const heading = document.querySelector("h1");
const searchInput = document.querySelector("#search-input");
let data = [];
const getData = async () => {
  heading.innerHTML = "Loading...";
  const response = await fetch("https://fakestoreapi.in/api/products");
  const result = await response.json();
  data = result.products;
  productsData(result.products);
};

function productsData(data) {
  l.innerHTML = "";
  data.forEach((element) => {
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
}
searchInput.addEventListener("input", (e) => {
  searchData(e.target.value);
});
function searchData(value) {
  // console.log(value);
  const filteredData = data.filter(
    (cur) =>
      cur?.title?.toLowerCase().includes(value.toLowerCase()) ||
      cur?.color?.toLowerCase().includes(value.toLowerCase()) ||
      cur?.category?.toLowerCase().includes(value.toLowerCase()) ||
      cur?.brand?.toLowerCase().includes(value.toLowerCase()) ||
      cur?.price?.toString().toLowerCase().includes(value.toLowerCase())
  );

  heading.innerHTML = "lodding";
  if (filteredData.length > 0) {
    productsData(filteredData);
  } else {
    l.innerHTML = "";
    heading.innerHTML = "no products found";
  }
}
getData();

// function productsData(data) {
//   // Clear previous items
//   l.innerHTML = "";

//   data.forEach((element) => {
//     const v = document.createElement("div");
//     v.classList.add("item");
//     v.innerHTML = `<img src="${element.image}" alt="">
//                 <h2><span></span> ${element.title}</h2>
//                 <div class="details">
//                 <p><span>Category:</span> ${element.category}</p>
//                 <p><span>Brand:</span> ${element.brand}</p>
//                 <p><span>Color:</span> ${element.color}</p>
//                 <p><span>Model:</span> ${element.model}</p>
//                 <p><span>Price: $</span> ${element.price}</p>
//                 </div>`;
//     l.appendChild(v);
//   });

//   heading.innerHTML = "Products";
// }

// searchInput.addEventListener("input", (e) => {
//   searchData(e.target.value.trim());
// });

// function searchData(value) {
//   heading.innerHTML = "Loading..."; // Display loading message

//   if (value === "") {
//     // If search input is empty, show all products
//     productsData(data);
//   } else {
//     const filteredData = data.filter((item) =>
//       item.title.toLowerCase().includes(value.toLowerCase())
//     );

//   }
// }

// getData();
