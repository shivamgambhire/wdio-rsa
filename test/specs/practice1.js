const chaiExpect = require('chai').expect
describe("hello world program", ()=>{
    it("print hello world", function() {
      this.retries(2)
        console.log("hello world")
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
      //  pageTitle = browser.getTitle()
        console.log(browser.getTitle())
       expect(browser).toHaveTitleContaining('signup')
      // blinkingText = $('.blinkingText').getText()
       //console.log(blinkingText)
      //chaiExpect(blinkingText).to.be.equal('Free Access to InterviewQues/ResumeAssistance/Material')
    });
});