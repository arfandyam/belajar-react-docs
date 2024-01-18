import { useState } from 'react';
import { initialLetters } from './Data.js';
// import { initialLetters } from './Data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  // const [highlightedLetter, setHighlightedLetter] = useState(null);
  const [highlightedLetterId, setHighlightedLetterId] = useState(null);

  function handleHover(id) {
    // setHighlightedLetter(id);
    setHighlightedLetterId(id);
  }

  function handleStar(starred) {
    setLetters(letters.map(letter => {
      if (letter.id === starred.id) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedLetterId
/*               letter.id === highlightedLetter */
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
