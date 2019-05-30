const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};

//Измение количества товара в корзине. 
const updateCartItems = (cartItems, item, idx, decrease) => {
    if(idx > -1){
        //Если флаг decrease === true, количество товаров уменьшается
        item.count = decrease ? cartItems[idx].count - 1 : cartItems[idx].count + 1;
        item.total = item.price * item.count;
        return[
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ];
    } else {
        return [
            ...cartItems,
            item
        ];
    };
};

//Создание объекта товара для массива товаров в корзине
const updateCartItem = (id, books) => {
    const book = books.find(book => book.id === id);
    return {
        id: book.id,
        name: book.title,
        count: 1,
        total: book.price,
        price: book.price
    };
};

//Подсчет общего стоимости всех товаров в корзине
const updateOrderTotal = (cartItems) => cartItems.reduce((sum, current) => sum + current.total, 0);

//Вспомогательная функция получения индекса товара в корзине
const getIndex = (state, id) => {
    return state.cartItems.findIndex(item => item.id === id);
};

const reducer = (state = initialState, action) => {
    let newCartItems;
    switch(action.type){
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload 
            };
        case 'BOOK_ADDED_TO_CART':
            const newItem = updateCartItem(action.payload, state.books);
            newCartItems = updateCartItems(state.cartItems, newItem, getIndex(state, newItem.id));
            return{
                ...state,
                cartItems: newCartItems,
                orderTotal: updateOrderTotal(newCartItems)
            };
        case 'BOOK_CART_COUNT_DECREASED':
            const idx = getIndex(state, action.payload);
            newCartItems = updateCartItems(state.cartItems, state.cartItems[idx], idx, true);
            return {
                ...state,
                cartItems: newCartItems,
                orderTotal: updateOrderTotal(newCartItems)
            };
        case 'BOOK_DELETED_FROM_CART':
            const delIdx = getIndex(state, action.payload);
            newCartItems = [...state.cartItems.slice(0, delIdx), ...state.cartItems.slice(delIdx + 1)];
            return {
                ...state,
                cartItems: newCartItems,
                orderTotal: updateOrderTotal(newCartItems)
            };
        default:
            return state;
    };
};

export default reducer;