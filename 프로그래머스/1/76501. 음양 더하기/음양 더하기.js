function solution(absolutes, signs) {
    let p=0;
    let n=0;
    for(let i=0;i<absolutes.length;i++){
        if(signs[i] === true){
            p += absolutes[i]
        } else {
            n += absolutes[i]
        }
    }
    return p-n;
}