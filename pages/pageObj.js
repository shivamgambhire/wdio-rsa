class LoginPage{

    get usernm(){
        return $("#username")
    }

    get pass(){
        return $("#password")
    }

    get signBtn(){
        return $("#signInBtn")
    }

    get alrt(){
        return $(".alert-danger")
    }

    get msg(){
        return $("p")
    }

    loginMethod(usernm,pass){
        this.usernm.setValue(usernm)
        this.pass.setValue(pass)
        this.signBtn.click()
    }

}

module.exports = new LoginPage()