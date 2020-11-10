import React, {Fragment} from 'react';

// Landingpage components

import NavBar from '../components/NavBar'
import MainBody from '../components/MainBody'
import Footer from '../components/Footer'

function LandingPage(){
    return(
        <Fragment>
        <body>
        <div class="site-wrap">
        <NavBar/>
        <MainBody/>
        <Footer/>
        </div>
        </body>
        </Fragment>
    )
}

export default LandingPage;
