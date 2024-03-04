function solution(n, m) {
    var answer = [];
    const min = Math.min(n,m);
    const max = Math.max(n,m);
    for(let i=min;i>0;i--){
        if((min%i===0)&&(max%i===0)){
            answer.push(i);
            break;
        }
    }
    answer.push(n*m/answer[0]);
    return answer;
}