const main_container = document.createElement("div");
main_container.setAttribute("class", "main_container");
document.body.append(main_container);

const titles_container = document.createElement("div");
titles_container.setAttribute("class", "titles_container");
main_container.append(titles_container);

const loader = document.createElement("div");
loader.setAttribute("class", "loader");
main_container.append(loader);

const sub_container = document.createElement("div");
sub_container.setAttribute("class", "sub_container");
main_container.append(sub_container);


const titles = ['We care for your confidence',
                'A makeover for your personality, a makeover of your life',
                'Outline your eyes, to outline your life!',
                'Be yourself, be the beauty you are',
                'Shine on for your beautiful soul'];
let index = 0;

const cycleTitles = () =>{
    if(index === titles.length){
        index=0;
    }
    titles_container.innerHTML =`<p>${titles[index]}</p>` ;
    index++;
}

const titleInterval = setInterval(cycleTitles,5000);


async function getMakeUpAPIDetails() {
    try {
        const data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json", {
            method: "GET"}   
    );
        const apidata = await data.json();
        console.log(apidata);
        loader.remove();
        apidata.forEach((product) => createProduct(product));
        
    } catch (error) {
        loader.remove();
        alert("Failed to fetch details. Please try after sometime.");
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
        </div>
        <div class = "more_details">
                <a href = "${product_link}" target = "_blank">Go To Product Page</a>
                <p class = "show_description">See More Description</p>
                <div class = "description">
                    ${description}
                </div>
        <div>`;
    sub_container.append(container);
    
}

