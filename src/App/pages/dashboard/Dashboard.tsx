import { useRef } from "react"
import { Link } from "react-router-dom"

export const Dashboard = () => {
    // estamos passando pára o ref um objeto, sem necessidade de tipagem quando já o damos valor.
    // como não usa state, ele atualiza, porém não renderiza na tela.
    const counterRef = useRef( 0);


    return (
        <div>
            <p>Dashboard</p>
            <Link to="/entrar">Ir para Login</Link>
            <br></br>

            <p>Contador: {counterRef.current}</p>

        <button onClick={() => counterRef.current++}>Somar</button>
        <br></br>
        <button onClick={() => console.log(counterRef.current)}>Console</button>



        </div>

    )
}