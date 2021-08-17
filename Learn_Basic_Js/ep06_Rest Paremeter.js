// Rest Paremeter

summation = (x,y) =>{
    return x+y
}
summation = (...numberArr)=>{
    let total = 0 
    for(let number of numberArr) total+=number
    return total
}

console.log(summation(50,100));
console.log(summation(50,100,10));
console.log(summation(50,100,10,555));

