function solution(n) {
    var answer = 0;
    const sqrt = Math.floor(Math.sqrt(n));
    if(n/sqrt === sqrt){
        answer = (sqrt+1)**2;
    } else {
        answer = -1
    }
    return answer;
}