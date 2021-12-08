
class List {
    #el;

    constructor(el, items) {
        this.#el = document.querySelector(el);
        this.items = items
    }

    render() {
        let html = this.items.map(item => `<div class="col-12">${item.render()}</div>`).join('')
        this.#el.innerHTML = html
    }
}

module.exports = List;