import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

import s from './MyNewButton.module.css';

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;


const MyButtonNya = (props: ButtonNyaPropsType) => {
    return (
       <div>
           <button className={s.buttonnya} {...props}>{props.value}</button>
       </div>
    )
};


export default MyButtonNya;