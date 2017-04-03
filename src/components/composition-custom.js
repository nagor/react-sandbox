import React from 'react';

// Note: instead of using props.children, there are custom props.left and right.

function Contacts() {
    return (
        <div>
            Contacts
        </div>
    );
}

function Chat() {
    return (
        <div>
            Chat
        </div>
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

export function PaneLeftRight() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}