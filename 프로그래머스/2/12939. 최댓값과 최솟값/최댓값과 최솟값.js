function solution(s) {
    const n = s.split(' ').map(Number).sort((a,b)=>a-b);
    var answer = '';
    answer = n[0].toString()+' '+n[n.length-1].toString();
    return answer;
}