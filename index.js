$(document).ready(function() {
    $('.add-to-cart').on('click', function() {
        const productName = $(this).siblings('h3').text();
        alert(productName + ' has been added to your cart!');
    });
});

$(".formSubmit").on("click", function(){
    alert("your details are submitted successfully");
    $("input").val(' ');
    $("textarea").val(' ');
});