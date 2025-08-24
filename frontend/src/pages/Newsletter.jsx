import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagem from "../assets/imagem.png";
import logomindtech from "../assets/logomindtech.svg";
import icone from "../assets/icone.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await axios.post("http://localhost:3000/postar", { email });
            setEmail("");
            navigate("/confirmation");
        } catch (err) {
            if (err.response) {

                setError(err.response.data.message);
            } else {
                setError("Erro ao cadastrar email.");
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex flex-1 flex-col md:flex-row items-start justify-center px-4 pt-16 gap-8">
                <div className="p-8 rounded-xl max-w-lg text-left animate-[slideInLeft_1s_ease-in-out]">
                    <h1 className="text-3xl font-bold text-white mb-4">Inscreva-se agora!</h1>
                    <p className="text-white mb-6">
                        Preencha o formulário abaixo para se inscrever e comece a receber
                        nossas atualizações diretamente em sua caixa de entrada.
                    </p>

                    <div className="mb-6 text-white">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <img src={icone} alt="Ícone" className="w-5 h-5 mb-2" />
                                <span>
                                    <strong>Guias e Tutoriais:</strong> Aprenda como implementar e
                                    otimizar soluções de IoT.
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src={icone} alt="Ícone" className="w-5 h-5 mb-2" />
                                <span>
                                    <strong>Notícias e Tendências:</strong> Fique por dentro das
                                    últimas novidades do IoT.
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src={icone} alt="Ícone" className="w-5 h-5 mb-2" />
                                <span>
                                    <strong>Ofertas e Promoções:</strong> Receba promoções
                                    exclusivas na newsletter.
                                </span>
                            </li>
                        </ul>
                    </div>


                    <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-2">
                        <label htmlFor="email" className="text-white font-medium">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-99.5 px-6 py-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />


                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-150 cursor-pointer"
                            >
                                Assinar Newsletter
                            </button>

                            <Link to={'/Cancelar'}>
                                <button
                                    type="button"
                                    className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-150 cursor-pointer"
                                >
                                    Cancelar Inscrição
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>


                <div className="flex flex-col items-center justify-start gap-6">
                    <div className="relative max-w-sm w-full">
                        <img
                            src={imagem}
                            alt="Ilustração"
                            className="w-full rounded-xl shadow-lg mt-5 animate-[slideInRight_1s_ease-in-out]"
                        />
                        <img
                            src={logomindtech}
                            alt="Logo MindTech"
                            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 max-w-xs w-1/2 animate-[slideInUp_1s_ease-in-out]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
