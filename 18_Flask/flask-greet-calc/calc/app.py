# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route('/add')
def do_add():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    result = a + b
    return str(result)

@app.route('/sub')
def do_sub():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    return(str(a-b))

@app.route('/mult')
def do_mult():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    return(str(a*b))

@app.route('/div')
def do_div():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    return(str(a/b))

