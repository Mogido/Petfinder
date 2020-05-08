import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../../actions'; 
import PetListItem from '../pet-list-item';
import './petlist.css';
import { bindActionCreators } from 'redux';
import compose from '../../utils';
import withPetstoreService from '../hoc';
import ErrorIndicator from '../error-indicator/';

const PetList = ({ pets }) => {
    return (
        <ul>
            {
                pets.map((pet) => {
                    return (
                        <li key={pet.id}>
                            <PetListItem
                            pet={pet} />
                        </li>
                    );
                })
            }
        </ul>
    );
};


class PetListContainer extends Component {

    componentDidMount() {
        this.props.fetchPets();
    }

    render() {
        const { pets, loading, error } = this.props;

        if (error) {
            return <ErrorIndicator />
        }

        return <PetList pets={pets} />
    }
}

const mapStateToProps = ( { petList: { pets, loading, error}}) => {
    return { pets, loading, error };
};

const mapDispatchToProps = (dispatch, { petstoreService }) => {

    return bindActionCreators({
        fetchPets: fetchPets(petstoreService)
    }, dispatch);
};



export default compose(
    withPetstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PetListContainer);