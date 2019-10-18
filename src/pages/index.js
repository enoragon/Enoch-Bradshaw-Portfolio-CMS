import React from "react"
// import { Link } from "gatsby"

import { Container, Row, Col } from 'react-bootstrap'
import Blurbs from '../components/Blurbs/Blurbs'
// import Nucky from '../images/nucky.png'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "assets/nucky.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
    <Layout>
        <SEO title="Home" />
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs sm="4" md="3"> 
                    <Img fluid={data.file.childImageSharp.fluid} alt="profile image" style={{maxWidth: "150px", borderRadius: "50%"}}/>
                </Col>
                <Col xs sm="6" md="5" className="d-flex align-items-center">
                    <div>
                        <Row>
                            <h1>Enoch Bradshaw</h1>
                        </Row>
                        <Row>
                            <p>Interactive Developer, Artist, Human</p>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Blurbs blurbTitle="What does this dude develop?">
                Whatever I want. Get off my case, Mom.<br/><br/>
                If you must know, I've birthed Virtual Reality and Augmented Reality applications
                using both Unity and Unreal Engine. In College I tinkered with making a few apps with Java but when I started at Self Interactive
                I was thrown headfirst into React Native. I quickly fell in love with the ease of React Native, especially when using Expo.
                I like using React JS as well but I much rather the back-end. My favorite language is probably C# and for that 
                reason I am a huge fan of the Dotnet stack. <br/><br/>
                In my free time I like to make games and participate in game jams. I've been working for a while on a pixelated
                sidescroller called Good Knight Evil Robots. I plan to release it within the year so keep your eye out for it!
            </Blurbs>
            <Blurbs blurbTitle="I would make the title 'Artsy Fartsy' but I don't want 'Fart' in the title so...">
                One of my favorite things to do is draw with pen. It's a lot like life; 
                if you f*** it up you have to figure out how to make it right. 
                I find that beautiful. Another fun exercise I do is markerboard art. 
                Knowing that whatever I draw will get erased by the end of the day is liberating.
                Because every stroke is expendable, touching the marker to the board is met with no mental resistance.<br/><br/>
                I love painting. I paint with mostly acrylic but I would like to get better with watercolor. 
                I have some art in the gallery page. You are welcome to look around, just don't break anything.<br/><br/>
                In middle/high school I made Flash games. Years later I mourned the death of Flash. 
                Nothing has every really replaced it but I have been using Adobe Animate lately and it's been able to fill that void.
                Making animations helps me connect to my Flash roots and it is great.<br/><br/>

            </Blurbs>
            <Blurbs blurbTitle="I am not a ̼͙̈́̚͟͞l̛̲̗̂ì̥z̠̣͍̈́̈́͐à̳̫̯͘͜͞͞ȓ̰͚̼͎̃̾͝d̡̜͉͉̑͋͞͠ ̧͓̱̋͌͝ṕ̹͘ͅe̱̹͋͐́͟r̳̯̺̈́̎͆̓͢s̡͚̫̈́̑̄͘͢ò̧͎̝͔̤͗̀̀͘n͔̠̞̭̽̍̀̍">
                If you wanted some ̗̑i̖̋ll̟͊u͕̎mi̧͘n͋͟aẗ̞i s̲͆hȉ̧t̆͟ then you stumbled across the wrong webpage.<br/>
                Just fellow ̞͘h͕̙̊̾̕͜u͇̻͈̇̇͠m̻͖̯̀͂̿ą̧͍̪͖̈́̆̑̊̆ṉ̛͘͢s̞͙̙̞͗̀̅̓ here. Sorry. Your lifelong quest to find the lizard person that 
                accidentally murdered your entire family because he mistook them for chicken nuggets 
                will have to go on another day.
            </Blurbs>
        </Container>
    </Layout>
    )
}

export default IndexPage