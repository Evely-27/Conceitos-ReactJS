import { useState } from "react"

export const Login = () => {
// useState = serve para pegar valores digitados, recebe um valor inicial de string vazia
// [] = diz que é um array.
// setAlgo = serve para manipular o valor para ser reenderizado
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const handleEntrar = () =>  {
        console.log(email, senha);

    }

    return (
        <div>
            <form>
                <label>
                    <span>EMAIL:</span>
{/* atribuimos o email para o campo certo, e usamos onChange para pegar o que estar sendo digitado, vindo como um "evento",
e atribuimos ele ao setEmail, e com o target é o input */}
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>SENHA:</span>
                    <input type="password" value={senha } onChange={e => setSenha(e.target.value)} />
                </label>
{/* botão estya nesse tipo para não subimeter o form. */}
                <button type="button" onClick={handleEntrar}>
                    ENTRAR
                </button>

            </form>
        </div>
    )
}

// 2 forma de navegar usando uma função