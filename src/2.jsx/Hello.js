import React from "react";

// const Hello = () => {
//     return (
//         <div id="divId" className="container">
//             <h1 id="header" className="main-header">This is JSX</h1>
//         </div>
//     )
// }

const Hello = () => {
    return React.createElement('div', 
                                {id: 'divId', className: 'container'}, 
                                React.createElement('h1', 
                                                    {id: 'header', className: 'main-header'}, 
                                                    'This is non JSX'))
}

export default Hello