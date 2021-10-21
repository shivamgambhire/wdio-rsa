describe("this is ecommerce test suite",()=>{

    //xit means this blok of it() is skipped by webdriverio
    xit("Login check page navigation", ()=>{
        x = 10
        try{
        //navigate to url
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");

       // console.log(browser.getTitle());
       // browser.pause(3000);
       // expect(browser).toHaveTitle("Google");

       //identifing the locators
        const user = $("#username")
        const pass = $("//*[@type='password']")

        //giving input to username and password
        user.setValue("shivamgambhire")
        pass.setValue("123456789")

        //sign in button locator
        const sendbtn = $("#signInBtn")
        sendbtn.click()
        
        //pause the execution
        browser.pause(2000)
   
        //geeting alert message from 
        const msg = $(".alert-danger")
        const alt_Msg = msg.getText()
        
        console.log(alt_Msg)

        browser.waitUntil(()=> sendbtn.getAttribute("value") === 'Sign In', {
            timeout: 3000, timeoutMsg: 'the alert message is not found'
        })
              
        console.log($(".alert-danger").getText()) + "this is after execution"
    console.log("this is try block x: "+x)
    }
    catch(error){
        x = 10
        console.log(error)
        console.log("This is catch value x "+x)
    }
    });
});