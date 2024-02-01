function solution(numbers) {
    var answer = 0;
    let sum = 0;
    numbers.forEach(num => sum+=num);
    answer = 45 - sum;
    return answer;
}