import { useEffect, useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import ExploreNavigation from "../../components/ExploreNavigation/ExploreNavigation";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import PostCard from "../../components/PostCard/PostCard";
import { useData } from "../../context/DataContext";
import styles from "./Explore.module.css";
const Explore = () => {
  const {
    data: { postsData, pagedPosts },
    getPagedPosts,
  } = useData();

  const [pageNum, setPageNum] = useState(0);
  const bottom = useRef(null);

  useEffect(() => {
    getPagedPosts(pageNum);
  }, [pageNum, postsData]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => setPageNum((prev) => prev + 1), 1000);
      }
    });
    observer.observe(bottom.current);
  }, []);

  return (
    <HomeLayout>
      <ExploreNavigation />
      {pagedPosts?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}

      <div ref={bottom} className={styles.bottomRef}>
        {pagedPosts.length === postsData.length ? (
          ""
        ) : (
          <TailSpin
            height="40"
            width="40"
            color="#ff0060"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        )}
      </div>
    </HomeLayout>
  );
};

export default Explore;
