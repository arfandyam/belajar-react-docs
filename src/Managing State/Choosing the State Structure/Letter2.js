import PropTypes from 'prop-types';

export default function Letter2({
  letter,
  onToggle,
  isSelected,
}) {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}

Letter2.propTypes = {
  letter: PropTypes.object,
  onToggle: PropTypes.func,
  isSelected: PropTypes.bool,
}
