/**
 * Ref dan state dapat di kombinasikan pada satu komponen
 * 
 * Dalam membuat stopwatch, kita memerlukan suatu penyimpan informasi untuk menampilkan berapa lama
 * waktu dari awal mulai sampai akhir stopwatch
 */

import { useState, useRef } from "react";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }


  const handleStop = () => {
    clearInterval(intervalRef.current);
  }
  
  let secondsPassed = 0;
  
  if (startTime != null && now !== null){
    secondsPassed = (now - startTime) / 1000;
  }
  
  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  )
}

export default Stopwatch;

/**
 * Perbedaan antara ref dan state adalah :
 * 1. Tidak memicu re-render ketika mengalami perubahan
 * 2. Dapat melakukan perubahan atau perbaharuan current value diluar proses rendering
 * 3. Tidak boleh melakukan read (or write) current value selama rendering
 */
