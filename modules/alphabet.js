// Alphabet Learning Module
export function loadAlphabetModule() {
  const alphabetData = [
    { letter: 'A', word: 'Apple', emoji: '🍎', color: 'bg-red-400' },
    { letter: 'B', word: 'Ball', emoji: '⚽', color: 'bg-blue-400' },
    { letter: 'C', word: 'Cat', emoji: '🐱', color: 'bg-green-400' },
    { letter: 'D', word: 'Dog', emoji: '🐶', color: 'bg-yellow-400' },
    { letter: 'E', word: 'Elephant', emoji: '🐘', color: 'bg-purple-400' },
    { letter: 'F', word: 'Fish', emoji: '🐟', color: 'bg-cyan-400' },
    { letter: 'G', word: 'Giraffe', emoji: '🦒', color: 'bg-orange-400' },
    { letter: 'H', word: 'House', emoji: '🏠', color: 'bg-pink-400' },
    { letter: 'I', word: 'Ice Cream', emoji: '🍦', color: 'bg-indigo-400' },
    { letter: 'J', word: 'Jump', emoji: '🤸', color: 'bg-teal-400' },
    { letter: 'K', word: 'Kite', emoji: '🪁', color: 'bg-red-400' },
    { letter: 'L', word: 'Lion', emoji: '🦁', color: 'bg-yellow-400' },
    { letter: 'M', word: 'Monkey', emoji: '🐵', color: 'bg-green-400' },
    { letter: 'N', word: 'Nest', emoji: '🪺', color: 'bg-blue-400' },
    { letter: 'O', word: 'Orange', emoji: '🍊', color: 'bg-orange-400' },
    { letter: 'P', word: 'Penguin', emoji: '🐧', color: 'bg-gray-400' },
    { letter: 'Q', word: 'Queen', emoji: '👑', color: 'bg-purple-400' },
    { letter: 'R', word: 'Rainbow', emoji: '🌈', color: 'bg-pink-400' },
    { letter: 'S', word: 'Sun', emoji: '☀️', color: 'bg-yellow-400' },
    { letter: 'T', word: 'Tree', emoji: '🌳', color: 'bg-green-400' },
    { letter: 'U', word: 'Umbrella', emoji: '☂️', color: 'bg-blue-400' },
    { letter: 'V', word: 'Van', emoji: '🚐', color: 'bg-indigo-400' },
    { letter: 'W', word: 'Whale', emoji: '🐳', color: 'bg-cyan-400' },
    { letter: 'X', word: 'X-ray', emoji: '🩻', color: 'bg-gray-400' },
    { letter: 'Y', word: 'Yo-yo', emoji: '🪀', color: 'bg-red-400' },
    { letter: 'Z', word: 'Zebra', emoji: '🦓', color: 'bg-purple-400' }
  ];

  let currentIndex = 0;
  let gameMode = 'flashcards';

  const moduleBody = document.getElementById('module-body');
  
  moduleBody.innerHTML = `
    <div class="text-center mb-6">
      <div class="flex justify-center space-x-4 mb-6">
        <button onclick="setAlphabetMode('flashcards')" id="flashcard-btn" class="bg-kid-blue text-white px-6 py-3 rounded-full font-bold shadow-lg">
          📚 Flashcards
        </button>
        <button onclick="setAlphabetMode('game')" id="game-btn" class="bg-gray-400 text-white px-6 py-3 rounded-full font-bold shadow-lg">
          🎮 Matching Game
        </button>
      </div>
    </div>
    
    <div id="alphabet-content"></div>
  `;

  function setAlphabetMode(mode) {
    gameMode = mode;
    document.getElementById('flashcard-btn').className = mode === 'flashcards' 
      ? 'bg-kid-blue text-white px-6 py-3 rounded-full font-bold shadow-lg'
      : 'bg-gray-400 text-white px-6 py-3 rounded-full font-bold shadow-lg';
    
    document.getElementById('game-btn').className = mode === 'game' 
      ? 'bg-kid-blue text-white px-6 py-3 rounded-full font-bold shadow-lg'
      : 'bg-gray-400 text-white px-6 py-3 rounded-full font-bold shadow-lg';
    
    if (mode === 'flashcards') {
      showFlashcards();
    } else {
      showMatchingGame();
    }
  }

  function showFlashcards() {
    const content = document.getElementById('alphabet-content');
    const item = alphabetData[currentIndex];
    
    content.innerHTML = `
      <div class="max-w-md mx-auto">
        <div class="text-center mb-6">
          <div class="text-lg text-gray-600">${currentIndex + 1} of ${alphabetData.length}</div>
          <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div class="bg-kid-blue h-2 rounded-full transition-all duration-300" style="width: ${((currentIndex + 1) / alphabetData.length) * 100}%"></div>
          </div>
        </div>
        
        <div class="card-hover ${item.color} rounded-3xl p-12 text-white text-center shadow-xl mb-6 cursor-pointer" onclick="pronounceLetter()">
          <div class="text-8xl mb-4">${item.letter}</div>
          <div class="text-6xl mb-4">${item.emoji}</div>
          <div class="text-3xl font-bold mb-2">${item.word}</div>
          <div class="text-lg opacity-80">Tap to hear!</div>
        </div>
        
        <div class="flex justify-between">
          <button onclick="previousLetter()" ${currentIndex === 0 ? 'disabled' : ''} 
                  class="bg-gray-500 hover:bg-gray-600 disabled:opacity-50 text-white px-6 py-3 rounded-full font-bold shadow-lg">
            ← Previous
          </button>
          <button onclick="nextLetter()" ${currentIndex === alphabetData.length - 1 ? 'disabled' : ''} 
                  class="bg-kid-green hover:bg-green-600 disabled:opacity-50 text-white px-6 py-3 rounded-full font-bold shadow-lg">
            Next →
          </button>
        </div>
      </div>
    `;
  }

  function showMatchingGame() {
    // Create a matching game with 4 letters and their corresponding words
    const gameItems = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * alphabetData.length);
      gameItems.push(alphabetData[randomIndex]);
    }
    
    // Shuffle words
    const shuffledWords = [...gameItems].sort(() => Math.random() - 0.5);
    
    const content = document.getElementById('alphabet-content');
    content.innerHTML = `
      <div class="text-center mb-6">
        <h3 class="text-2xl font-bold text-kid-blue mb-2">Match the Letters!</h3>
        <p class="text-gray-600">Drag each letter to its matching word</p>
      </div>
      
      <div class="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="space-y-4">
          <h4 class="text-xl font-bold text-center text-kid-purple">Letters</h4>
          ${gameItems.map(item => `
            <div class="letter-card ${item.color} rounded-2xl p-6 text-white text-center cursor-move shadow-lg" 
                 data-letter="${item.letter}" 
                 ondragover="allowDrop(event)">
              <div class="text-4xl font-bold">${item.letter}</div>
              <div class="text-2xl">${item.emoji}</div>
            </div>
          `).join('')}
        </div>
        
        <div class="space-y-4">
          <h4 class="text-xl font-bold text-center text-kid-purple">Words</h4>
          ${shuffledWords.map(item => `
            <div class="word-drop-zone border-4 border-dashed border-gray-300 rounded-2xl p-6 text-center transition-all duration-200" 
                 data-word="${item.word}" 
                 data-letter="${item.letter}"
                 ondragover="allowDrop(event)" 
                 ondrop="dropLetter(event)">
              <div class="text-2xl font-bold text-gray-600">${item.word}</div>
              <div class="text-sm text-gray-500 mt-2">Drop ${item.letter} here</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="text-center mt-8">
        <button onclick="resetMatchingGame()" class="bg-kid-orange text-white px-6 py-3 rounded-full font-bold shadow-lg">
          🔄 New Game
        </button>
      </div>
    `;
    
    // Make letters draggable
    document.querySelectorAll('.letter-card').forEach(card => {
      makeDraggable(card);
    });
  }

  // Global functions for alphabet module
  window.setAlphabetMode = setAlphabetMode;
  
  window.nextLetter = function() {
    if (currentIndex < alphabetData.length - 1) {
      currentIndex++;
      showFlashcards();
      app.playSound('click');
    }
  };
  
  window.previousLetter = function() {
    if (currentIndex > 0) {
      currentIndex--;
      showFlashcards();
      app.playSound('click');
    }
  };
  
  window.pronounceLetter = function() {
    const item = alphabetData[currentIndex];
    app.speak(`The letter ${item.letter}. ${item.letter} for ${item.word}. ${item.word}.`);
    app.awardStars('alphabet', 1);
    app.playSound('success');
  };
  
  window.allowDrop = function(ev) {
    ev.preventDefault();
  };
  
  window.dropLetter = function(ev) {
    ev.preventDefault();
    const dropZone = ev.currentTarget;
    const draggedElements = document.querySelectorAll('.letter-card[style*="translate"]');
    const letterCard = draggedElements[draggedElements.length - 1]; // Get the most recently dragged element
    
    if (letterCard && letterCard.dataset.letter === dropZone.dataset.letter) {
      dropZone.innerHTML = `
        <div class="text-4xl mb-2">${letterCard.querySelector('.text-4xl').textContent} ${letterCard.querySelector('.text-2xl').textContent}</div>
        <div class="text-lg font-bold text-green-600">✅ Correct!</div>
      `;
      dropZone.classList.add('bg-green-100', 'border-green-400');
      letterCard.style.display = 'none';
      
      app.playSound('success');
      app.awardStars('alphabet', 2);
      
      // Check if all matches are complete
      const remainingCards = document.querySelectorAll('.letter-card[style="display: none;"]');
      if (remainingCards.length === 4) {
        setTimeout(() => {
          app.showConfetti();
          app.awardStars('alphabet', 3);
        }, 500);
      }
    } else {
      app.playSound('error');
      // Reset letter position
      if (letterCard) {
        letterCard.style.transform = '';
      }
    }
  };
  
  window.resetMatchingGame = function() {
    showMatchingGame();
    app.playSound('click');
  };

  // Initialize with flashcards
  setAlphabetMode('flashcards');
}
