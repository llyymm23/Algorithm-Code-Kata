function solution(x) {
    var answer = true;
    const arr = [...String(x)].map(Number);
    let sum = 0;
    arr.forEach(num => sum+=num);
    if(x%sum !== 0){
        answer = false;
    }
    return answer;
}