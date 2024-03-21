function solution(t, p) {
    var answer = 0;
    let arr = [];
    for(let i=0;i<=t.length-p.length;i++){
        arr.push(t.substr(i,p.length));
    }
    for(let j=0;j<arr.length;j++){
        if(+arr[j]<=+p){
            answer++;
        }
    }
    return answer;
}