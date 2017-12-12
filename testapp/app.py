from flask import Flask, request
import memcache
import MySQLdb
import redis
import datetime, time, sys, random, json

app = Flask(__name__)

db = MySQLdb.Connect(host='127.0.0.1', port=3306, user='team6', passwd='team6', db='team6')
cursor = db.cursor()
nbase = redis.StrictRedis(port=6000)
arcus = memcache.Client(["127.0.0.1:11211"])


@app.route('/')
def main():
    return 'team6'

@app.route('/mysql', methods=['GET'])
def mysql_():
    query = 'select * from user where id=\"%s\"'%request.args.get('id')
    cursor.execute(query)
    res = cursor.fetchone()
    return str(res)

@app.route('/arcus', methods=['GET'])
def arcus_():
    target = request.args.get('id')
    res = arcus.get(target)
    if res:
        return 'Cache Hit: '+str(res)
    else:
        query = 'select * from user where id=\"%s\"'%request.args.get('id')
        cursor.execute(query)
        res = cursor.fetchone()
        arcus.set(str(target),res[1])
        return 'Cache Miss: '+str(res)

@app.route('/nbase', methods=['GET'])
def nbase_():
    target = request.args.get('id')
    res = nbase.get(target)
    if res:
        return 'Cache Hit: '+str(res)
    else:
        query = 'select * from user where id=\"%s\"'%request.args.get('id')
        cursor.execute(query)
        res = cursor.fetchone()
        nbase.set(target,res[1])
        return 'Cache Miss: '+str(res)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
