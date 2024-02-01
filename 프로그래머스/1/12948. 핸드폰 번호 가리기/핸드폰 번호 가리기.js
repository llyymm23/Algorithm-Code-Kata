function solution(phone_number) {
    var answer = '';
    let arr = [...phone_number];
    for(let i=0;i<phone_number.length-4;i++){
        arr[i] = '*';
    }
    for(let j=0;j<phone_number.length;j++){
        answer += arr[j]
    }
    return answer;
}