
// para tizer que é uma variavel opcional, por um ? no fim do nome.
// podemos passar funções para o component tb

import React from "react";

// interface de tipagem de um componente
interface IInputLogingProps {
    label: string;
    value: string;
    type?: string

    onChange: (newValue:string) => void;
    onPressEnter?: () => void;
}
// utilizamos o React.forwardRef para poder usar o ref em componentes, normalmemnte não muito usado.
export const InputLogin = React.forwardRef<HTMLInputElement,IInputLogingProps>((props,ref) => {
    return (
        <label>
        <span>{props.label}</span>

        <input 
        ref={ref}
        type={props.type}
        value={props.value} 
        onChange={e => props.onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter' 
        ? props.onPressEnter && props.onPressEnter() 
        : undefined}
        />
    </label>
    );
});