import React, { Component } from 'react';

//Components
import FacebookLogin from './FacebookLogin/'
import GoogleLogin from './GoogleLogin/'


import config from './config';

class social extends Component{
    
    render(){
        return(
            <div>
               
                <p>
                    <FacebookLogin />
                    <GoogleLogin />
                    
                </p>
            </div>
        )
    }
}

export default social;