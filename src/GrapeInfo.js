import React from 'react';

const GrapeInfo = () => {
    const pageStyle = {
        backgroundColor: '#e6e6fa',
        minHeight: '100vh',
        padding: '20px',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    return (
        <div style={pageStyle}>
            <img
                src="grapes.png"
                alt="Grapes"
                style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
            />
            <h1>All About Grapes</h1>
            <p>Grapes are small, round fruits that come in various colors including red, green, and purple. They are known for their sweet flavor and are often used in making wine, juices, and raisins. Grapes are a good source of vitamins C and K, and antioxidants.</p>
        </div>
    );
};

export default GrapeInfo;
