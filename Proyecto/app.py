from flask import Flask, render_template, request, flash, redirect, url_for
from form import ProductoForm
from inventario.bd import init_db, get_db_connection
from inventario.inventario import Inventario
from inventario.producto import Producto

app = Flask(__name__)
app.config['SECRET_KEY']='mi_clave_Secreta'

init_db()
inventario = Inventario()
inventario.cargar_desde_db
# Ruta principal: renderiza index.html
@app.route('/')
def inicio():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

#ruta de productos

@app.route('/productos/nuevo', methods=['GET', 'POST'])
def producto_nuevo():
    form = ProductoForm()  # aquí sí defines el formulario

    if form.validate_on_submit():  # método correcto
        nombre = form.nombre.data
        descripcion = form.descripcion.data
        cantidad = form.cantidad.data
        precio = form.precio.data
        inventario.agregar_producto(nombre, descripcion, cantidad, precio)

        flash('Porducto agregado extiosamente','success')

        return redirect(url_for("productos_listar"))
    return render_template("productos_form.html", form = form)

#ruta para listar
@app.route('/productos')
def productos_listar():
    inventario.cargar_desde_db()
    productos = list(inventario.productos.values())
    return render_template('productos.html', productos=productos)




 #ruta para editar
# ruta para editar producto
@app.route('/productos/editar/<int:id>', methods=['GET', 'POST'])
def producto_editar(id):
    productos = inventario.productos.get(id)
    if not productos:
     flash('Producto actualizado exitosamente', 'success')
     return redirect(url_for('productos_listar'))

    return render_template('productos.html',productos=productos)

# ruta para eliminar producto
@app.route('/productos/eliminar/<int:id>', methods=['POST'])
def producto_eliminar(id):
    inventario.eliminar_producto(id)
    flash('Producto eliminado exitosamente', 'success')
    return redirect(url_for('productos_listar'))





@app.route('/factura')
def factura():
    return render_template('factura.html')

@app.route('/contactos')
def contactos():
    return render_template('contactos.html')

if __name__ == '__main__':
    app.run(debug=True)
