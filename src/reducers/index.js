import updatePetList from './update-pet-list.js';


const reducer = (state, action) => {

    return {
        petList: updatePetList(state, action)
    };
};

export default reducer;