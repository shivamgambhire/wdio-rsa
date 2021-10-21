describe("UI Elements", ()=>{
    xit("windows handling", ()=>{

        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")

        $("[onclick*='openWindow']").click()

        const windows = browser.getWindowHandles()
        browser.switchToWindow(windows[1])
        console.log(browser.getTitle())

        browser.switchToWindow(windows[0])
        console.log(browser.getTitle())
        

        browser.newWindow("http://www.qaclickacademy.com/")
        browser.pause(2000)
        const pageTitle = browser.getTitle()
        browser.closeWindow()
        browser.pause(2000)
        browser.switchWindow("https://www.rahulshettyacademy.com/AutomationPractice/")

        $("[name='enter-name']").setValue(pageTitle)
    
        browser.pause(2000)
    })

})