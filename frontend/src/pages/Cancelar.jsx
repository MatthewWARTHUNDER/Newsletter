import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cancelar() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function CancelarEmail() {
        try {
            const res = await axios.delete(`http://localhost:3000/excluir/${email}`);
            setMessage(res.data);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage("Email não encontrado.");
            } else {
                setMessage("Erro ao cancelar inscrição. Tente novamente.");
            }
        }
    }

    function HandleDelete(e) {
        e.preventDefault();
        CancelarEmail();
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center p-4 text-text">
                <div className="p-8 rounded-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white animate-[slideInBottom_1s_ease-in-out]">
                        Cancelar Inscrição
                    </h2>
                    <form onSubmit={HandleDelete} className="space-y-4 animate-[slideInUp_1s_ease-in-out]">
                        <div>
                            <label htmlFor="email" className="text-white font-medium">Email da Inscrição</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-6 py-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-600"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full font-semibold bg-red-600 text-white py-2 px-4  rounded-md hover:bg-red-700 transition duration-300 cursor-pointer"
                        >
                            Cancelar Inscrição
                        </button>

                        <Link to="/">
                            <button
                                type="button"
                                className="w-full font-semibold text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                            >
                                Voltar para Newsletter
                            </button>
                        </Link>

                    </form>
                    {message && <p className="mt-4 text-center text-white font-semibold">{message}</p>}
                </div>
            </div>
        </>
    );
}
