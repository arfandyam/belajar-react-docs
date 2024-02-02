/**
 * Perbaiki komponen ketika dalam proses sending tetapi memencet undo tidak membatalkan (tetap
 * mengirimkan alert 'Sent!') pengiriman pesan.
 * Expected event: Tidak mengirim alert ('Sent!')
 */

import { useState, useRef } from "react"

const ChatRef = () => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  // let timeoutID = null;
  let timeoutId = useRef(null);

  const handleSend = () => {
    setIsSending(true);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
    // timeoutID = setTimeout(() => {
    //   alert('Sent!');
    //   setIsSending(false);
    // }, 3000);
  }

  const handleUndo = () => {
    setIsSending(false);
    // clearTimeout(timeoutID);
    clearTimeout(timeoutId.current);
  }
  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button 
        onClick={handleSend}
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending && (
        <button onClick={handleUndo}>
          Undo
        </button>
      )}
    </div>
  )
}

export default ChatRef;