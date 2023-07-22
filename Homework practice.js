


// prime number
function prime(){
    for(let n =2; n<=100; n=n+1){
    if(n===2) {
        console.log(n)}
    else if(n%2 !==0 && n<10){
        console.log(n)}
    else if (n>10 && n%3!==0 && n%5!==0 && n%7!==0 && n%9!==0 && n%2 !==0 ){
        console.log(n)
        }
    }  
}
prime()

// basic loop
const intergers = [1,2,3,4,5]
function basicLoop(){
    for(let a= 0; a<=intergers.length; a=a+1){
        console.log(intergers[a]*2)
    }
}
basicLoop()

// array search (incomplete)
const numbers=[1,2,5,9,11]
function arraySearch(){
    for(let n =0; n=numbers.length;n=n+1){
        if(numbers[n]%2===0){
            return n 
        }
    }
    if(xxxxxxxx){
        return -1
    }
}
console.log(arraySearch())
