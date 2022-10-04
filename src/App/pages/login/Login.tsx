import { useCallback, useMemo, useRef, useState } from "react";


import { InputLogin } from "./components/inputLoging";

export const Login = () => {
// useRef  = guarda algum valor que pode ser alterado sem precisar cirar um novo render, até que  mudemos ele.
// pega a referencia de um elemento html
// devemos passar a variavel para o elemento que queremos resgatar de referencia

// const inputPasswordRef = useRef<HTMLInputElement>(null);


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
                <InputLogin
                label="Email"
                value={email}
                onChange={newValue => setEmail(newValue)}
                // onPressEnter= {() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                label="Senha"
                type="password"
                value={senha}
                onChange={newValue => setSenha(newValue)}
                />


                <button type="button" onClick={handleEntrar}>
                    ENTRAR
                </button>

            </form>
        </div>
    )
}

// 2 forma de navegar usando uma função