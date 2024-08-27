import React from 'react';

const MangoInfo = () => {
    const pageStyle = {
        backgroundColor: '#ffecb3',
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
                src="mango2.png"
                alt="Mangos"
                style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
            />
            <h1>All About Mangos</h1>
            <p>Mangos are a tropical stone fruit known for their sweet, juicy flesh and rich flavor. They are a great source of vitamins A and C and antioxidants.</p>
        </div>
    );
};

export default MangoInfo;
