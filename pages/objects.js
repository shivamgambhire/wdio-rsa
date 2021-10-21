class blazemeter {

    get blazeli(){
        return $('.list-nav-links')
    }

    get blazelis(){
        return this.blazeli.$$('li');
    }

    get blazelitext(){
        return this.blazelis.filter(element=> {console.log(element.getText())});
    }
}

module.exports = new blazemeter();