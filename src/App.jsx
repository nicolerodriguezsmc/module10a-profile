import React from 'react';
import MusicianProfile from './MusicianProfile';

function App() {
    return (
        <div>
            {/* App Title */}
            <h1 style={{ textAlign: 'center' }}>Musician Profile</h1>

            {/* MusicianProfile component with props */}
            <MusicianProfile
                name="Nicole Rodriguez"
                genre="Electronic / Experimental"
                instrument="Synths and Drum Machines"
                funFact="Nicole is an air bass virtuoso and has played in front of thousands of fans."
                imageUrl="https://i.imgur.com/CLvv4V3.jpeg"
            />
        </div>
    );
}

export default App;
