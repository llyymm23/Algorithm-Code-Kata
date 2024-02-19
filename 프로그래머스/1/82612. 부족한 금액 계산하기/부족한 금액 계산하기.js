function solution(price, money, count) {
    var answer = -1;
    answer = price * count * (count+1) / 2 - money;
    answer >= 0 ? answer : answer = 0;
    return answer;
}