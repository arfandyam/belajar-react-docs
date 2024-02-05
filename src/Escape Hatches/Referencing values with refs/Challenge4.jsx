import { useRef, useState } from "react";

const ChatRef2 = () => {
  const [text, setText] = useState('');
  const textRef = useRef(null);

  const handleClick = () => {
    setTimeout(() => {
      alert('Sending: ', textRef.current);
      // alert('Sending: ', text);
    }, 3000)
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          textRef.current = e.target.value;
        }}
      />
      <button onClick={handleClick}>
        Send
      </button>
    </>
  )
}

export default ChatRef2;