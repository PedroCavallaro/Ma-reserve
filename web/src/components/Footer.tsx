import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Logo from "./Logo";

export default function Footer() {
    return (
        <section className="p-2 bg-zinc-100 flex justify-between">
            <div className="flex flex-col gap-5">
                <Logo />
                <p>endereçoe</p>
                <div className="flex gap-2">
                    <BsLinkedin size={26} />
                    <BsFacebook size={26} />
                    <BsInstagram size={26} />
                </div>
            </div>
            <div className="flex gap-5 mt-4">
                <div className="flex flex-col">
                    <p>Não sei</p>
                    <p>a</p>
                </div>
                <div>
                    <p>Não sei</p>
                    <p>a</p>
                </div>
            </div>
        </section>
    );
}
