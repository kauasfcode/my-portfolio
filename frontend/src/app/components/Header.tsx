import DescriberTerminal from "./DescriberTerminal";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


export default function Header(){
    return(
        <>
        <header className="relative flex flex-col w-screen h-screen items-center ">
            <h1 className="text-focus-in text-white text-8xl pt-[125px]">Kaua-sousa-felicio.dev</h1>
            <div className=" absolute bottom-0 left-0 m-4 flex flex-col gap-1">
                <div className="flex  text-white gap-1">
                    <CiLinkedin size={35} className="bounce-in-top bounce-in-top-1 " />
                    <FaGithub size={35} className="bounce-in-top bounce-in-top-2"/>
                    <FaInstagram size={35} className="bounce-in-top bounce-in-top-3"/>
                </div>
                <div className="text-focus-in">
                    <DescriberTerminal/>
                </div>
            </div>
        </header>
       
        </>
    )
}