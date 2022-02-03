import Link from 'next/link';
import React from 'react';
// import './SecondPost.css';

const SecondPost = () => {
    return (
        <div className="main-container">
            <p>Back to the 
                <Link href="/"> home page</Link>
                </p>
            <h1>This is the Second post</h1>
            <h2>Yay! I create the page in Next.JS</h2>
        </div>
    );
};

export default SecondPost;