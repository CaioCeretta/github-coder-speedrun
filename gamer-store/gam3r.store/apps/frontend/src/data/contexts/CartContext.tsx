'use client'
import {
    CalculateInstallment,
    Cart,
    Installments,
    ItemCart,
    Product
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface CartContextProps {
    items: ItemCart[]
    itemsQty: number
    fullTotalValue: number
    totalValue: number
    installments: Installments
    addItem: (produto: Product) => void
    removeItem: (produto: Product) => void
    removeProduct: (produto: Product) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextProps>({} as any)

export function CartProvider(props: any) {
    const { saveItem, fetchItem } = useLocalStorage()
    const [cart, setCart] = useState<Cart>(new Cart())

    function addItem(produto: Product) {
        updateCart(cart.addItem(produto))
    }

    function removeItem(produto: Product) {
        updateCart(cart.removeItem(produto))
    }

    function removeProduct(produto: Product) {
        updateCart(cart.removeProduct(produto))
    }

    function clearCart() {
        updateCart(cart.clear())
    }

    function updateCart(cart: Cart) {
        saveItem('cart', cart.items)
        setCart(cart)
    }

    useEffect(() => {
        const savedItems: ItemCart[] = fetchItem('cart')
        if (savedItems) setCart(new Cart(savedItems))
    }, [fetchItem])

    return (
        <CartContext.Provider
            value={{
                items: cart.items,
                itemsQty: cart.itemsQty,
                totalValue: cart.totalValue,
                fullTotalValue: cart.fullValue,
                installments: new CalculateInstallment().execute(
                    cart.totalValue,
                ),
                addItem,
                removeItem,
                removeProduct,
                clearCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext
