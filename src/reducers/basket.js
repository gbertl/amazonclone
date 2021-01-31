const basket = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return [...state, action.item];

    case "EMPTY_BASKET":
      return [];

    case "REMOVE_FROM_BASKET":
      const index = state.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return newBasket;

    default:
      return state;
  }
};

export default basket;
