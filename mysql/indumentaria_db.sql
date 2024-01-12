CREATE DATABASE indumentaria_db;

CREATE TABLE Usuario(
id_usuario INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombre_usuario VARCHAR(50),
clave_usuario VARCHAR(50),
estado_usuario TINYINT
);


CREATE TABLE Cliente(
id_cliente INT auto_increment PRIMARY KEY NOT NULL,
nombre_cliente VARCHAR(50),
documento_cliente INT,
direccion_cliente VARCHAR(100),
correo_cliente VARCHAR (100),
clave_cliente VARCHAR(50),
estado_cliente TINYINT
);

CREATE TABLE Producto(
id_producto INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
id_categoria INT,
nombre_producto VARCHAR(50),
precio_producto DECIMAL(10,2),
tipo_producto VARCHAR(50),
descripcion_producto VARCHAR(50),
estado_producto TINYINT,
KEY fk_producto_categoria (id_categoria), CONSTRAINT fk_producto_categoria FOREIGN KEY (id_categoria) REFERENCES Categoria (id_categoria)
);

CREATE TABLE Categoria(
id_categoria INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
descripcion_categoria VARCHAR(100),
estado_categoria TINYINT
);

CREATE TABLE MetodoPago(
id_metodopago INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
tipo_pago VARCHAR(50)
);


CREATE TABLE Venta(
id_venta INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
id_cliente INT,
id_metodopago INT,
fecha_venta DATETIME DEFAULT CURRENT_TIMESTAMP,
total DECIMAL(10,2),
KEY fk_venta_cliente (id_cliente), CONSTRAINT fk_venta_cliente FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente),
KEY fk_venta_metodopago (id_metodopago), CONSTRAINT fk_venta_metodopago FOREIGN KEY (id_metodopago) REFERENCES MetodoPago (id_metodopago)
);


CREATE TABLE DetalleVenta(
id_detalleVenta INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
id_venta INT,
id_producto INT,
cantidad INT,
subTotal DECIMAL(10,2),
KEY fk_detalleVenta_venta (id_venta), CONSTRAINT fk_detalleVenta_venta FOREIGN KEY (id_venta) REFERENCES Venta (id_venta),
KEY fk_detalleVenta_producto (id_producto), CONSTRAINT fk_detalleVenta_producto FOREIGN KEY (id_producto) REFERENCES Producto (id_producto)
);

SELECT * FROM Categoria;

INSERT INTO Categoria VALUES (3,"Camisetas",1);

INSERT INTO Producto VALUES (1,1,"Air Max",650.00,"Calzado","Talle 42",1);
INSERT INTO Producto VALUES (2,2,"Jordan",450.00,"Pantalon","Talle M",1);
INSERT INTO Producto VALUES (3,3,"Manchester U",950.00,"Camiseta","Talle L",1);

UPDATE Producto SET nombre_producto = "Zapatilla Air Max" WHERE id_producto = 1;


SELECT * FROM Producto;
SELECT * FROM Categoria;
