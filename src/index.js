const Card = require("./components/card");
const Cart = require("./components/cart");
const List = require("./components/list");
const products = require("./components/products");

const cart = new Cart('#cart')

class App {
    init () {
        products.all().then(response => {
            let data = response.data;
            let items = data.map(item => new Card(item))
            let list = new List('#products-list', items)
            list.render()
        })        
    }
    addToCart(id, title, price) {
        cart.add({
            id: id,
            title: title,
            price: price,
            quantity: 1
        })
    }
    removeFromCart(id) {
        cart.remove(id)
    }
}

window.app = new App;
app.init()

