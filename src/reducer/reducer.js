const initialStore = {
    selectedCity: '',
    weatherData: null
};

const reducer = (state = initialStore, action) => {
    switch(action.type) {
        case 'SET_SELECTED_CYTI':
            return {
                ...state,
                selectedCity: action.payload
            }
        case 'SET_DATA':
            return {
                ...state,
                weatherData: action.payload
            }
        default:
            return state;
    }
}

export default reducer;