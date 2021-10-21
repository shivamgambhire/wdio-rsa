class review{

    get prodPrice(){
        return $$("//tr/td[4]/strong")
    }

    priceCal(){
    const priceTot = this.prodPrice.map(price=>parseInt(price.getText().split(".")[1].trim())).reduce((acc,price)=> acc + price , 0)
    return priceTot
    }
}

module.exports = new review()