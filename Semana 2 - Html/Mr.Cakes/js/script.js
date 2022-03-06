const activeImage = document.querySelector(".product-image .active"),
    productImages = document.querySelectorAll(".image-list img"),
    navItem = document.querySelector("a.toggle-nav");

function changeImage(e) {
    activeImage.src = e.target.src
}

function toggleNavigation() {
    this.nextElementSibling.classList.toggle("active")
}

productImages.forEach((e => e.addEventListener("click", changeImage))), navItem.addEventListener("click", toggleNavigation);

var date = new Date();

var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];


let arreglo_id = [
    "fecha1",
    "fecha2",
    "fecha3",
    "fecha4",
    "fecha5",
    "fecha6",
    "fecha7",
    "fecha8"
];


for (let index = 0; index < arreglo_id.length; index++) {
    const element = arreglo_id[index];
    document.getElementById(element).innerHTML = dateString;
    
}
