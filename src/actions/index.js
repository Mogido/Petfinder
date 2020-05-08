const petsLoaded = (newPets) => {
    return {
        type: 'FETCH_PETS_SUCCESS',
        payload: newPets
    };
};

const petsRequested = () => {
    return {
        type: 'FETCH_PETS_REQUEST'
    }
};

const petsError = (error) => {
    return {
        type: 'FETCH_PETS_FAILURE',
        payload: error
    };
};

const fetchPets = (petstoreService) => () => (dispatch) => {
    dispatch(petsRequested());
    petstoreService.getAllAnimals()
        .then((data) => dispatch(petsLoaded(data)))
        .catch((err) => dispatch(petsError(err)));
};

export {
    fetchPets
};