function solution(n) {
    var answer = 0;
    const a = n.toString(3).split("").reverse().join("");
    answer = parseInt(a,3);
    return answer;
}