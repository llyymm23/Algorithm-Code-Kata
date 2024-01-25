function solution(n) {
    var answer = [];
    const str = n.toString();
    const arr = [...str];
    answer = arr.map(Number).reverse();
    return answer;
}