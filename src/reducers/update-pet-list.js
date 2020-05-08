const updatePetList = (state, action) => {

    if (state === undefined) {
        return {
            pets: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_PETS_REQUEST':
            return {
                pets: [],
                loading: true,
                error: null
            };
        case 'FETCH_PETS_SUCCESS':
            return {
                pets: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_PETS_FAILURE':
            return {
                pets: [],
                loading: false,
                error: action.payload
            };
        default:
            return state.petList;
    }
};

export default updatePetList;