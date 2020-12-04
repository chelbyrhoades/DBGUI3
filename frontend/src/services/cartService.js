import Cart from './../models/cart';
import CartItem from './../models/cartItem';

export class CartService {
    getCart() {
        return window.cart || new Cart();
    }

    addToCart(product) {
        let cart = window.cart || new Cart();
        let existing = cart.items.find(x => x.product.id == product.id);
        if (existing) {
            existing.quantity += 1;
            existing.totalPrice = existing.product.price * existing.quantity;
        } else {
            cart.items.push(new CartItem(product, 1, product.price));
        }

        cart.total = cart.items.map(x => x.totalPrice).reduce((x, y) => x + y);
        window.cart = cart;
    }

    getCartItems() {
        if (window.cart)
            return window.cart.items;
    }

    removeFromCart(product) {
        let cart = window.cart || new Cart();
        let existing = cart.items.find(x => x.product.id == product.id);
        if (existing) {
            existing.quantity -= 1;
            existing.totalPrice = existing.product.price * existing.quantity;
        }
        cart.total = cart.items.map(x => x.totalPrice).reduce((x, y) => x + y);
        window.cart = cart;
    }

    clearCart() {
        if (window.cart) {
            window.cart.items = [];
            window.cart.items.totalPrice = 0;
            window.cart.total = 0;
        }
    }
}

export default CartService;