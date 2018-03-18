# 현재까지 진행 상황

- docker-compose-way내에 있는 docker-compose.yml에 이미지를 지정 및 링크하여 사용

- adminer, mysql, ngrinder, nbase-ARC 이미지가 다운받아져서 연결되어 있는 상태

- mysql, ngrinder, adminer는 이전 docker hub에 존재했고, nbase-arc는 새로 빌드하여 docker hub에 업로드 해놓음. nbase-arc는 jkjh0819/ite3068:nbase-arc로 존재

- arcus docker file 제작까지 완료, 빌드만 하면 됨.

# 실행방법

0. 각각 사용될 이미지를 미리 docker hub에 업로드 해두어야 함. 

1. `docker-compose up -d --remove-orphans` 로 docker-compose.yml 을 빌드

2. `http://localhost:8080/?server=db&username=team6&db=team6&table=user` 를 통해 mysql에 접근할 수 있고(adminer 이용), 데이터 제너레이터로 샘플 데이터를 집어 넣을 수 있음. 다만, 실행시 이전 데이터에 의한 종속성을 날리기 위해 DB를 초기화하므로, 데이터 제너레이터는 SQL file을 생성함.

3. nGrinder는 `http://localhost:8999` 로 접근 가능, 아이디, 비밀번호는 default인 admin/admin으로 설정되어 있음. 

# 이슈

- Hubblemon 레포 내에 있는 Dockerfile로 이미지 빌드가 안됨. 관련 사항 다른 팀과 공유 -> 다른 팀에서 풀 리퀘를 날리고 머지됨..ㅠㅠ, 장고 버전 업데이트에 따른 requirements.txt에 1.10 버전 이상을 다운받도록 되어있어 이 부분이 수정됨.

# 이후 일정

12/6 : Arcus 도커 파일 빌드 및 업로드, docker-compose에 내용 추가, 테스트용 어플리케이션 개발하여 Dockerfile로 빌드하도록 함.

12/8 : Arcus 미사용 / 사용 성능 nGrinder 스트레스 테스트를 통해 비교, 더불어 연결된 Hubblemon으로 모니터링

12/10 : nbase-ARC를 사용하여 샘플 프로젝트 구현 후 다른 저장 플랫폼과 성능비교

12/12 : 멀티노드로 구성하여 단일노드일 때와 성능비교

12/14 : 보고서 작성(위키)

