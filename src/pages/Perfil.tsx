import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { perfil } from "../services/auth";

interface UserProfile {
    image: string;
    firstName: string;
    lastName: string;
    email: string;
}

function Perfil() {

    const [user, setUser] = useState<UserProfile | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            navigate("/login");
            return;
        }

        async function fetchPerfil() {
            try {
                const data = await perfil(accessToken);
                setUser(data);
            } catch (err) {
                localStorage.removeItem("accessToken");
                navigate("/login");
            }
        }

        fetchPerfil();
    }, []);

    function handleLogout() {
        localStorage.removeItem("accessToken");
        navigate("/login");
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-4 w-64">
                <img
                    src={user?.image}
                    alt="Foto do perfil"
                    className="w-24 h-24 rounded-full"
                />
                <p>{user?.firstName} {user?.lastName}</p>
                <p>{user?.email}</p>

                <button
                    onClick={handleLogout}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sair
                </button>
            </div>
        </div>
    );
}

export default Perfil;
