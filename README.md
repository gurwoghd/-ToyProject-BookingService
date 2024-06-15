# -ToyProject-BookingService

## 1. project description

고객의 우선순위 (priority)에 따라 예약을 하고 취소하는 서비스이다.
<br> CRUD로 개발한다. <br> <br>

고객의 priority는 true와 false가 있다. true의 우선순위가 false보다 더 높다.
<br>

true인 고객이 false보다 앞에 예약이 잡히고 serve를 하면 우선순위가 더 높은 고객이 서빙을 받는다.
<br>
만약 우선순위가 같은 고객의 경우, 예약 순서가 우선순위가 된다.
<br>

자료에 추가되는 순서는 다음과 같다.

1. 고객의 priority
2. 예약 순서

## 2. Tech stack

React

typescript, javascript, NESTJS

mongoDB
