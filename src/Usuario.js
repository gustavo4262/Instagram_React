export default function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.userImg} />
      <div class="texto">
        <strong>{props.userName}</strong>
        {props.userFullName}
      </div>
    </div>
  );
}
