export const initialState = {
    basket: [],
    user: null,
}

// Selector
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch (action.type) {
        //добавляем товар в корзину
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        //удаляем товар из корзины
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Что-то пошло не так! Продукт с id: ${index}, отсутствует в корзине `)
            }

            return {
                ...state,
                basket: newBasket,
            }

        //инициализируем пользователя
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        //юзаем дефолт
        default:
            return state
    }
}

export default reducer
