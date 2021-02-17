import React from 'react';
import s from './device.module.css';
import { IMacFamily } from "../../../../types/macs"
import { getImg, imgs } from "../../utils/getImg";


type DeviceProps = {
  id: IMacFamily
  title: IMacFamily
  onChangeFamily: (macFamily: IMacFamily) => void
}

const productBuyStatus="Buy Now" 


export const Device = ({ id, title, onChangeFamily }: DeviceProps) => {
  const img = getImg(imgs, id)
  
  return (
    <li className={s.device} >
      <div className={s.link} onClick={() => onChangeFamily(id)}>
        <div className={s.wrapImg}>
          <img src={img} alt={img} className={s.img} />
        </div>
        <h4 className={s.title} >{title}</h4>
      </div>
      <div className={s.status}>
        <div className={s.productBuyStatus}>{productBuyStatus}</div>
      </div>
    </li>
  )
}