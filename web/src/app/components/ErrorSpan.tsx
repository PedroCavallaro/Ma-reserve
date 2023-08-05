export default function ErrorSpan({ text }: { text: string }) {
    return (
        <>
            <span className="text-red-600 text-sm">{text}</span>
        </>
    );
}
