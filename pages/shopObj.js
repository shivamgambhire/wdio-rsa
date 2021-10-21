class shoppage{

    get checkoutBtn(){
        return $("*=Checkout")
    }

    get cartItems(){
        return $$(".card.h-100")
    }

    addItems(productList){
        this.cartItems.filter(card=>productList.includes(card.$("div h4 a").getText())).map(addCart=>addCart.$(".card-footer button").click())

    }
}

module.exports = new shoppage()