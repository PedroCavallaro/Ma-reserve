import GoogleButton from "./GoogleButton";

export default function SocialLogin() {
    return (
        <div className="flex items-center gap-3 justify-center">
            <GoogleButton />
            {/* <div className="rounded-full w-12 h-12 bg-gray-600"></div> */}
        </div>
    );
}
