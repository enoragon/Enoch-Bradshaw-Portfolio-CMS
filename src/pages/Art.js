import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import Layout from '../components/layout'
import SEO from "../components/seo"

class Art extends Component{

    createImages = () => {
        const data = this.props.data.allFile.edges
        let imgs = [];
        for (let i = 0; i < data.length; i++) {
            const content = data[i].node.childMarkdownRemark.frontmatter;
            imgs.push(<Image src={content.image} style={{ maxWidth:"500px",margin:"20px" }}/>);
        }
        return imgs;
    }

    render(){
        return (
            <Layout>
                <SEO title="Art" />
                {/* <Container> */}
                    <div className="mx-auto">
                        <h1  className="text-center">Gallery</h1>
                    </div>

                    <div className="d-flex flex-wrap justify-content-center">
                        {this.createImages()}
                    </div>

                {/* </Container> */}
            </Layout>
        );
    }
}

export default Art;

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "content"}, relativeDirectory: {eq: "art"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              image
          }
        }
      }
    }
  }
}`