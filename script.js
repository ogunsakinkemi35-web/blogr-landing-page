const menuBtn=
document.getElementByid("menuBtn");
const navLinks=
document.getElementByid("navLinks");
menuBtn.addEventListener("click", function(){
    navLinks.classList.toggle("active");
});