docker-compose-way내에 있는 docker-compose.yml에 이미지를 지정하면 알아서 다운로드 받고 연결해 준다고 함.

현재 mysql, mysql 도우미인 adminer, redis 이미지가 다운받아져서 연결되어 있는 상태

12월 1일 중으로 arcus, ngrinder, hubblemon, nbase-arc 이미지들도 찾아서 연결하고 어플리케이션 실행방법 구상해서 업데이트 해줄게요.

실행방법은 docker-compose-way 안에서 `docker-compose up -d --remove-orphans` 를 실행하면 container가 3개 생성돼요.

`http://localhost:8080/?server=db&username=team6&db=team6&table=user` 로 접근하면 gui로 우리가 다룰 user table이 나옵니다(description도 함께). 좌측에 있는 import에 sql 쿼리 뭉텅이 파일로 임포트하면 알아서 실행시켜서 데이터 넣어줄거 같아요. SQL command에서 테스트도 가능!

데이터 만드는 랜덤제너레이터는 결과적으로 import에 들어갈 SQL 쿼리문들 모여있는 파일이면 될거 같아요. 알아서 넣어주겠지!

arcus 캐시 데이터는 key:value니까 내생각에는 id:name으로 집어넣으면 될 것 같아요. 명부같은거 조회할 때 쓴다하자ㅎㅎ


# 요약
12월 1일까지 arcus, nGrinder, Hubblemon, nBase-ARC, 우리가 만들 application image를 연동하는 docker-compose.yml 작성, 즉 이전에 선하가 진행했던 것에 이어서 환경 세팅(지혜)

시간 되는 대로 mysql 에 있는 team6.user에 들어갈 데이터 SQL파일로 뽑아내는 제너레이터 만들기(선하)

추가적으로 할 것 있으면 issue나 README.md에 넣어주세요.