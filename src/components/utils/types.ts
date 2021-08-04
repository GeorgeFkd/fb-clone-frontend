export interface CommentType {
  authorName: string;
  createdAt: string;
  author_id: number;
  replies_to: number | null;
  content: string;
  comment_id: string;
}

export interface PostType {
  //change to:
  name: string; //authorName
  post_id: number;
  group_name: string;
  group_id: number;
  content: string;
  createdAt: string;
}
