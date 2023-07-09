from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
app = Flask("__name__")
app.config['SECRET_KEY'] = "secret"
debug = DebugToolbarExtension(app)

@app.route('/')
def home_page():
    """Shows Home Page"""
    return render_template('base.html')


