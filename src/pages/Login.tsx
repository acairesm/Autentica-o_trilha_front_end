import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
        const data = await login(username, password);
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/perfil");
    } catch (err) {
        setError("Usuário ou senha inválidos");
    } finally {
        setLoading(false);
    }
}

    return(
        <div className="flex min-h-screen items-center justify-center">
        <form className="flex flex-col gap-4 w-64">
            <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className=" bg-gray-200 rounded-2xl border border-gray-300 px-4 py-2 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-100"
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-gray-200 rounded-2xl border border-gray-300 px-4 py-2 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-100"
            />
            {error && <p>{error}</p>}

            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Entrar
            </button>
        </form>
        </div>
    )
}

export default Login;
