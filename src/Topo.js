export default function Topo(props) {
  return (
    <div className="topo">
      <div className="usuario">
        <img src={props.img}></img>
        {props.name}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
