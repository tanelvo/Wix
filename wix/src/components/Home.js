import React from 'react'
import Introduction from './Introduction';
import Descripton from './Description';
import Templates from './Templates';
import Editor from './Editor';

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
            <Editor />
        </>
    )
}

export default Home