# Algorithm-Binary-Search
이진 탐색 알고리즘 

### 정의 
: 정렬되어 있는 리스트에서 **탐색 범위를 절반씩 좁혀가며 데이터를 탐색**하는 알고리즘

이진 탐색 시간복잡도: `O(logN)`

<br/>

### 이진 탐색 동작 방식 
** 기본적으로 정렬되어 있는 상태에서 사용된다. 


이진 탐색을 수행할 때는 `시작점(left)`과 `끝점(end)`를 기준으로 **탐색 범위를 명시**한다. 
1. 이진 탐색 시작시, 범위 설정하기 및 찾고자하는 값 **정의**
   - `left` = arr[0]
   - `mid` = arr[parseInt(left+right) / 2)]
   - `right` = arr[arr.length-1]
   - `target` = 찾고자하는 값

<br/>
     
2. mid값과 target을 비교해서 target의 위치를 바탕으로 **left와 right값 재설정**
   - `target`이 mid값 보다 **작을 때**, left는 그대로 right == arr[mid-1]
   - `target`이 mid값 보다 **클 때**, left == arr[mid+1], rifht는 그대로
   - `target`이 mid값과 **같을 때**, target 위치 찾음: return mid(위치 동일하므로 값도 동일)

<br/>
  
3. target이 인덱스를 찾을 때까지 2번 **반복**

<br/>

### 이진 탐색 사용하는 경우
1. **매우 넓은(억 단위 이상) 탐색 범위**에서 최적의 해를 찾아야 하는 경우
2. 데이터를 정렬한 뒤에 다수의 쿼리를 날려야 하는 경우

<br/>

# Algorithm-Binary-Search-in-Sorted-Array
정렬된 배열에서 특정 원소의 개수 구하는 이진 탐색 알고리즘


### 정의 
: 정렬된 배열에서 값이 **특정 범위에 해당하는 원소의 개수를 계산**할 때 사용하는 알고리즘 


`lowerBound()`함수와 `upperBound()`함수를 사용해 `countByRange()`함수를 만들어 해결한다.

<br/>

### 하한선 함수와 상한선 함수
- `lowerBound(arr, x)` : 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 **가장 왼쪽 인덱스를 반환**
- `upperBound(arr, x)` : 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 **가장 오른쪽 인덱스를 반환**
=> **특정 범위에 속하는 원소의 개수** = upperBound(arr,x) - lowerBound(arr,x)

<br/>

# Algorithm-Parametric-Search
파라메트릭 서치 알고리즘


### 정의 
: 이진 탐색 조건을 사용해 **특정한 조건을 만족**하는 가장 알맞은 값을 빠르게 찾는 **최적화 문제**(최대값 최소값)를 해결하는 알고리즘

<br/>

### 파라메트릭 서치에서 이진 탐색 조건
변경할(최적화할) 값 x에 대하여 f(x)가 단조 증가 혹은 단조 감소하는 함수인 경우에 사용할 수 있다. 


