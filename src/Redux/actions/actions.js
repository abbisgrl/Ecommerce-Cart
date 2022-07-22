
export const ADD = (item) => {
    return {
        type: 'ADD_CART',
        payload: item
    }
}

export const DELETE = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
}

export const REMOVE = (item) => {
    return {
        type: "REMOVE",
        payload: item
    }
}