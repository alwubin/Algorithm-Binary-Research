//재귀 함수를 사용한 이진 탐색 
function binarySearch(arr, target, start, end) {
  if (start > end) return -1;
  let mid = parseInt((start+end) / 2); 
  
  //target 값을 찾은 경우 mid 인덱스 반환
  if (arr[mid] == target) return mid;
    
  //mid보다 target이 작은 경우 왼쪽 확인 
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid-1);
    
  //mid보다 target이 큰 경우 오른쪽 확인 
  else return binarySearch(arr, target, mid+1, end);
}


//반복문을 사용한 이진 탐색 
function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start+end)/2);

    //찾은 경우 mid 인덱스 반환 
    if (arr[mid] == target) return mid;

    //mid 값보다 target 값이 작은 경우 왼쪽 확인
    else if (arr[mid] > target) end = mid -1;

    //mid 값보다 target 값이 큰 경우 오른쪽 확인 
    else start = mid + 1;
  }
  return -1;
}


let arr = [1,2,3,4,5,6,7,8,9];
let n = 9; //원소의 개수 
let target = 7; // 찾고자 하는 값

let result = binarySearch(arr, target, 0, n-1); //이진 탐색 
console.log(result);
