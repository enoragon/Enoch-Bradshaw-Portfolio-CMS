import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import Layout from '../components/layout'
import SEO from "../components/seo"

class Art extends Component{
    render(){
        return (
            <Layout>
                <SEO title="Art" />
                <Container>
                    <div className="mx-auto">
                        <h1  className="text-center">Coming Soon</h1>
                    </div>
                    {/* <div className="d-flex flex-wrap">
                    
                        <Image src="https://via.placeholder.com/200"/>
                    
                        <Image src="https://via.placeholder.com/200"/>
                    
                        <Image src="https://www.instagram.com/p/B1eumkWnvOD"/>
                    
                        <Image src="https://photos.app.goo.gl/Y6CoZz64Wo35AHQe8"/>
                    
                        <Image src="https://photos.app.goo.gl/Y6CoZz64Wo35AHQe8"/>
                    
                        <Image src="https://photos.app.goo.gl/yzL4eoNUZxpZryTJA"/>

                    </div> */}
                </Container>
            </Layout>
        );
    }
}

export default Art;