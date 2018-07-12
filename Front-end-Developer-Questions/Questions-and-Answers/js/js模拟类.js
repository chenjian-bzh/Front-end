var Animal = (function(){
    var home = 'animal'

    function getHome(name){
        return home + ',' + name
    }

    function _person(name , age){
        if(this instanceof _person){
            this.name = name
            this.age = age 
            this.sayHome = getHome
        }else{
            return new _person(name , age)
        }
    }

    _person.address = 'beijing'
    _person.eat = function eat(){}

    return _person
})()