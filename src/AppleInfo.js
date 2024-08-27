import React from 'react';

const AppleInfo = () => {
    const pageStyle = {
        backgroundColor: '#ffe6e6',
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
                src="apple2.png"
                alt="Apples"
                style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
            />
            <h1>All About Apples</h1>
            <p>Apples are a popular fruit known for their crisp texture and sweet flavor. They are rich in vitamins and fiber.</p>
        </div>
    );
};

export default AppleInfo;
