import CommentCard from "../../components/CommentCard/CommentCard";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import PostDetailCard from "../../components/PostDetailCard/PostDetailCard";
import WriteCommentCard from "../../components/WriteCommentCard/WriteCommentCard";
import styles from "./PostDetail.module.css";

const PostDetail = () => {
  return (
    <HomeLayout>
      <PostDetailCard />
      <WriteCommentCard />
      <CommentCard />
    </HomeLayout>
  );
};

export default PostDetail;
