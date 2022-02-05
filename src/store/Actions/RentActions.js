
// Action Type 
export const DELTEDE_ITEM = "DELTEDE_ITEM";
export const ADD_ITEM = "ADD_ITEM";


//Action creator 
export const deleteItem = (id) => {
    return {
      type: DELTEDE_ITEM,
      id,
    };
}

export const addItem = (addItem) => {
    console.log(addItem);
    return {
      type: ADD_ITEM,
      payload : addItem
    };
}

