import React from 'react';

const Lable = ({children}) => {
    return(
        <div>{children}</div>
    )
}

export default React.memo(Lable);