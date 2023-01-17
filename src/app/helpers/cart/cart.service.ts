import {Injectable} from '@angular/core';
import {Product} from "../../model/Product";
import {BehaviorSubject, Observable, Subject} from "rxjs";

export type CartElement = {
  product: Product,
  amount: number
}

@Injectable({
  providedIn: 'root'
})


export class CartService {

  private cartElementsSubject$ = new BehaviorSubject<CartElement[]>([]);
  cartElements$: Observable<CartElement[]> = this.cartElementsSubject$.asObservable();

  constructor() {
    const str = localStorage.getItem('cart') as string;
    const cart = JSON.parse(str);
    if (cart && cart.length) {
      this.passValue(cart as CartElement[])
    }
  }

  getCartElementIndex(id: number): number {
    const index = this.cartElementsSubject$.value.findIndex((cartElement: CartElement) => cartElement.product.id == id)
    return index;
  }

  decrementProduct(id: number) {
    const index = this.getCartElementIndex(id);
    if (index != -1) {
      let newCart = [...this.cartElementsSubject$.value]
      const amount = newCart[index].amount
      if (amount === 1) {
        newCart = newCart.splice(index, 1)
      } else {
        newCart[index].amount = amount - 1
      }

      this.passValue(newCart)
      this.addToLocalStorage(newCart)
    }

  }

  deleteProduct(id: number) {
    const index = this.getCartElementIndex(id);
    if (index != -1) {
      let newCart = [...this.cartElementsSubject$.value]
      newCart = newCart.splice(index, 1)
      this.passValue(newCart)
      this.addToLocalStorage(newCart)
    }
  }

  addToCart(product: Product) {
    const index = this.getCartElementIndex(product.id);
    let newCart = [...this.cartElementsSubject$.value]

    if (index === -1) {
      newCart.push({
        product, amount: 1
      })
    } else {
      newCart[index].amount += 1
    }
    this.passValue(newCart)
    this.addToLocalStorage(newCart)
  }

  passValue(cartElements: CartElement[]) {
    //passing the data as the next observable
    this.cartElementsSubject$.next(cartElements);
  }


  addToLocalStorage(cartElements: CartElement[]) {
    const jsonObj = JSON.stringify(cartElements);
    localStorage.setItem("cart", jsonObj);  }

}
