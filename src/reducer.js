export const initialState = {
  basket: [],
};

// Sector 
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

// Dispatch action to data layer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
