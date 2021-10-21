const chaiexpect = require("chai").expect

describe("UI Automations tests", ()=>{

    xit("chekcbox automations",()=>{
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        //button to sort
        const sortBtn = $("//*[@role='columnheader'][1]")
        sortBtn.click()
        const veggisArr = $$("tr td:nth-child(1)")
        
        
        const veggiNames = veggisArr.map(veggi=>veggi.getText())
        console.log(veggiNames)

        
        //browser.pause(3000)
        const veggisortedNames = $$("tr td:nth-child(1)").map(veggi=>veggi.getText())

        const resultveggi = veggisortedNames.sort()

        chaiexpect(resultveggi).to.be.equal(veggisortedNames)
    })

    xit("automatic search bar",()=>{
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        const srcBox = $("//input[@id='search-field']")
        srcBox.setValue("tomato")

        const tblText = $$("//tbody/tr/td[1]")
        expect(tblText).toBeElementsArrayOfSize({eq:1})
        const expText= tblText[0].getText()
        browser.pause(3000)
        chaiexpect(expText).to.be.equal('Tomato')

        

    })
})