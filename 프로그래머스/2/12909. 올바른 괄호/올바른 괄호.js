function solution(s){
    var answer = true;
    let n = 0
    
    const arr = s.split('');
    
    for(let i of arr){
        if(i=="("){
            n++;
        } else {
            n--;
            if(n<0){
                answer = false;
            }
        }
    }

    if(n!=0){
        answer = false
    }
    
    return answer;
}