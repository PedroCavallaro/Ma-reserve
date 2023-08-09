import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import { PiGoogleLogo } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/constants";
import { api } from "@/lib/api";
import { setToken } from "@/services/auth";
export default function GoogleButton() {
    const router = useRouter();
    const login = useGoogleLogin({
        onSuccess: async (token) => {
            const { access_token } = token;
            await api
                .post("/login/google", {
                    code: access_token,
                })
                .then((res) => {
                    const { token } = res.data;
                    setToken(token);
                    router.push(routes.HOME);
                });
        },
    });
    return (
        <>
            <button
                className="overflow-hidden rounded-full"
                onClick={() => login()}
            >
                <PiGoogleLogo size={30} />
            </button>
        </>
    );
}
