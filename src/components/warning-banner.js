import React from 'react';

export function WarningBanner(props) {
    if (!props.warn) {
        // return null to not render the component
        return null;
    }

    return (
        <div className="warning">
            Warning! {props.warn}
    </div>
    );
}
