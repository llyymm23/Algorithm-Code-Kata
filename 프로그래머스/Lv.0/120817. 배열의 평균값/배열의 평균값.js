function solution(numbers) {
    var answer = 0;
    let count = 0;
    for(let i=0;i<numbers.length;i++){
        answer += numbers[i];
        count++;
    }
    answer = answer/count;
    return answer;
}