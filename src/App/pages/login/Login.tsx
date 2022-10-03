import { useCallback, useMemo, useRef, useState } from "react"

export const Login = () => {
// useRef  = guarda algum valor que pode ser alterado sem precisar cirar um novo render, até que  mudemos ele.
// pega a referencia de um elemento html
// devemos passar a variavel para o elemento que queremos resgatar de referencia
const inputPasswordRef = useRef<HTMLInputElement>(null);


    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const emailLength = useMemo(() => {
        // console.log("Executou!!")
        return email.length * 200;
    }, [email.length]);

    const handleEntrar = useCallback(() =>  {
        console.log(email, senha);
    },[email, senha]);

    return (
        <div>
            <p>Quantidade de caracteres dentro de email: {emailLength}</p>
            <form>
                <label>
                    <span>EMAIL:</span>

                    <input type="text" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
                    />
                </label>

                <label>
                    <span>SENHA:</span>
                    <input type="password" 
                    value={senha } 
                    ref= {inputPasswordRef}
                    onChange={e => setSenha(e.target.value)} />
                </label>

                <button type="button" onClick={handleEntrar}>
                    ENTRAR
                </button>

            </form>
        </div>
    )
}

// 2 forma de navegar usando uma função