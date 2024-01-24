const productos = [
    { id: "1", nombre: "Playstation 5", precio: 1000, img: "../img/play5.jpg", idCat: "2", stock: 100 },
    { id: "2", nombre: "Playstation 4", precio: 380, img: "../img/play4.jfif", idCat: "2", stock: 100 },
    { id: "3", nombre: "Xbox One", precio: 500, img: "../img/xboxone.png", idCat: "3", stock: 100 },
    { id: "4", nombre: "Xbox Series X", precio: 1000, img: "../img/xboxseriesx.jpg", idCat: "3", stock: 100 }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}