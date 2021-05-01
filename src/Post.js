import Fundo from "./Fundo";
import Topo from "./Topo";

export default function Post(props) {
  return (
    <div className="post">
      <Topo img={props.userImg} name={props.userName}></Topo>

      <div class="conteudo">
        <img src={props.content} />
      </div>

      <Fundo
        img={props.likesImg}
        name={props.likesName}
        number={props.likesNumber}
      ></Fundo>
    </div>
  );
}
