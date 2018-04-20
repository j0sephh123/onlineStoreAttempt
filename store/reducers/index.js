const initialState = {
  fruits: [
    {id: 1, name: 'apple', quantity: 2, inCart: false, selected: false, calories: 150},
    {id: 2, name: 'banana', quantity: 5, inCart: false, selected: false, calories: 120},
    {id: 3, name: 'melon', quantity: 0, inCart: false, selected: false, calories: 110},
    {id: 4, name: 'raspberry', quantity: 4, inCart: false, selected: false, calories: 100},
    {id: 5, name: 'pineapple', quantity: 3, inCart: false, selected: false, calories: 90},
    {id: 6, name: 'peach', quantity: 4, inCart: false, selected: false, calories: 250},
    {id: 7, name: 'lemon', quantity: 15, inCart: false, selected: false, calories: 75},
    {id: 8, name: 'coconut', quantity: 5, inCart: false, selected: false, calories: 90},
    {id: 9, name: 'avocado', quantity: 7, inCart: false, selected: false, calories: 55},
    {id: 10, name: 'lime', quantity: 8, inCart: false, selected: false, calories: 78},
    {id: 11, name: 'orange', quantity: 9, inCart: false, selected: false, calories: 40},
    {id: 12, name: 'grapefruit', quantity: 10, inCart: false, selected: false, calories: 300},
    {id: 13, name: 'strawberry', quantity: 0, inCart: false, selected: false, calories: 210},
    {id: 14, name: 'papaya', quantity: 5, inCart: false, selected: false, calories: 190},
    {id: 15, name: 'pomelo', quantity: 5, inCart: false, selected: false, calories: 140},
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    default: return state;
  }
}

export default reducer;