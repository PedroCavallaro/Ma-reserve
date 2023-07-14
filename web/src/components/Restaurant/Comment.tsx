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
        <div className="rounded-lg shadow-lg min-w-[50px]">
            <div className="flex">
                <img src={CommentProps.User.image}
                className="h-5 w-5 rounded-full" />
                <p>{CommentProps.User.name}</p>
            </div>
            <p>{CommentProps.comment}</p>
        </div>
    )
};
