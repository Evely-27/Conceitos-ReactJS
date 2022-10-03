import { useCallback, useMemo, useState } from "react"

export const Login = () => {

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');



// ao usar o useMemo = armazenar o calculo na memoria, parecido com o effect,
// ao mudar o valor de email é que ele vai calcular o novo valor, necessita de dependecia para saber o que mudar.
// permite calculos sem alterar todos os useState, só o que ele quer.
    const emailLength = useMemo(() => {
        // console.log("Executou!!")
        return email.length * 200;
    }, [email.length]);


// useCallback = ele memoriza funções na memoria. Se não houver o array de dependeica não altera a função

    const handleEntrar = useCallback(() =>  {
        console.log(email, senha);
    },[email, senha]);

    return (
        <div>
            <p>Quantidade de caracteres dentro de email: {emailLength}</p>
            <form>
                <label>
                    <span>EMAIL:</span>

                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>SENHA:</span>
                    <input type="password" value={senha } onChange={e => setSenha(e.target.value)} />
                </label>

                <button type="button" onClick={handleEntrar}>
                    ENTRAR
                </button>

            </form>
        </div>
    )
}

// 2 forma de navegar usando uma função