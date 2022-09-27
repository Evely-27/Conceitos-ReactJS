// import { useHistory } from "react-router-dom";
import { useNavigate} from "react-router-dom"


export const Login = () => {
    // const history = useHistory();
    // const handleClick = () => {
    //     history.push('/home');
    // }
    const navi = useNavigate();
    const handleClick = () => { navi("home")}

    return (
        <div>
            <p>Login</p>

            <button onClick={handleClick}>Ir para Home</button>
        </div>
    )
}

// 2 forma de navegar usando uma função