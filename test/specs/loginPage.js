const loginRSA = require("../../pages/pageObj")
const chaiAssert = require("chai").expect
describe("Login Page for RSA", ()=> {

    xit("Page Object Class Data", ()=>{
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
       expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")

        loginRSA.loginMethod("Shivam","123456")
        loginRSA.signBtn.click()

        //console.log(loginRSA.usernm, loginRSA.pass)
        console.log(loginRSA.alrt.getText() + "this is message from login page")
        browser.waitUntil(()=>
            loginRSA.signBtn.getAttribute('value') === 'Sign In', { timeout:4000, timeoutMsg: 'Erro msg did not apper'} )

        console.log(loginRSA.alrt.getText() + "After wait method, this is message from login page")
        
        console.log(loginRSA.msg.getText() + "this is login information message")
        browser.pause(3000)

        loginRSA.loginMethod("rahulshettyacademy","learning")
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("Proto")

    })
})