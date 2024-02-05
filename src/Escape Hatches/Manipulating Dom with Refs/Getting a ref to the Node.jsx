/**
 * Inisialisasi ref bervalue null. ketika react membuat DOM, react akan menempatkan reference ke
 * node yang diberikan nilai ref tersebut. Sehingga kita bisa mengakses DOM node tersebut dari
 * event handler
 * 
 * Contoh: Memberi focus pada text input
 */

import { useRef } from "react";

const TextFocus = () => {
  const focusRef = useRef(null);

  const handleFocus = () => {
    focusRef.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref = {focusRef}
      />
      <button onClick={handleFocus}>
        Focus the input
      </button>
    </div>
  )
}

export default TextFocus;