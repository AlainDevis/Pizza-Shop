//business logic
function Order(size,crust,toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;

    if ( size == "Small Size"){
        this.sizePrice = 2000;
    }
    if ( size == "Medium Size"){
        this.sizePrice = 4000;
    }
    if ( size == "Large Size"){
        this.sizePrice = 6000;
    }
    if ( crust == "Crispy"){
        this.crustPrice = 500;
    }
    if ( crust == "Stuffed"){
        this.crustPrice = 800;
    }
    if ( crust == "Gluten-free"){
        this.crustPrice = 1000;
    }
    if ( toppings == "BBQ sauce, grilled chicken, scallions, and cheddar cheese"){
        this.toppingsPrice = 1000;
    }
    if ( toppings == "Corn and spicy Italian salami"){
        this.toppingsPrice = 1200;
    }
    if ( toppings == "Spinach, caramelized onion, and bacon"){
        this.toppingsPrice = 1500;
    }
    if ( toppings == "Alfredo sauce, shrimp, and tomatoes"){
        this.toppingsPrice = 800;
    }
    if ( toppings == "Canned tuna fish, red onions, and black olives"){
        this.toppingsPrice = 1000;
    }
    if ( toppings == "Sardines, red onions, and black olives"){
        this.toppingsPrice = 1100;
    }
    if ( toppings == "Fried eggplant slices and black olives"){
        this.toppingsPrice = 500;
    }
    if ( toppings == "Spinach, artichoke hearts, garlic, and red onion"){
        this.toppingsPrice = 600;
    }
    if ( toppings == "Goat cheese with arugula and red onion"){
        vthis.toppingsPrice = 800;
    }
    // this.total = parseInt(this.sizePrice) + parseInt(this.crustPrice) + parseInt(this.toppingsPrice);
}

Order.prototype.totalPrice = function() {
    return this.sizePrice + this.crustPrice + this.toppingsPrice;
}

//user interface logic
$(document).ready(function() {
    $("button#orderbtn").click(function(event) {
        var sizePizza = $("select#size").val();
        var crustPizza = $("select#crust").val();
        var toppingPizza = $("select#toppings").val();
        //alert(sizePizza + " " + crustPizza + " " + toppingPizza);
        var newOrder = new Order(sizePizza,crustPizza,toppingPizza);
        // alert(newOrder.totalPrice());

        $("#show-order").show();
        $("#show-order h2").text("Your Order");
        $(".pizza-size").text(newOrder.size +" "+ newOrder.sizePrice + "rwf");
        $(".pizza-crust").text(newOrder.crust +" "+ newOrder.crustPrice + "rwf" );
        $(".pizza-toppings").text(newOrder.toppings +" "+ newOrder.toppingsPrice + "rwf");
        $(".pizza-total-amount").text(newOrder.totalPrice() + "rwf");

        document.getElementById('size').value="Select The Pizza";
        document.getElementById('crust').value="Select The Crust";
        document.getElementById('toppings').value="Select The Toppings";
        event.preventDefault();

        // var orders = [];
        // orders.push(newOrder);
    });

    $("button#ordercheckout").click(function(event) {
        orders.forEach(displayOrders);
        function displayOrders() {
            // alert(orders);
          }
    });

});

