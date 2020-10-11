//business logic
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
    // this.total = parseInt(this.sizePrice) + parseInt(this.crustPrice) + parseInt(this.toppingsPrice);
}

Order.prototype.totalPrice = function() {
    return this.sizePrice + this.crustPrice + this.toppingsPrice;
}

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
        //alert(sizePizza + " " + crustPizza + " " + toppingPizza);
        var newOrder = new Order(sizePizza,crustPizza,toppingPizza);
        alert(newOrder.toppingsPrice);

        $("#show-order").show();
        $("#show-order h2").text("Your Order");
        $(".pizza-size").text(newOrder.size +" "+ newOrder.sizePrice + "rwf");
        $(".pizza-crust").text(newOrder.crust +" "+ newOrder.crustPrice + "rwf" );
        $(".pizza-toppings").text(newOrder.toppings +" "+ newOrder.toppingsPrice + "rwf");

         event.preventDefault();
    });
});

