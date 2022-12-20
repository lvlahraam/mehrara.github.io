from flask import Flask, render_template, url_for
from views import views
from flask_util_js import FlaskUtilJs

app = Flask(__name__)

fujs = FlaskUtilJs(app)
app.register_blueprint(views, url_prefix="/")

if __name__ == "__main__":
    app.run(debug=True, port=8000)