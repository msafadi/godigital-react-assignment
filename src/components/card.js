
class Card {
    #item;
    constructor(item) {
        this.#item = item
    }

    render() {
        return `<div class="card">
        <div class="row">
            <div class="col-md-4">
                <img src="${this.#item.image}" alt=""
                    class="img-fluid m-3" height="150">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="h5 mt-3 mb-4">${this.#item.title}</h3>

                    <div class="mb-3">
                        <p class="text-muted fs-6">${this.#item.description}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="fs-3 text-success">$ ${this.#item.price}</div>
                        <div>
                            <button class="btn btn-outline-primary" onclick="app.addToCart(${this.#item.id}, '${this.#item.title.replace(/"/g, '\\"').replace(/'/g, "\\'")}', ${this.#item.price})">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
}

module.exports = Card