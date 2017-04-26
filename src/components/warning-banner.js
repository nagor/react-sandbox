import React from 'react';

export function WarningBanner(props) {
    if (!props.warn) {
        // return null to not render the component
        return null;
    }
    const warnStyle = {
        backgroundColor: props.makeYellow === true ? "yellow" : "green"
    };

    return (
        <div className="warning" style={warnStyle}>
            Warning! {props.warn}
        </div>
    );
}
