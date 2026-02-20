from flask import Flask, render_template

app = Flask(__name__)

# Ruta principal: renderiza index.html
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/productos')
def productos():
    return render_template('productos.html')

@app.route('/factura')
def factura():
    return render_template('factura.html')

@app.route('/contactos')
def contactos():
    return render_template('contactos.html')

if __name__ == '__main__':
    app.run(debug=True)
