function solution(arr1, arr2) {
    var answer = [[]];
    for(let i=0;i<arr1.length;i++){
        let sum = [];
        for(let j=0;j<arr1[0].length;j++){
            sum[j]=arr1[i][j]+arr2[i][j]; 
        }
        answer[i] = sum; 
    }
    return answer;
}