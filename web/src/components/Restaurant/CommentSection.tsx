import { RestaurantInfo } from "@/interfaces";
import Comment from "./Comment";

export default function CommentSection({Comments}:  Pick<RestaurantInfo, "Comments">) {
    return (
        <section>
            {
                Comments?.map((comment) => {
                    return(
                        <Comment 
                        User={comment.User}
                        comment={comment.comment}
                        />
                    )
                })
            }
          
        </section>   
    )
};
