const loginRSA = require("../../pages/pageObj")
const shoppage = require("../../pages/shopObj")
const reviewPage = require("../../pages/reviewPage")
const chaiAssert = require("chai").expect

describe("eCommerece E2E", ()=> {

    it("Login Page E2E", ()=>{
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
        expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")
 
        loginRSA.loginMethod("rahulshettyacademy","learning")
        loginRSA.signBtn.click()

        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("Proto") 
     })

    it("cart page", ()=> {

        //cart item list to be added
        var productList = ["Blackberry", "Nokia Edge"]
        shoppage.checkoutBtn.waitForExist()
        //first gettext of item then using map click on addcart button
        shoppage.addItems(productList)      //getting values from shoppage using page object module
        browser.pause(3000)
        //click oncheckout button
        shoppage.checkoutBtn.click()
        browser.pause(3000)

       //adding all cart item list. first get the text of price, split, trim, convert to int and using reduce sum the total price list
       const priceTot =  reviewPage.priceCal()
      
       //getting total price from table 
       const actPrice = parseInt($("h3 strong").getText().split(".")[1].trim())

       //asserting the table total with our calculated value
       chaiAssert(priceTot).to.be.equal(actPrice)

       $(".btn-success").click()
       $("#country").setValue("Ind")
       $(".lds-ellipsis").waitForExist({reverse:true})
       $("=India").click()
       $("//*[@for='checkbox2']").click()
       $(".btn-success").click()
       sucMsg = $(".alert-success").getText()
       chaiAssert(sucMsg).contains("Success")
     })
})