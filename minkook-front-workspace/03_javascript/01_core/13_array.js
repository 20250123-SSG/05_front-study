 /*
  ## Array ##
  1. 다수의 데이터를 담을 수 있음 
  2. 크기에 제약없고, 타입에 제약없음
  3. 타입은 object 
  4. 형식 : [element, element, ..]
  5. 선언 방법 
      1) 변수 = new Array([크기]);
      2) 변수 = new Array(element, element, ..);
      3) 변수 = [];
      4) 변수 = [element, element, ..];
  6. 배열 내의 element 접근 방식
      배열[index]
  7. 후행쉼표를 지원함

  ## 변수 선언시 별도의 자료형 지정이 없기 때문에 어떤자료형이든 다 담을 수 있음 
        크기에 제약도 없기 때문에 자바에서의 ArrayList 컬렉션과 유사함
*/




/*
  ## 배열과 for문 ##
  1. for in 문
     1) 배열의 인덱스를 자동으로 가져옴
     2) 형식
        for(인덱스 in 배열) {
          본문
        }

  2. array에서의 for of 문
     1) 배열의 요소를 자동으로 가져옴
     2) 형식
        for(요소 of 배열) {
          본문
        }
*/




/*
  ## Array 탐색 관련 메소드 ##

  1. Array.prototype.indexOf(element[, fromIndex])
      → 배열에 해당 요소가 위치해있는 첫번째 인덱스 반환 
      → 요소를 찾지 못하면 -1 반환 
      → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0

  2. Array.prototype.lastIndexOf(element[, fromIndex])
      → 배열에 해당 요소가 위치해있는 마지막번째 인덱스 반환 
      → 요소를 찾지 못하면 -1 반환 
      → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0
  
  3. Array.prototype.includes(element[, fromIndex])
      → 배열에 해당 요소가 존재하면 true, 존재하지 않으면 false 반환 
      → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0
  
*/






/*
      
  ## Array 동적으로 요소 추가/삭제 관련 메소드 ##

  1. Array.prototype.push(element1[, element2[, ...]])
     → 배열의 끝에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환

  2. Array.prototype.pop()
     → 배열의 마지막 요소를 제거하고 그 요소를 반환
     → 배열이 비어 있으면 undefined 반환
  
  3. Array.prototype.unshift(element1[, element2[, ...]])
     → 배열의 앞에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환

  4. Array.prototype.shift()
     → 배열의 첫번째 요소를 제거하고 그 요소를 반환
     → 배열이 비어 있으면 undefined 반환

  5. Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])
     → 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경함
     → start : 배열의 변경을 시작할 인덱스
     → 옵션 deleteCount : 배열에서 제거할 요소의 개수
       1) 생략하면 start 부터 모든 요소를 제거
       2) 0 이하이면 아무 요소도 제거하지 않음
     → 옵션 item1, item2, ... : 배열에 추가할 요소들

*/





/*

  ## Array 기타 메소드 ##
  
  1. Array.prototype.concat(items1[, items2[, ...]])
     → 배열의 요소들을 하나로 합친 새로운 배열 반환 

  2. Array.prototype.slice(start, end)
     → 배열의 start 인덱스 이상 end 인덱스 미만 범위의 요소들을 새로운 배열로 복사해서 반환 

  3. Array.prototype.reverse()
     → 배열 내의 요소들을 역순으로 변경하여 반환 

  4. Array.prototype.toString() 
     → 배열 내의 요소들을 콤마(,)로 연결한 문자열 반환 

  5. Array.prototype.join([separator])
     → 배열의 각 요소를 separator 로 연결한 하나의 문자열을 반환
     → separator 생략 시 콤마(,)로 연결
  
  6. Array.prototype.entries()
     → 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새 배열 반복자(Iterator) 객체를 반환

*/






/*

  ## Array 고차 함수 (콜백함수를 인자로 전달받는 함수) ##

  1. Array.prototype.sort([callbackFn(element1, element2)])
     → callbackFn에 의해 배열 내의 요소들을 정렬시켜 반환 
     → callbackFn 생략시 기본 오름차순으로 정렬 (문자열 요소일 경우 사전등재순으로 정렬)
     → callbackFn
       1) 반환값 : number (양수 반환시 비교되는 두 요소의 순서가 변경됨)
       2) 매개변수 
          (1) element1 : compare할 비교 요소1
          (2) element2 : compare할 비교 요소2
       즉, 오름차순 정렬시키고자 할 경우 => element1가 더 클 경우 양수 반환하도록 
           내림차순 정렬시키고자 할 경우 => element2가 더 클 경우 양수 반환하도록 
        

  2. Array.prototype.forEach(callbackFn(element[, index[, array]])[, thisArg])
     → 각 배열 요소에 대해 제공한 callbackFn 함수를 한 번씩 실행함
     → callbackFn
       1) 반환값 : 없음(undefined)
       2) 매개변수
         (1) element : 배열에서 처리 중인 현재 요소
         (2) index   : 배열에서 처리 중인 현재 요소의 인덱스
         (3) array   : forEach() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값

  3. Array.prototype.map(callbackFn(currentValue[, index[, array]])[, thisArg])
     → 제공된 callbackFn 함수에 의해 반환된 요소들을 모은 새로운 배열을 반환함
     → callbackFn
       1) 반환값 : 배열의 각 요소를 callbackFn 내부에서 처리한 값
       2) 매개변수
         (1) currentValue : 처리할 현재 요소
         (2) index        : 처리할 현재 요소의 인덱스
         (3) array        : map() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값

  4. Array.prototype.filter(callbackFn(element[, index[, array]])[, thisArg])
     → 제공된 callbackFn 함수에 의해 구현된 테스트를 통과한 요소들만 모은 새로운 배열을 반환함
     → callbackFn
       1) 반환값 : true 또는 false
       2) 매개변수
         (1) element : 배열에서 처리 중인 현재 요소
         (2) index   : 배열에서 처리 중인 현재 요소의 인덱스
         (3) array   : filter() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값
  
*/

const arr3 = new Array(10);
console.log(arr3); //10개의 빈 배열이 생성됨

const fruits = ['banana','apple','kiwi'];

for(let i  = 0; i<fruits.length; i++){
    console.log(`인덱스: ${i}, 요소:${fruits[i]}`);
}

console.log('------------------------------');

for(let i  in fruits){
    console.log(`인덱스: ${i}, 요소:${fruits[i]}`);
}

const cities = ['seoul','roma','newyork','sidney'];

for(let city of cities){
    console.log(`요소: ${city}`);
}

const foodList = ['물회','삼계탕','냉면','물회','수박'];

console.log(foodList.indexOf('물회'));
console.log(foodList.indexOf('물회',1));
console.log(foodList.indexOf('삼겹살'));

console.log(foodList.lastIndexOf('물회'));


const months = ['Jan','Mar','Apr','Apr','Jun','Jun'];

console.log(months.pop());
console.log(months); 

console.log(months.push('Jul'));
console.log(months);

months.shift(); 
months.unshift('Feb'); //6
months.unshift('Jan'); //7
console.log(months);

months.splice(4,1,'May');

console.log(months);


const idol1 = ['아이브','오마이걸'];
const idol2 = ['에스파','트와이스'];
const idol3 = ['블랙핑크','레드벨벳'];

idol1.concat(idol2,idol3); //concat은 원본 배열을 변경하지 않음
console.log(idol1); 



const datas = [true,1,'text',{},{}];

datas.map(item =>  typeof item)
.forEach((item) => console.log(item));

//종합
const nums = [12,5,90,45,1,18,2,19];

nums.filter(num => num % 2 == 0)
    .map(num => num * 2)
    .sort((a,b) => a - b)
    .forEach(num => console.log(num));

/*
  실습. getTotal() 함수 구현하기
  1. 기능
     인자로 전달된 배열에 포함된 요소들 중 숫자만 더해서 반환하는 함수
     단, 소수 이하 자릿수는 모두 버린 뒤 더하기를 수행함
         숫자로 이루어진 문자열도 덧셈 연산 진행할 것
  2. 인자
     배열
  3. 반환
     배열에 포함된 숫자만 모두 더한 값
   ex) const array = ['hello', 'world', 10, 20, 30.23, '40', { cpu: 'i7' }, true, false, () => {}];
       console.log(getTotal(array));  // 100 출력
*/ 
const getTotal = (arr) => {
   let total = 0;
   arr.forEach(item => {
       if(!Number.isNaN(item/1) && typeof item != 'boolean'){
           //console.log(item);
           total += Number.parseInt(item);
       }
   });
   return total;
};

const array = ['hello','world',10,20,30.23,'40',{cpu:'i7'},true,false,() => {}];
console.log(getTotal(array));