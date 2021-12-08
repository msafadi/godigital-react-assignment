
class Cart {
    #el;
    #items = [];

    constructor(el) {
        this.#el = document.querySelector(el);
    }

    add(item) {
        let exists = false;
        for (let i in this.#items) {
            if (this.#items[i].id == item.id) {
                this.#items[i].quantity++
                exists = true;
                break;
            }
        }
        if (!exists) {
            this.#items.push(item)
        }
        this.render()
        return this
    }

    remove(id) {
        for (let i in this.#items) {
            if (this.#items[i].id == id) {
                this.#items.splice(i, 1)
                break;
            }
        }
        this.render()
    }

    total() {
        let sum = 0
        for (let item of this.#items)
            sum += item.price * item.quantity
        return Number(sum).toFixed(2)
    }

    render() {

        let html = `<table class="table"><tbody>`
        
        html += this.#items.map(item => {
            return `<tr>
            <th>${item.title} x ${item.quantity}</th>
            <td><span class="currency">$</span>
                <span>${item.price * item.quantity}</span></td>
            <td><a href="#" class="btn btn-sm btn-danger" onclick="event.preventDefault();app.removeFromCart(${item.id})">x</a></td>
        </tr>`
        }).join('')

        html += `</tbody><tfoot>
        <tr>
            <th>Total</th>
            <td colspan="2">
                <span class="fs-2 currency">$</span>
                <span class="fs-2" id="total">${this.total()}</span>
            </td>
        </tr>
        </tfoot></table>`

        this.#el.innerHTML = html;
    }
}

module.exports = Cart;