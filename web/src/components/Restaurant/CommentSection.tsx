import { RestaurantInfo } from "@/interfaces";
import Comment from "./Comment";

export  function CommentSection({Comments}:  Pick<RestaurantInfo, "Comments">) {
    return (
        <section className="relative flex flex-col gap-2">
            <h2 className="text-orange-orangePrimary ">Comentários</h2>
            <div className="flex flex-wrap w-[100%] gap-3">
                {
                    Comments?.map((comment, index) => {
                        return(
                            <Comment
                            key={index.toString()} 
                            User={comment.User}
                            comment={comment.comment}
                            />
                        )
                    })
                }
            </div>
          
        </section>   
    )
};
