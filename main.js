import { addToCart, displayCartTotal, renderCartItem } from "./js/cart.js";
import { fetchProducts, renderProducts } from "./js/products.js";

document.addEventListener("DOMContentLoaded", async () => {
    console.log(window.location.pathname.includes("index.html"));
    if(window.location.pathname.includes("cart.html")) {
        renderCartItem();
        displayCartTotal();
        
    } else {
        // Eğer sayfa cart.html sayfasında değilse ürünleri al.
       const products = await fetchProducts();
       // Ürünleri render et ve addToCartCallback fonksiyonu tanımla.
       renderProducts(products,(event) => addToCart(event, products));
    } 
});