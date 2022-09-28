import { useEffect, useState } from "react"

export const Login = () => {
// 
// 
// 
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

//useEffect: serve para que um bloco não seja renderizado toda vez, pode ser usado quanto quiser
// o [] seria para as dependencias
// só renderiza uma vez, bom exemplo chamar APIs
    useEffect(() => {
        if (window.confirm('Você é mulher?')) {
            console.log('Mulher')
        }else 
        {
            console.log('Homem')
        }

    }, []);

// usando o effect com dependencia, serve para só ser executado quando houver alterações nelas
useEffect(() => {
    console.log(email);
}, [email]);

useEffect(() => {
    console.log(senha);
}, [senha]);

    const handleEntrar = () =>  {
        console.log(email, senha);
    }

    return (
        <div>
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