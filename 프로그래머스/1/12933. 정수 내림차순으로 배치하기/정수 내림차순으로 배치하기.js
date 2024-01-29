function solution(n) {
    const arr = [...String(n)];
    const answer = arr.sort().reverse().join("");
    return Number(answer);
}