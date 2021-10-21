const chaiexpect = require("chai").expect

describe("UI Automations tests", ()=>{

    xit("chekcbox automations",()=>{
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        const chkelement = $$("input[type='checkbox']")

        chkelement[1].click()

        console.log(chkelement[1].isSelected())
        console.log(chkelement[2].isSelected())
        browser.saveScreenshot("checkbox.png")

        chaiexpect(chkelement[1].isSelected()).to.be.equal(true)
        $("#mousehover").scrollIntoView()
        $("#mousehover").moveTo()
        $("=Reload").click()

    })

    xit("Alert box practice",()=>{
        browser.url("http://demo.automationtesting.in/Alerts.html")
        //getting and click alert button
        const altbtn = $(".btn.btn-danger")
        altbtn.click()
        //check wether alert button is open or not
        console.log(browser.isAlertOpen())
        //click on ok alert button
        browser.acceptAlert()
        browser.pause(2000)

        //click on button with linktext locator
        const altcan = $('=Alert with OK & Cancel')
        altcan.click()

        //click on alert button
        $('.btn.btn-primary').click()
        browser.pause(2000)
        //click on cancle button
        browser.dismissAlert()
        browser.pause(2000)
        //asserting result wether we pressed cancle button or not
        chaiexpect($('#demo').getText()).to.be.equal('You Pressed Cancel')
    })
})