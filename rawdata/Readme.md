## Random generated data

[id, Username, Age, EmailAddress, CreatedAt] row를 가진 csv파일 생성

#### id
Auto-increment column  [Primary Key]

<br>

#### Username, EmailAddress
Username과 EmailAddress는random으로 reasonable한 결과를 만들기 힘들어, fakenamegenerator.com을 이용


<br>

#### Age
Age는 30을 mean으로 하고 5를 std deviation으로 가지는 가우시안 분포

```python
df = df.assign(Age=[int(random.gauss(30,5)) for x in range(df.shape[0])])
```

<br>

#### CreatedAt
CreatedAt은 인자로 기간을  받아 기간 내에서 무작위로 날짜와 시간 생성

gen_datetime 함수
```python
def gen_datetime(min_year=1900, max_year=datetime.now().year):
    # generate a datetime in format yyyy-mm-dd hh:mm:ss.000000
    start = datetime(min_year, 1, 1, 00, 00, 00)
    years = max_year - min_year + 1
    end = start + timedelta(days=365 * years)
    return start + (end - start) * random.random()
    
df = df.assign(CreatedAt=[gen_datetime(2010) for x in range(df.shape[0])])
```

