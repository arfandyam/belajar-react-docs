import PropTypes from 'prop-types';
import { LevelContext } from './LevelContext';
import { useContext } from 'react';

export default function Section({children}){
  const level = useContext(LevelContext);
  return (
    /**
     * STEP 3:
     * Menyediakan konteks pada komponen parentnya
     * Bagian yang akan digunakan child component dibungkus ke dalam context provider
     * Hal itu untuk memberi tahu bahwa bila ada komponen didalam komponen Section maka berikan
     * prop 'level'
     */
    <section className="section">
      {/* 
      Karena context dapat membaca prop dari komponen diatasnya, maka setiap komponen Section dapat 
      membaca props dari Komponen selanjutnya sehingga value level dapat di increment dan tanpa
      menentukan value level untuk setiap komponen section
      */}
      <LevelContext.Provider value={level+1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}

Section.propTypes = {
  level: PropTypes.number,
  children: PropTypes.any
}