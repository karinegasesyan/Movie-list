import {types} from './actions'

const initialState = {
    error: false,
    loading: false,
    movies: []
};

const transfersSearchByReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TOP_RATED_MOVIES_START:
            return {
                ...state,
                error: false,
                loading: true,
                movies: []
            };

        case types.GET_TOP_RATED_MOVIES_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                movies: action.responseData.results
            };

        case types.GET_TOP_RATED_MOVIES_FAILED:
            return {
                ...state,
                error: true,
                loading: false,
                movies: []
            };
        default: {
            return state;
        }
    }
};

export default transfersSearchByReducer;