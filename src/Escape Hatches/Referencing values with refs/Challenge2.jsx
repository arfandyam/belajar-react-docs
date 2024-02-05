/**
 * Perbaiki komponen toggle yang akan mengubah text tombol menjadi On dan Off
 */

import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  // let isOnRef = useRef(false);

  return (
    <button onClick={() => {
      // isOnRef.current != isOnRef.current
      setIsOn(!isOn);
    }}>
      {/* {isOnRef.current ? 'On' : 'Off'} */}
      {isOn ? 'On' : 'Off'}
    </button>
  )
}

export default Toggle;