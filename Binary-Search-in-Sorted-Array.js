//lowerBound() 하한선 함수
function lowerBound(arr, target, start, end) {
  while (start < end) { //start가 end보다 작을 때에만 반복
		let mid = parseInt((start+end)/2);
		if (arr[mid] >= target) end = mid; //최대한 왼쪽으로 이동하기
		else start = mid + 1;
	}
	return end; //탐색 범위가 한 개일 때 값 리턴, 가장 왼쪽의 값을 가리켰을 때 리턴 
}

//upperBound() 상한선 함수
function upperBound(arr, target, start, end) {
	while (start < end) {
		let mid = parseInt((start + end)/2);
		if (arr[mid] > target) end = mid;
		else start = mid + 1; //최대한 오른쪽으로 이동하기
	}
	return end; //탐색 범위가 한 개일 때 값 리턴, 가장 오른쪽의 값을 가리켰을 때 리턴 
}

//countByRange() 특정 범위에 속하는 원소의 개수 구하는 함수
function countByRange(arr, leftValue, rightValue) {
	//lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
	let rightIndex = upperBound(arr, rightValue, 0, arr.length);
	let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
	return rightIndeex - leftIndex;
}

//배열 선언 
let arr = [1,2,3,4,5,6,7,7,8,8,8,9];
//값이 7인 데이터 개수 출력 
console.log(countByRange(arr, 7, 7));
//값이 [-1,3] 범위에 있는 데이터 개수 출력
console.log(countByRange(arr, -1, 3));
