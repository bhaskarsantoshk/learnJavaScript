let n = prompt("N");
let res="";
nextPrime: for(let i=2; i<= n; i++){
    for(var j=2; j<i; j++){
        if(i%j == 0){
            continue nextPrime;
        }
    }
}