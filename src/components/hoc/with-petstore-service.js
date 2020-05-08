import React from 'react';
import { PetstoreServiceConsumer } from '../petstore-service-context';


const withPetstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <PetstoreServiceConsumer>
                {
                    (petstoreService) => {
                        return (<Wrapped {...props}
                            petstoreService={petstoreService}/>);
                    }
                }
            </PetstoreServiceConsumer>
        );
    }
};

export default withPetstoreService;