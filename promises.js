
function fun1(){
    return new Promise(function(resolved){
    setTimeout(function(){
           resolved();
    },1000)
})
}
function fun2(){
    return new Promise(function(resolved){
    setTimeout(function(){
           resolved();
    },1000)
})
}
function fun3(){
    return new Promise(function(resolved){
    setTimeout(function(){
           resolved();
    },1000)
})
}
fun1().then(function(){
    console.log("Function1 resolved")
    fun2().then(function(){
        console.log("Function2 resolved")
         fun3().then(function(){
                  console.log("Function3 resolved")
         })

    })

})
