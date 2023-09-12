function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() { 
    return function named () {
        console.log("Fuck this")
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Fuck this again")
    }
}