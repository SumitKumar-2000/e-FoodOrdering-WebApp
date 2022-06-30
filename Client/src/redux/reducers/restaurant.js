const initialState = {
    restaurantData : {}
}

export const restaurantReducer = (state = initialState.restaurantData,action) => {
    switch(action.type){
        case "RESTAURANT" : {
            return {
                restaurantData : {...action.payload}
            }
        }

        default : return state
    }
}