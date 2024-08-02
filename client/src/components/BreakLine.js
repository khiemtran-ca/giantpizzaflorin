import React from 'react';

// BreakLine for decoration each sections
const BreakLine = () => {
    return (
        <div className="container">
            <hr width="100%;" style={{ margin: 'auto', 'marginTop': '5px', 'backgroundColor': 'blue' }} />
            <hr width="75%;" style={{ margin: 'auto', 'marginTop': '5px', 'backgroundColor': 'red' }} />
        </div>
    )
}

export default BreakLine;