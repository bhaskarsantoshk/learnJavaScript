function pow(x, n){
    let power=1;
    for(var i=1; i<=n ; i++){
        power= power*x;
    }
    return power;
}