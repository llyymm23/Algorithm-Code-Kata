function solution(s) {
    var answer = '';
    let arr = s.split(" ");
    for(let i=0;i<arr.length;i++){
        const w = arr[i].split("");
        for(let j=0;j<w.length;j++){  
            if(j%2===0){
                w[j] = w[j].toUpperCase();
            } else {
                w[j] = w[j].toLowerCase();
            }
        }
        arr[i] = w.join("");
    }
    answer = arr.join(" ");
    return answer;
}