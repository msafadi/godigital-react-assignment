const { default: axios } = require("axios");

class Products {
    #url = "https://fakestoreapi.com/products";

    async all() {
        return await axios.get(this.#url)
    }
}

module.exports = new Products;