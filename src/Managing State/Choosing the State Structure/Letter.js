import PropTypes from 'prop-types';

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}) {
  return (
    <li
      className={
        isHighlighted ? 'highlighted' : ''
      }
      onFocus={() => {
        // onHover(letter);        
        onHover(letter.id);        
      }}
      onPointerMove={() => {
        // onHover(letter);
        onHover(letter.id);
      }}
    >
      <button onClick={() => {
        onToggleStar(letter);
      }}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
    </li>
  )
}

Letter.propTypes = {
  letter: PropTypes.object,
  isHighlighted: PropTypes.bool,
  onHover: PropTypes.func,
  onToggleStar: PropTypes.func,
}

