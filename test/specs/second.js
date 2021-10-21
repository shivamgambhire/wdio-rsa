const expectchai = require("chai").expect

describe("navigating to next page",()=>{

    xit("validate and navigate",()=>{

        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        
        //locate username and password
        const user = $("#username").setValue("rahulshettyacademy")
        const pass = $("#password").setValue("learning")

        //click on submit button
        $("#signInBtn").click()
 

        //const title = browser.getTitle
        // browser.pause(3000)
        
        //next page finding checkout button
        const chkbtn = $("*=Checkout")

        //waiting until button is visible
        chkbtn.waitForExist()

        //check wether button is clickable or not
        expect(chkbtn).toBeClickable()

        //asserting that next page title is matching 
        expect(browser).toHaveTitleContaining("ProtoCommerce")
             
    });

    xit("UI Controlls",()=>{
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        
        //locate username and password
        const user = $("#username").setValue("rahulshettyacademy")
        const pass = $("#password").setValue("learning")

        //we use $$ if we locators are multiple and store all found elements in one const
        const rdo = $$(".customradio")[1]

        //under that const we finding respected element
        rdo.$(".radiotextsty").click()
        
        //browser.pause(3000)

        //wait for model to be displayed
        $(".modal-content").waitForDisplayed()
        $("#okayBtn").click()                       //click on okay button
        $(".customradio").click()                   //click on first radio button

        //here we use negation of checking ny prviding not to expect condition
        expect($(".modal-content")).not.toBeDisplayed()    
   
        //dropdown element
       const select = $("select.form-control")
       select.selectByIndex(1)
       browser.pause(2000)
       select.selectByVisibleText("Consultant")
       //browser.pause(2000)

       //this is chai library assersion (using expectchai const)
       expectchai(select.getValue()).to.be.equal("consult")
    });
});