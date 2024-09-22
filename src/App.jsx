import React from 'react';
import './App.css';

function App() {
    const imageNum = 10;

    const addNewImages = () => {
        const imageContainerEl = document.querySelector('.image-container');
        for (let index = 0; index < imageNum; index++) {
            const newImgEl = document.createElement('img');
            newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
            imageContainerEl.appendChild(newImgEl);
        }
    };

    return (
        <div>
            <div className="image-container">
                <img src="https://picsum.photos/300?random=1" alt="Random 1" />
                <img src="https://picsum.photos/300?random=2" alt="Random 2" />
                <img src="https://picsum.photos/300?random=3" alt="Random 3" />
            </div>
            <button className="btn" onClick={addNewImages}>Load More</button>
        </div>
    );
}

export default App;
