function solution(n) 
{
    var answer = 0;
    const str = n.toString();
    const arr = [...str];
    const arrN = arr.map(Number);
    arrN.forEach(num => {
        answer += num;
    })
    return answer;
}