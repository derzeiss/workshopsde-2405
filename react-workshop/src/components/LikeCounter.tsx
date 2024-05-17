interface LikeCounterProps {
  likes: number;
  setLikes: (newLikes: number) => void;
}
export const LikeCounter = ({ likes, setLikes }: LikeCounterProps) => {
  return (
    <button className="like-counter secondary" onClick={() => setLikes(likes + 1)}>
      <span>👏</span>
      {likes}
    </button>
  );
};
