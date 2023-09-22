let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = 0; //어떠한 것에 대한 개수
let m = 0; //총 합(?) 예산, 길이, ..등 
let arr = []; //어떠한 것에 대한 값이 n만큼 들어가있음, 근데 값 넣을 시 무조건 sort로 정렬해주어야 함

//이진 탐색을 위한 시작점과 끝점 설정하기
let start = 1; //보통 0 또는 1부터 시작함
let end = arr[n-1]; //보통 정렬된 배열의 가장 끝값으로 설정함 
//target = 문제에서 ~~ 중 최댓값 또는 최소값이라고 명시되어 있음 머릿속에 박아넣기

let result = 0; //결과값 = target값
while (start <= end) { //이진 탐색 수행 반복문
  let mid = parseInt((start+end)/2); //현재의 중간점 (상한액)
  let total = 0; //보통 조건에 합이 나와있을 때 비교하기 위한 총 합(?)
  for (x of arr) {
    total += Math.min(mid,x); //Math.max()도 될 수 있음 조건에 따라 다름
  }
  if (total <= m){
    result = mid; //최댓값 또는 최솟값이기 때문에 기록하고자 하는 곳에 작성하기
	  start = mid + 1;
  } //총 합이 조건에 있을 때 현재 총합과 조건에 명시된 총합 비교해서 start or end 수정
}
console.log(result); 
