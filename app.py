from flask import Flask

app = Flask(__name__,
            static_url_path='',
            static_folder='static')


@app.route("/")
def index():
    return app.send_static_file('resume.html')


@app.route("/pdf")
def pdf():
    return app.send_static_file('resume.pdf')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
