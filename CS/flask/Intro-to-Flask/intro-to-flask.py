#app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/pants')
def about():
    return render_template('pants.html')



if __name__ == '__main__':
    app.run(debug = True)