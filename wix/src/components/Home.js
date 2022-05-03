import React from 'react'
import Introduction from './Introduction';
import Descripton from './Description';
import Templates from './Templates';
import Tools from './Tools';

function Home(){
            // Leht jaotatud Tükkideks

            /*
            <Editor />
            <Tools />
            <Business />
            <How />
            <Why />
            <Blog />
            <FAQ />
            <About />
            */
    return(
        <>
            <Introduction />
            <Descripton />
            <Templates />
            <Tools />
        </>
    )
}

export default Home