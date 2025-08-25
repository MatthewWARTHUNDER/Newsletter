import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import iconeWhite from "../assets/iconeWhite.svg";
import logomindtech from "../assets/logomindtech.svg";


export default function Confirmation() {
    return (
        <>
            <Navbar />

            <div className="min-h-screen flex flex-col bg-black-blue-gradient animate-[slideInBottom_1s_ease-in-out]">


                <div className="flex flex-col flex-1 items-center justify-center px-4 space-y-6">
                    <img
                        src={iconeWhite}
                        alt="Confirmado"
                        className="w-20 h-20 "
                    />

                    <div className="p-8 max-w-md w-full text-center rounded-xl">
                        <h1 className="text-3xl font-bold text-white mb-4">Inscrição Confirmada!</h1>
                        <p className="text-white mb-6">
                            Obrigado por se inscrever na nossa newsletter. Você começará a receber atualizações diretamente no seu e-mail.
                        </p>

                        <img
                            src={logomindtech}
                            alt="Confirmado"
                            className="w-40 h-20 ml-28 mb-10"
                        />

                        <Link
                            to="/"
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-150"
                        >
                            Voltar para a NewsLetter
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}
