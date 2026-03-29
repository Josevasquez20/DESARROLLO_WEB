#clase producto 
class Producto:
    def __init__(self, id, nombre, descripcion, cantidad, precio):
        self.id = id
        self.nombre = nombre
        self.descripcion = descripcion
        self.cantidad = cantidad
        self.precio = precio

    def to_tuple(self):
        return (self.id, self.nombre, self.self.descripcion, self.cantidad, self. self.precio)
    
    #diccionario 
    def to_dict(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'descripcion': self.descripcion,
            'cantidad': self.cantidad,
            'precio': self.precio
        }

