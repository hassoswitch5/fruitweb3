import React from 'react';

const BananaInfo = () => {
    const pageStyle = {
        backgroundColor: '#fff9c4',
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
                src="banana2.png"
                alt="Bananas"
                style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
            />
            <h1>All About Bananas</h1>
            <p>Bananas are a widely consumed fruit known for their sweetness and high potassium content. They are an excellent source of vitamins and energy.</p>
        </div>
    );
};

export default BananaInfo;
