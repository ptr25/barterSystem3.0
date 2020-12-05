import React from 'react';
import LottieView from 'lottie-react-native';

export default class SantaAnimation extends React.Component{
    render(){
        return(
            <LottieView
            source= {require('../assets/logo.json')}
            style= {{width:'40%'}}
            autoPlay loop 
            >
            </LottieView>
        )
    }
}
