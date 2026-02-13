from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hola, Flask!"


@app.route('/producto/<nombre>')
def producto(nombre):
    return f'Producto: {nombre} – disponible.'


if __name__ == '__main__':
    app.run(debug=True)
