import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import { PiGoogleLogo } from "react-icons/pi";

export default function GoogleButton() {
    const login = useGoogleLogin({
        onSuccess: async (token) => {
            const { access_token } = token;
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
