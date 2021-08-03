import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
import { GetGroupsOfCurrentUser, GetPostsOfGroup } from "./utils/db.requests";
import "./PostFeed.css";
interface PostType {
  //change to:
  name: string; //authorName
  post_id: number;
  group_name: string;
  group_id: number;
  content: string;
  createdAt: string;
}

const PostFeed: React.FC = () => {
  //todo infinite scrolling
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    const fetchFromApiAndUpdateState = async () => {
      const result = await GetGroupsOfCurrentUser();
      const userGroups = result.groups;

      const allPosts: PostType[] = [];
      userGroups.map(async (group: any) => {
        const { group_id } = group;
        // this might need some change like [{groupid:number,posts:PostType[]}]
        let postsOfGroup = await GetPostsOfGroup(group_id);
        postsOfGroup.map((post: any) => {
          post.group_id = group_id;
        });
        allPosts.push(...postsOfGroup);
      });
      console.log(allPosts, "inside fetch");
      // setIsLoading(false);
      return allPosts;
      // setPosts(postsPerGroup);
    };
    fetchFromApiAndUpdateState().then((res) => {
      setPosts(res);
      console.log("posts set");
    });
    setIsLoading(false);
  }, []);
  //? i gotta trigger one more rerender to properly use the posts
  return (
    <div className="postfeed-container">
      {console.log(typeof posts)}
      {/* {isLoading && "wait a"} */}
      {posts.map((post) => {
        console.log("current post", post);
        return (
          <Post
            name={post.name}
            group_name={post.group_name}
            group_id={post.group_id}
            content={post.content}
            createdAt={post.createdAt}
            post_id={post.post_id}
            key={post.post_id}
          />
        );
      })}
      {console.dir(posts)}
    </div>
  );
};

export default PostFeed;
