
export const getTotalBasket = (basket)=> 
    basket.reduce((amount, item)=>{
        return amount + item.price * item.quantity
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
            user: action.user,
        }
        case "EMPTY_BASKET":
            return{
                ...state,
                basket: []
            }
        // this cace add items in basket
        case "ADD_TO_BASKET":
            //check if element exist in basket or not

            const existitem = state.basket.find((item)=> item.id === action.item.id)
            // if element exist increment the quantity
            if(existitem){
                return{
                    ...state,
                    basket: state.basket.map((item)=> item.id === action.item.id ?
                    {...item,
                        quantity: item.quantity + 1
                    }
                    : item
                )
                }
                //if existItem empty add one element
            }else {
                return {
                    ...state, 
                    basket: [...state.basket, {...action.item, quantity: 1} ]
                }
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