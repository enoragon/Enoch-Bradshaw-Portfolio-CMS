import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import LongCard from '../components/LongCard/LongCard';
import NoodRoom from '../Images/noodroom.gif';
import Mobile from '../Images/Mobile.png';
import AR from '../Images/ARPhone.jpg';
import Emotes from '../Images/Emotes.png';
import LilacCruise from '../Images/lilaccruise.gif';
import Layout from '../components/layout'
import SEO from "../components/seo"

class Work extends Component{
    render(){
        return (
            <Layout>
                <SEO title="Work" />
                <Container>
                    {/* TODO: replace this with a loop and array */}
                    <LongCard isImageOnLeft={false} image={NoodRoom} title={'Noodle Dimension'}>
                        Sometimes I just need to go to my happy place. With this Noodle Dimension, and the power of Virtual Reality, 
                        I was able to will this dream land into reality. This project is my piece of a inter-dimensional showroom. 
                        Basically, each developer at Self Interactive made a VR Room and there was a lobby to get to each room. 
                        We showcased this passion project at a pop-up artshow. You should have been there. It was dope.
                    </LongCard>
                    <LongCard isImageOnLeft={true} image={Mobile} title={'Developed and Released Mobile Apps'}>
                        In a professional setting I have developed apps with React Native. During that time, I also gained experience releasing apps to
                        both the App Store and the Google Play Store. Let me tell ya, releasing mobile apps can be a humbling experience. 
                        There can be some back and forth and things can go wrong, but all in all it's a great learning experience.
                    </LongCard>
                    <LongCard isImageOnLeft={false} image={AR} title={'AR Adventures'}>
                        While working for Self Interactive, I have been blessed with the oppertunity to develop for 
                        Ground-breaking hardware, like the Microsoft Hololens. I also created AR product visualizing apps
                        for tablets and phones. I am excited to see how Augmented Reality takes off in the future. 
                    </LongCard>
                    <LongCard isImageOnLeft={true} image={Emotes} title={'Emotes with Emotion'}>
                        My friend, SlyRaider, is a streamer on Twitch. You should check her out 
                        <a href="https://www.twitch.tv/slyraider" 
                            target="_blank" rel="noopener noreferrer" 
                            style={{color:"white", textDecoration:"underline"}}
                        > Here</a>. 
                        She asked me to create some Emotes for her Twitch channel and I agreed. I tried my best to 
                        capture her essence with these small pieces of art. I don't know for sure if I suceeded in this but 
                        she liked them so I am happy.
                    </LongCard>
                    <LongCard isImageOnLeft={false} image={LilacCruise} title={'Concert Visuals'}>
                        The fine folks in Lilac Cruise, a local band, asked my to create Visuals for their upcoming concerts.
                        Because they are not going to be playing very many shows in 2020, they wanted the shows they do play to 
                        be a little more engaging and special. This is just a sample of the hour-long animation I made for them. 
                    </LongCard>
                </Container>
            </Layout>
        );
    }
}

export default Work;