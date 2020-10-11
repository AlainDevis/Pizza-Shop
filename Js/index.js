//business logic
var smallSize = 2000;
var mediumSize = 4000;
var largeSize = 6000;

var crispy = 500;
var stuffed = 800;
var glutenFree = 1000;

var meatTopping1 = 1000;
var meatTopping2 = 1200;
var meatTopping3 = 1500;

var seafoodTopping1 = 800;
var seafoodTopping2 = 1000;
var seafoodTopping3 = 1100;

var vegTopping1 = 500;
var vegTopping2 = 600;
var vegTopping3 = 800;

function ordersize(size){
    this.size = size;
}

function ordercrust(crust){
    this.crust = crust;
}

function ordertoppings(toppings = []){
    this.toppings = toppings;
}


//user interface logic
$(document).ready(function() {
    
    
    $("form#new-order#addsize").submit(function(event) {
        var small = $("select#size").val();
        alert(small); 
         event.preventDefault();
    });
});

