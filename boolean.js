function greaterThan100(number) {
    if (number > 100) {
        console.log("greater than 100")
    } else{
        console.log("not greater than 100")
    }
}

greaterThan100(98)

function checkGrade(score) {
    if (score >= 90) {
        return("A")
    }else if (score>=80){
        return("B")
    }
    else if (score>=70){
        return("C")
    }
    else if (score>=60){
        return("D")
    }
    else{
        return("F")
    }
} 
console.log(checkGrade(89))
