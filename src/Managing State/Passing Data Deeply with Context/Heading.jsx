import PropTypes from 'prop-types'
import { useContext } from "react";
import { LevelContext } from './LevelContext';

export default function Heading({ children }) {
  /**
 * STEP 2:
 * Menggunakan context yang telah dibuat
 * dan menghilangkan seluruh prop level untuk masing2 heading, sediakan pada tree diatasnya
 */
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    case 6:
      return <h6>{children}</h6>
    default:
      throw Error('Unknown level: ' + level)
  }
}

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.any
}