//business logic
// var smallSize = 2000;
// var mediumSize = 4000;
// var largeSize = 6000;

// var crispy = 500;
// var stuffed = 800;
// var glutenFree = 1000;

// var meatTopping1 = 1000;
// var meatTopping2 = 1200;
// var meatTopping3 = 1500;

// var seafoodTopping1 = 800;
// var seafoodTopping2 = 1000;
// var seafoodTopping3 = 1100;

// var vegTopping1 = 500;
// var vegTopping2 = 600;
// var vegTopping3 = 800;

function Order(size,crust,toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;

    if ( size == "Small Size"){
        this.sizePrice = 2000;
    }
    else if ( size == "Medium Size"){
        this.sizePrice = 4000;
    }
    else if ( size == "Large Size"){
        this.sizePrice = 6000;
    }
    else if ( crust == "Crispy"){
        this.crustPrice = 500;
    }
    else if ( crust == "Stuffed"){
        this.crustPrice = 800;
    }
    else if ( crust == "Gluten-free"){
        this.crustPrice = 1000;
    }
    else if ( toppings == "BBQ sauce, grilled chicken, scallions, and cheddar cheese"){
        this.toppingsPrice = 1000;
    }
    else if ( toppings == "Corn and spicy Italian salami"){
        this.toppingsPrice = 1200;
    }
    else if ( toppings == "Spinach, caramelized onion, and bacon"){
        this.toppingsPrice = 1500;
    }
    else if ( toppings == "Alfredo sauce, shrimp, and tomatoes"){
        this.toppingsPrice = 800;
    }
    else if ( toppings == "Canned tuna fish, red onions, and black olives"){
        this.toppingsPrice = 1000;
    }
    else if ( toppings == "Sardines, red onions, and black olives"){
        this.toppingsPrice = 1100;
    }
    else if ( toppings == "Fried eggplant slices and black olives"){
        this.toppingsPrice = 500;
    }
    else if ( toppings == "Spinach, artichoke hearts, garlic, and red onion"){
        this.toppingsPrice = 600;
    }
    else if ( toppings == "Goat cheese with arugula and red onion"){
        vthis.toppingsPrice = 800;
    }
    this.total = parseInt(this.sizePrice) + parseInt(this.crustPrice) + parseInt(this.toppingsPrice);
}

// Order.prototype.totalPrice = function() {
//     return this.sizePrice + this.crustPrice + this.toppingsPrice;
// }

// function ordercrust(crust){
//     this.crust = crust;
// }

// function ordertoppings(toppings = []){
//     this.toppings = toppings;
// }


//user interface logic
$(document).ready(function() {
    $("form#new-order").submit(function(event) {
        var sizePizza = $("select#size").val();
        var crustPizza = $("select#crust").val();
        var toppingPizza = $("select#toppings").val();
        // alert(sizePizza + " " + crustPizza + " " + toppingPizza);
        var newOrder = new Order(sizePizza, crustPizza,toppingPizza);
        alert(newOrder.total);
         event.preventDefault();
    });
});

