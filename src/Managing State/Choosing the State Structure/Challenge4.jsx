import { useState } from 'react';
import { initialLetters } from './Data.js';
import Letter2 from './Letter2.js';

export default function MailClient() {
  // const [selectedId, setSelectedId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    // setSelectedId(toggledId);
    if(selectedIds.includes(toggledId)){
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== toggledId));
    } else {
      setSelectedIds([
        ...selectedIds,
        toggledId
      ]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {initialLetters.map(letter => (
          <Letter2
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
/*                letter.id === selectedId */
               selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
