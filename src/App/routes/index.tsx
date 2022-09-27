import { BrowserRouter, Route , Routes as Container, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Container>
                {/* <Route  path="/entrar" element={< Login />} /> */}
                <Route  path="/home" element={<Dashboard />} />

                <Route  path="*" element={<Navigate to="/home" />} />;

            </Container>
        </BrowserRouter>
    );
}