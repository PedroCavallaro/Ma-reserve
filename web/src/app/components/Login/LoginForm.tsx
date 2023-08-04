"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../Logo";
import { Input } from "../Input";

export default function LoginForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });
    return (
        <form className="bg-white flex flex-col p-2">
            <Logo />
            <div>
                <Input />
            </div>
        </form>
    );
}
