import React from 'react';

//gönderdiğim yerden alabilirim
const Rainbow = (WrappedComponent) => {
    const colours = ['red','pink','orange','blue','green','yellow'];
    const randomColour=colours[Math.floor(Math.random()*6)];
    const className=randomColour+'-text';


    return(props) =>(
        <div className={className}>
            <WrappedComponent {...props}/>{//bana gelen componenti props olarak geri yolluyom
            }
        </div>
    )

}

export default Rainbow;