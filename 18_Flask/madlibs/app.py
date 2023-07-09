from flask import Flask, request, render_template
from stories import story
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "secret"

debug = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    """Shows Home Page"""
    prompts = story.prompts 
    return render_template('base.html', prompts=prompts)
    
@app.route('/story')
def generate():
    """Shows completed sentance"""
    text = story.generate(request.args)
    return render_template('story.html', story=text)


