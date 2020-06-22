import React, {DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState} from 'react';
import st from './Input.module.css';

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string | null};

function MyInputNya (props: InputNyaPropsType) {
    const {onEnter, error, ...restProps} = props;

    const HandlerOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            if (onEnter){
                onEnter()
            }
        }
    }



    return (
        <>
            <input onKeyPress={HandlerOnKeyPress} {...restProps} className={st.input_style} type="text"/>
            {error && <div className={st.error_message}>{error}</div>}
        </>
    );
};

export default  MyInputNya;