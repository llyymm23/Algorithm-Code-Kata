function solution(arr) {
    let num = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<num){
            num = arr[i];
        }
    }
    for(let j=0;j<arr.length;j++){
        if(arr[j] === num){
            arr.splice(j,1);
            j--;
        }
    }
    if(arr.length === 0){
        arr.push(-1);
    }
    return arr;
}