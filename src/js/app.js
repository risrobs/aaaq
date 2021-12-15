import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
    $(function() {

   // on mouse enter hide other and show current one
   $(".coupon_hover1").mouseenter(function(event) {
     $(".coupon_hover1").each(function() {
       $(this).hide();
     });
     $(this).show();
   });

   // on mouse leave show all coupons as before
   $(".coupon_hover1").mouseleave(function(event) {
     $(".coupon_hover1").each(function() {
       $(this).show();
     });
   });
 })