import React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';

class InstagramGrid extends React.Component {
    constructor(props){
        super(props);
        this.state.InstagramFeed = null;
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="d-flex flex-wrap">
            
                <Image src="https://via.placeholder.com/200"/>
            
                <Image src="https://via.placeholder.com/200"/>
            
                <Image src="https://via.placeholder.com/200"/>
            
                <Image src="https://via.placeholder.com/200"/>
            
                <Image src="https://via.placeholder.com/200"/>
            
                <img src="https://www.instagram.com/p/B1elKGWnG12"/>
            
                <Image src="https://www.instagram.com/p/B1elKGWnG12"/>
        
            </div>
        )
    }
}

