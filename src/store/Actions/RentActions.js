
// Action Type 
export const DELTEDE_ITEM = "DELTEDE_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const ADD_ITEM_RENT = "ADD_ITEM_RENT";
export const RENT_ITEM = "RENT_ITEM";
export const RATING = "RATING";


//Action creator 
export const deleteItem = (id) => {
    return {
      type: DELTEDE_ITEM,
      id,
    };
}

export const addItem = (addItem) => {
    return {
      type: ADD_ITEM,
      payload : addItem,
      hoster: {
        name:null,
        img:null
      }
    };
}
export const addItemRent = (addRentItem) => {
  return {
    type: ADD_ITEM_RENT,
    payload: addRentItem,
  };
};

export const rentItem = (rentItem) => {

  return {
    type:RATING,
    payload:rentItem
  }
}
export const rateItem = (Item) => {

  return {
    type:RENT_ITEM,
    payload:Item
  }
}


