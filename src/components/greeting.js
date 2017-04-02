import React from 'react';

function UserGreeting({name}) {
    return <h1>Welcome back, {name}!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

export function Greeting({ isLoggedIn = false, name = 'John Doe' }) {
    if (isLoggedIn) {
        return <UserGreeting name={name}/>;
    }
    return <GuestGreeting />;
}
