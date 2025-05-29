// Header section JS here
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
});



// Single product Section JS Here
// Thumbnail image switching
  function changeImage(thumbnail) {
    document.getElementById('mainProductImage').src = thumbnail.src;
    document.querySelectorAll('.single-product-thumbnail').forEach(thumb => thumb.classList.remove('selected'));
    thumbnail.classList.add('selected');
  }