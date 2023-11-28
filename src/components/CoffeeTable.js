import React from 'react'
import TapeRecorder from "./TapeRecorder";
import HaroldBudd from "./HaroldBudd";
import { KateBush } from "./KateBush";
import HundredYearsBook from './HundredYearsBook';
import KensingtonBook from './KensingtonBook';
import Note from "./Note"

const CoffeeTable = () => {

  return (
    <div className='container'>
        <div className='row' id='coffee-table-row'>
            <div className='col'>
                <TapeRecorder />
            </div>
            <div className='col'>
                <Note />
            </div>
            <div className='col'>
                <HaroldBudd />
            </div>
            <div className='col'>
                <KateBush />
            </div>
            <div className='col'>
                <HundredYearsBook />
            </div>
            <div className='col'>
                <KensingtonBook />
            </div>
            
        </div>
        
    </div>
  )
}

export default CoffeeTable