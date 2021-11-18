describe("hello world program", ()=>{
    it("print hello world", ()=>{
        console.log("hello world")
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
      //  pageTitle = browser.getTitle()
        console.log(browser.getTitle())
       expect(browser).toHaveTitleContaining('LoginPage')
    });
});