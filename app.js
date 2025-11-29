let a = document.getElementById("menuList")
menuList.style.maxHeight = "0px"

function toggleMenu () {
    if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === ""){
        menuList.style.maxHeight = "15rem"
    }else{
        menuList.style.maxHeight = "0px"
    }
}


const categoryImages = document.querySelectorAll('.card img');
const productCards = document.querySelectorAll('.products-card');

const categoryMap = {
    tv: ["Smart TV"],
    keyboard: ["Computer Keyboard"],
    mouse: ["Mouse", "Gaming Mouse"],
    airpod: ["Gaming Airpod", "Airpod Pro"],
    cpu: ["Computer Cpu", "Gaming Cpu"],
    headphone: ["Headphone", "Gaming headphone"]
};

categoryImages.forEach(img => {
    img.addEventListener("click", () => {
        
        let category = img.dataset.category;
        let allowedProducts = categoryMap[category];

        productCards.forEach(card => {
            let productName = card.querySelector("h3").innerText.trim();

            if (allowedProducts.includes(productName)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        document.getElementById("Products-1-12-cards")
            .scrollIntoView({ behavior: "smooth" });
    });
});

