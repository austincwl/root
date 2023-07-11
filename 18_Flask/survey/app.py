from flask import Flask, request, render_template
from surveys import Question, Survey,satisfaction_survey,surveys
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'key'
toolbar = DebugToolbarExtension(app)

responses = []

@app.route('/')
def index():
    """Return Home Page"""
    title = satisfaction_survey.title
    return render_template("home.html",title=title)
    
@app.route('/questions/<num>')
def show_question(num):
    return NotImplemented