export const getTotalBasket = (basket)=> 
    basket.reduce((amount, item)=>{
        return amount + item.price
    }, 0)


export const initialState = {
    basket: [],
    user: null,
}

const ReducerApp = (state =initialState, action) => {
switch(action.type) {
    //this case add user
    case "SET_USER":
        return{
            ...state,
            user: action.user
        }
        case "empty_basket":
            return{
                ...state,
                basket: []
            }
        // this cace add items in basket
        case "ADD_TO_BASKET":
            return{
                ...state, 
                basket: [...state.basket, action.item],
            }
            //this case remove items from basket
            case "remove_from_basket": 
            const handleIndex = state.basket.findIndex((indexItem)=> indexItem.id === action.id)
                let newBasket = [...state.basket]
                if(handleIndex >= 0 ) {
                    newBasket.splice(handleIndex, 1)
                }
            return {
                ...state,
                basket: newBasket,
            }
        default:
            return state
            

        
}
}

export default ReducerApp