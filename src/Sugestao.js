export default function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img} />
        <div class="texto">
          <div class="nome">{props.name}</div>
          <div class="razao">
            {props.new ? "Novo no Instagram" : "Segue você"}
          </div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
