import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import LongCard from '../components/LongCard/LongCard';
import NoodRoom from '../Images/noodroom.gif';
// import Mobile from '../Images/Mobile.png';
// import AR from '../Images/ARPhone.jpg';
// import Emotes from '../Images/Emotes.png';
// import LilacCruise from '../Images/lilaccruise.gif';
import Layout from '../components/layout'
import SEO from "../components/seo"
import { graphql } from "gatsby"

class Work extends Component{
    createCards = () => {

        const parseHtml = htmlParser({
            isValidNode: node => node.type !== 'script',
        });
           
        const data = this.props.data.allFile.edges
        let cards = [];

        for (let i = 0; i < data.length; i++) {
            const content = data[i].node.childMarkdownRemark.frontmatter;
            cards.push(
                <LongCard isImageOnLeft={i%2} image={content.image} title={content.title}>
                    <ReactMarkdown source={content.text} escapeHtml={false} astPlugins={[parseHtml]} linkTarget="_blank"/> 
                </LongCard>
            );
        }

        return cards;
    }

    render(){
        
        //console.log(data)
        
        //.node.childMarkdownRemark.frontmatter
        return (
            <Layout>
                <SEO title="Work" />
                <Container>
                    <div className="mx-auto">
                        <h1  className="text-center">Projects</h1>
                    </div>
                    <LongCard isImageOnLeft={true} image={NoodRoom} title={'Noodle Dimension'}>
                        Sometimes I just need to go to my happy place. With this Noodle Dimension, and the power of Virtual Reality, 
                        I was able to will this dream land into reality. This project is my piece of a inter-dimensional showroom. 
                        Basically, each developer at Self Interactive made a VR Room and there was a lobby to get to each room. 
                        We showcased this passion project at a pop-up artshow. You should have been there. It was dope.
                    </LongCard>
                    {this.createCards()}                    
                </Container>
            </Layout>
        );
    }
}

export default Work;

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "content"}, relativeDirectory: {eq: "projects"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              image
              text
          }
        }
      }
    }
  }
}`