import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import s from './macsByYear.module.css'
import { macsModelSortByYear } from './utils/macsModelSortByYear'
import img from '../../img/imac_300.png'
import { Link } from 'react-router-dom';

export function MacsByYear() {
  const macs = useSelector((state: IRootState) => state.macs.entities);
  const [year, setYear] = useState('')
  const macsByYear = macsModelSortByYear(macs);
  
  return (
    <ul className={s.list}>
      {Object.keys(macsByYear).map(year => 
        <li className={s.item} onClick={() => setYear(year)}>
          <Link to={`/${year}`}>
            <img src={img} className={s.img}/>
            <div>{year}</div>
          </Link>
        </li>
      )
    }
   </ul>
  )
}