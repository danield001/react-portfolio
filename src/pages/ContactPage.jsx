import React from 'react';

export default function ContactPage() {
    return (
        <div>
            <h1>Contact</h1>
            <div>
                <h2>Name:</h2>
                <input type="text" defaultValue="name" />
            </div>
            <div>
                <h2>Email:</h2>
                <input type="text" defaultValue="email" />
            </div>
            <div>
                <h2>Message:</h2>
                <input type="text" defaultValue="message" />
            </div>
            <button type="submit">Submit</button>
        </div>
    );
}
