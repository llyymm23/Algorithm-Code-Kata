function solution(n) {
    var answer = "";
    const arr = [];
    for(let i=0;i<n;i++){
        i % 2 === 0 ? arr.push("수"):arr.push("박");
    }
    answer = arr.join("");
    return answer;
}