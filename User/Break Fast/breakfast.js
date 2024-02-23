var image1 = document.getElementById("item-image-1");
var image2 = document.getElementById("item-image-2");
var image3 = document.getElementById("item-image-3");
var image4 = document.getElementById("item-image-4");
var image5 = document.getElementById("item-image-5");
var image6 = document.getElementById("item-image-6");
var image7 = document.getElementById("item-image-7");
var image8 = document.getElementById("item-image-8");
var image9 = document.getElementById("item-image-9");
var image10 = document.getElementById("item-image-10");
var image11 = document.getElementById("item-image-11");
var image12 = document.getElementById("item-image-12");

var orderedItem1 = document.getElementById("ordered-item-1");
var quantity1 = document.getElementById("quantity-1");

var orderedItem2 = document.getElementById("ordered-item-2");
var quantity2 = document.getElementById("quantity-2");

var orderedItem3 = document.getElementById("ordered-item-3");
var quantity3 = document.getElementById("quantity-3");

var orderedItem4 = document.getElementById("ordered-item-4");
var quantity4 = document.getElementById("quantity-4");

var orderedItem5 = document.getElementById("ordered-item-5");
var quantity5 = document.getElementById("quantity-5");

var orderedItem6 = document.getElementById("ordered-item-6");
var quantity6 = document.getElementById("quantity-6");

var orderedItem7 = document.getElementById("ordered-item-7");
var quantity7 = document.getElementById("quantity-7");

var orderedItem8 = document.getElementById("ordered-item-8");
var quantity8 = document.getElementById("quantity-8");

var orderedItem9 = document.getElementById("ordered-item-9");
var quantity9 = document.getElementById("quantity-9");

var orderedItem10 = document.getElementById("ordered-item-10");
var quantity10 = document.getElementById("quantity-10");

var orderedItem11 = document.getElementById("ordered-item-11");
var quantity11 = document.getElementById("quantity-11");

var orderedItem12 = document.getElementById("ordered-item-12");
var quantity12 = document.getElementById("quantity-12");

image1.addEventListener('click',function() {
    var MixedSausage = {
        Name: "Mixed-Sausage",
        Price: 200,
        Quantity: 1
    };
    orderedItem1.textContent = MixedSausage.Name;
    quantity1.textContent = MixedSausage.Quantity;
});

image2.addEventListener('click',function() {
    orderedItem2.textContent = "Sandwitch";
});

image3.addEventListener('click',function() {
    orderedItem3.textContent = "Vada";
});

image4.addEventListener('click',function() {
    orderedItem4.textContent = "Dosa";
});

image5.addEventListener('click',function() {
    orderedItem5.textContent = "Bread-Egg";
});

image6.addEventListener('click',function() {
    orderedItem6.textContent = "Puri";
});

image7.addEventListener('click',function() {
    orderedItem7.textContent = "Paratha";
});

image8.addEventListener('click',function() {
    orderedItem8.textContent = "Roasted-Bread";
});

image9.addEventListener('click',function() {
    orderedItem9.textContent = "Biscuits";
});

image10.addEventListener('click',function() {
    orderedItem10.textContent = "Salad-Omlette";
});

image11.addEventListener('click',function() {
    orderedItem11.textContent = "Veg-Roll";
});

image12.addEventListener('click',function() {
    orderedItem12.textContent = "Egg-Fry";
});