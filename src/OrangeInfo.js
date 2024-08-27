import React from 'react';

const OrangeInfo = () => {
    const pageStyle = {
        backgroundColor: '#ffe0b2',
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
                src="orange2.png"
                alt="Oranges"
                style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
            />
            <h1>All About Oranges</h1>
            <p>Oranges are citrus fruits known for their tangy flavor and high vitamin C content. They are refreshing and packed with nutrients.</p>
        </div>
    );
};

export default OrangeInfo;
