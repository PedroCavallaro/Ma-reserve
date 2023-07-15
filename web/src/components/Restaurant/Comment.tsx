import Image from "next/image"
interface CommentProps{
    comment: string,
    User: {
        name: string,
        image: string
    }
}
export default function Comment(CommentProps: CommentProps) {
    console.log(CommentProps)
    return(
        <div className="rounded-xl shadow-xl w-[11rem] min-h-[70px]">
            <div className="flex gap-2 items-center">
                <Image src={CommentProps.User.image}
                height={6} width={6}
                className="h-6 w-6 rounded-full" alt=""/>
                <p>{CommentProps.User.name}</p>
            </div>
            <p className="p-2 text-sm">{CommentProps.comment}</p>
        </div>
    )
};
