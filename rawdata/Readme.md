## Random generated data

[id, Username, Age, EmailAddress, CreatedAt] row를 가진 csv파일 생성

df = df.assign(CreatedAt=[gen_datetime(2010) for x in range(df.shape[0])])
df = df.assign(Age=[int(random.gauss(30,5)) for x in range(df.shape[0])])

Username과 EmailAddress는random으로 reasonable한 결과를 만들기 힘들어, fakenamegenerator.com을 이용

Age는 30을 mean으로 하고 5를 std deviation으로 가지는 가우시안 분포

CreatedAt은 인자로 기간을  받아 기간 내에서 무작위로 날짜와 시간 생성
