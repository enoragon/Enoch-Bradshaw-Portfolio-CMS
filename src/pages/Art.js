import React, { Component } from 'react';
import Img from "gatsby-image";
import Layout from '../components/layout'
import SEO from "../components/seo"
import { graphql } from "gatsby"

class Art extends Component{

    createImages = () => {
        const data = this.props.data.allFile.edges
        console.log(data);
        let imgs = [];
        for (let i = 0; i < data.length; i++) {
          const content = data[i].node.childMarkdownRemark.frontmatter;
          imgs.push(<Img fluid={content.image.childImageSharp.fluid} key={content.image.childImageSharp.id} style={{ width:"500px",margin:"20px" }}/>);
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
              image{
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                  id
                }
              }
            }
          }
        }
      }
    }
  }`