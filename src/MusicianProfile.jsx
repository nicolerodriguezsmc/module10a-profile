import React from 'react';

function MusicianProfile(props) {
    const { name, genre, instrument, funFact, imageUrl } = props;

    // Use useState to toggle visibility of the fun fact
    const [showFunFact, setShowFunFact] = React.useState(false);

    // Function to toggle fun fact on button click
    const toggleFunFact = () => {
        setShowFunFact(!showFunFact);
    };

    return (
        <div style={{
            maxWidth: '350px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '12px',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            margin: '20px auto',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            {/* Profile Image */}
            <img
                src={imageUrl}
                alt={`${name}'s profile`}
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '12px'
                }}
            />

            {/* Name and Basic Info */}
            <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
            <p style={{ margin: '4px 0', fontSize: '16px' }}>{genre} musician • Plays {instrument}</p>

            {/* Toggle Button */}

