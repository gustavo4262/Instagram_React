import Post from "./Post";
export default function Posts() {
  const posts = [
    {
      userImg: "./assets/img/meowed.svg",
      userName: "meowed",
      content: "./assets/img/gato-telefone.svg",
      likesImg: "./assets/img/respondeai.svg",
      likesName: "respondeai",
      likesNumber: "101.523",
    },
    {
      userImg: "./assets/img/barked.svg",
      userName: "barked",
      content: "./assets/img/dog.svg",
      likesImg: "./assets/img/adorable_animals.svg",
      likesName: "adorable_animals",
      likesNumber: "99.159",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          userImg={post.userImg}
          userName={post.userName}
          content={post.content}
          likesImg={post.likesImg}
          likesName={post.likesName}
          likesNumber={post.likesNumber}
        ></Post>
      ))}
    </div>
  );
}
