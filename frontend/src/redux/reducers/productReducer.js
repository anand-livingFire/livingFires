const initialState = {
    products: [],
  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return { ...state, products: action.payload };
      case 'CREATE_PRODUCT':
        return { ...state, products: [...state.products, action.payload] };
      default:
        return state;
    }
  };
  