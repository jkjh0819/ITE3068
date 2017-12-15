from flask import Flask, request
import memcache
import MySQLdb
import redis
import datetime, time, sys, random, json

app = Flask(__name__)

db = MySQLdb.Connect(host='127.0.0.1', port=3306, user='team6', passwd='team6', db='team6')
cursor = db.cursor()
nbase = redis.StrictRedis(port=6000)
arcus = memcache.Client(["127.0.0.1:11211","127.0.0.1:11212"])

MAX_RANGE=3000

@app.route('/')
def main():
    return 'team6'

@app.route('/init')
def init_():
    for i in range(30000):
        query = 'select * from user where id=\"%s\"'%(i+1)
        cursor.execute(query)
        res = cursor.fetchone()
        nbase.set(i+1,res)
    return "IMPORT SUCCEED"

@app.route('/mysql')
def mysql_():
    target = str(random.randint(0,MAX_RANGE)+1)
    query = 'select * from user where id=\"%s\"'%target
    cursor.execute(query)
    res = cursor.fetchone()
    return str(res)

@app.route('/arcus')
def arcus_():
    target = str(random.randint(0,MAX_RANGE)+1)
    res = arcus.get(target)
    if res:
        return 'Cache Hit: '+str(res)
    else:
        query = 'select * from user where id=\"%s\"'%target
        cursor.execute(query)
        res = cursor.fetchone()
        arcus.set(str(target),res)
        return 'Cache Miss: '+str(res)

@app.route('/nbase')
def nbase_():
    target = str(random.randint(0,MAX_RANGE)+1)
    res = nbase.get(target)
    if res:
        return 'Cache Hit: '+str(res)
    else:
        query = 'select * from user where id=\"%s\"'%target
        cursor.execute(query)
        res = cursor.fetchone()
        nbase.set(target,res)
        return 'Cache Miss: '+str(res)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
