/**
 * Memperbaiki debouncing button, dimana ketika mengklik satu button dan dengan cepat mengklik button
 * lain hanya mengeluarkan message dari button terakhir
 * 
 * Expected events: Kedua message dari kedua button keluar
 */

// let timeoutID;
import PropTypes from 'prop-types';
import { useRef } from "react";


const DebouncingButton = ({onClick, children}) => {
  const timeoutID = useRef(null);
  return (
    <button onClick={() => {
      clearTimeout(timeoutID);
      timeoutID.current = setTimeout(() => {
        onClick();
      }, 1000);
      // timeoutID = setTimeout(() => {
      //   onClick();
      // }, 1000);
    }}>
      {children}
    </button>
  );
}

const Dashboard = () => {
  return (
    <>
      <DebouncingButton onClick={alert('Spaceship Launched!')}>
        Launch the Spaceship
      </DebouncingButton>
      <DebouncingButton onClick={alert('Sup Boiled!')}>
        Boil the soup
      </DebouncingButton>
      <DebouncingButton onClick={alert('Lullaby sung!')}>
        Sing a lullaby
      </DebouncingButton>
    </>
  )
}

DebouncingButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any
}

export default Dashboard