import React, { useState, useEffect, useRef } from 'react';

const Game = () => {
  const [lose, setLose] = useState(false); // To track if the game is lost
  const [score, setScore] = useState(0); // Current score
  const [blockImage, setBlockImage] = useState('pictures/block1.png'); // Block image state
  const characterRef = useRef(null);
  const blockRef = useRef(null);
  const startButtonRef = useRef(null);
  const gameAreaRef = useRef(null);
  const scoreIntervalRef = useRef(null);
  const collisionIntervalRef = useRef(null);

  const blockImages = [
    'pictures/block1.png',
    'pictures/block2.png',
    'pictures/block3.png',
  ];

  // Preload block images
  const preloadImages = (images, callback) => {
    let loadedImages = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          callback();
        }
      };
    });
  };

  // Function to start the score timer
  const startScoreTimer = () => {
    scoreIntervalRef.current = setInterval(() => {
      if (!lose) {
        setScore((prevScore) => prevScore + 1);
      }
    }, 100); // Update score every 100ms
  };

  useEffect(() => {
    preloadImages(blockImages, () => {
      console.log('Images preloaded.');
    });

    const jump = () => {
      const character = characterRef.current;
      if (!character.classList.contains('animate') && !lose) {
        character.classList.add('animate');
        setTimeout(() => {
          character.classList.remove('animate');
        }, 1000); // Keep the jump animation for 1 second
      }
    };

    // Block collision detection
    const checkCollision = () => {
      const character = characterRef.current;
      const block = blockRef.current;

      const characterRect = character.getBoundingClientRect();
      const blockRect = block.getBoundingClientRect();

      if (
        characterRect.right > blockRect.left &&
        characterRect.left < blockRect.right &&
        characterRect.bottom > blockRect.top &&
        characterRect.top < blockRect.bottom
      ) {
        block.style.animation = 'none'; // Stop block animation on collision
        setLose(true); // End the game
      }
    };

    // Change block image after each animation cycle
    const changeBlockImage = () => {
      const randomImage =
        blockImages[Math.floor(Math.random() * blockImages.length)];
      setBlockImage(randomImage);
    };

    // Set up collision check interval
    collisionIntervalRef.current = setInterval(() => {
      if (!lose) {
        checkCollision();
      }
    }, 10);

    // Add event listener for game area click to trigger jump
    const gameArea = gameAreaRef.current;
    gameArea.addEventListener('click', jump);

    // Button click listener
    const startButton = startButtonRef.current;
    startButton.addEventListener('click', () => {
      if (lose) {
        resetGame();
      } else {
        startGame();
      }
    });

    // Block animation change on iteration
    const block = blockRef.current;
    block.addEventListener('animationiteration', changeBlockImage);

    return () => {
      // Clean up on unmount
      clearInterval(scoreIntervalRef.current);
      clearInterval(collisionIntervalRef.current);
      gameArea.removeEventListener('click', jump);
      startButton.removeEventListener('click', () => {
        if (lose) {
          resetGame();
        } else {
          startGame();
        }
      });
      block.removeEventListener('animationiteration', changeBlockImage);
    };
  }, [lose]);

  // Function to start the game
  const startGame = () => {
    setScore(0);
    setLose(false);
    startScoreTimer(); // Ensure score timer starts when game begins
    const block = blockRef.current;
    block.style.animation = 'block 2.3s infinite linear';
    block.style.display = 'block';
    const startButton = startButtonRef.current;
    startButton.style.display = 'none';
  };

  // Function to reset the game
  const resetGame = () => {
    setScore(0);
    setLose(false);
    const block = blockRef.current;
    block.style.animation = 'block 2.3s infinite linear';
    block.style.display = 'block';
    const startButton = startButtonRef.current;
    startButton.style.display = 'none';
  };

  return (
    <div className="relative" ref={gameAreaRef}>
      {/* Game Area */}
      <div
        id="game"
        className="w-screen h-[50vh] border-[5vh] border-gradient-to-b from-gray-600 to-gray-900 overflow-hidden relative"
      >
        {/* Character */}
        <div
          ref={characterRef}
          id="character"
          className="absolute w-[5vw] h-[15vh] bg-cover bg-center bottom-0 left-[10vw] z-30"
          style={{ backgroundImage: `url('pictures/Stalp.png')` }}
        ></div>

        {/* Block */}
        <div
          ref={blockRef}
          id="block"
          className="absolute w-[5vw] h-[8vh] bg-cover bg-center bottom-0 left-[100vw] z-10"
          style={{ backgroundImage: `url(${blockImage})` }}
        ></div>
      </div>

      {/* Score */}
      <div className="absolute top-[8vh] left-1/2 transform -translate-x-1/2 text-center z-40">
        <div className="text-[4vh] font-bold text-yellow-500">
          SCORE: <div className="text-yellow-300">{score.toString().padStart(6, '0')}</div>
        </div>
      </div>

      {/* Start Button */}
      {!lose && (
        <button
          ref={startButtonRef}
          id="startButton"
          className="block mx-auto my-5 px-[2.5vw] py-[5vh] text-[2vh] font-bold font-sans text-gray-900 bg-yellow-500 rounded-full hover:bg-orange-500 z-20"
        >
          Start Game
        </button>
      )}

      {/* Game Over Button */}
      {lose && (
        <button
          ref={startButtonRef}
          id="startButton"
          className="block mx-auto my-5 px-[2.5vw] py-[5vh] text-[2vh] font-bold font-sans text-gray-900 bg-red-500 rounded-full hover:bg-red-700 z-20"
        >
          You Lost! Click to Restart
        </button>
      )}
    </div>
  );
};

export default Game;
