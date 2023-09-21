# Algorithm-Binary-Research
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
1. 매우 넓은(억 단위 이상) 탐색 범위에서 최적의 해를 찾아야 하는 경우
2. 데이터를 정렬한 뒤에 다수의 쿼리를 날려야 하는 경우




