function solution(arr, divisor) {
    var answer = [];
    const newArr = arr.sort((a,b) => a-b);
    for(let i=0;i<newArr.length;i++){
        if(newArr[i]%divisor === 0){
            answer.push(newArr[i]);
        }
    }
    if(answer.length === 0)
        answer = [-1];
    return answer;
}