from flask import Blueprint, render_template, url_for

views = Blueprint(__name__, "views")

ids = ["rseries61bk", "rseries88bk"]

desks = {
    "rseries61bk": {
        "id": "rseries61bk",
        "name": "R Series 61",
        "color": "Black",
        "price": "18.000.000",
        "preview": "rseries61bk/rseries61bk-image1.jpg"
    },
    "rseries88bk": {
        "id": "rseries88bk",
        "name": "R Series 88",
        "color": "Black",
        "price": "19.000.000",
        "preview": "rseries88bk/rseries88bk-image1.jpg"
    },
}

@views.route("/")
def home():
    return render_template("home.html", ids=ids, desks=desks)

@views.route("/product/<desk>")
def product(desk):
    desk = desks.get(desk)
    return render_template("desk.html", product=desk)