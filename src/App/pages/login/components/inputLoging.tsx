
// para tizer que é uma variavel opcional, por um ? no fim do nome.
// podemos passar funções para o component tb

// interface de tipagem de um componente
interface IInputLogingProps {
    label: string;
    value: string;
    type?: string

    onChange: (newValue:string) => void;
    onPressEnter?: () => void;
}

export const InputLogin:React.FC<IInputLogingProps> = (props) => {
    return (
        <label>
        <span>{props.label}</span>

        <input type={props.type} 
        value={props.value} 
        onChange={e => props.onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter' 
        ? props.onPressEnter && props.onPressEnter() 
        : undefined}
        />
    </label>
    );
}