const main_container = document.createElement("div");
main_container.setAttribute("class", "main_container");
document.body.append(main_container);

/*const titles = document.createElement("div");
titles.innerHTML = `<p>Confidence lies in the lipstick shade</p>`;
main_container.append(titles);
*/
//const sub_container = document.createElement("div");
//main_container.append(sub_container);



async function getMakeUpAPIDetails() {
    try {
        const data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json", {
            method: "GET"
        });
        const apidata = await data.json();
        console.log(apidata);
        apidata.forEach((product) => createProduct(product));
    } catch (error) {
        //alert(error);
        console.log(error);
    }
}

getMakeUpAPIDetails();

function createProduct({ brand, name, price, price_sign, image_link, product_link, description }) {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = `
        <div class = "image_container">
            <img src = "${image_link}" alt = "Product Image" onerror="this.onerror=null;this.src='img/default.png';">
        </div>
        <div class = "product_info">
            <p class = "brand">${brand}</p>
            <p class = "name">${name}</p>
            <p class = "price">${price}${price_sign}</p>
            <a href = "${product_link}" target = "_blank">Go To Product Page</a>
           
    
        </div>`;
    main_container.append(container);
    // <p class = "description">${description}</p>
}
