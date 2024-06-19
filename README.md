# -ToyProject-BookingService

## 1. project description

예약, 수정, 취소, 예약 조회를 구현했다. CRUD.

NESTJS의 기초를 공부하는 것이기 때문에 프론트엔드는 개발하지 않고 백엔드만 개발하였다.

## 2. Tech stack

typescript, javascript, NESTJS

PostgreSQL

## 3. Errors
발생한 에러들을 어떻게 해결했는지 적어본다.
### 1. QueryFailedError: there's no relation to 'user'
특정 데이터베이스와 릴레이션이 없다는 의미이다. 이 문제는 Repository의 insert()를 사용하니 생기는 문제였다. Repository의 save()를 사용하니 문제가 해결되었다. 

* insert()와 save()의 차이가 뭘까?
* 
