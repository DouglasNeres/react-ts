interface TweetProps {
  user: string;
  children: string;
  likes?: number;
} 

export function Tweet (props: TweetProps) {
  return(
    <div>
      <strong>{props.user}</strong>
      <p>Live in {props.children}</p>
      <button>Likes {props.likes ?? 0}</button>
    </div>
  )
}