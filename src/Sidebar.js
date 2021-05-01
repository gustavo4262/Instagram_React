import Usuario from "./Usuario";
import Sugestao from "./Sugestao";
export default function Sidebar() {
  const user = {
    userImg: "./assets/img/catanacomics.svg",
    userName: "catanacomics",
    userFullName: "Catana",
  };
  const suggestions = [
    { img: "./assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes" },
    { img: "./assets/img/chibirdart.svg", name: "chibirdart" },
    {
      img: "./assets/img/razoesparaacreditar.svg",
      name: "razoesparaacreditar",
      new: true,
    },
    { img: "./assets/img/adorable_animals.svg", name: "adorable_animals" },
    { img: "./assets/img/smallcutecats.svg", name: "smallcutecats" },
  ];
  return (
    <div class="sidebar">
      <Usuario
        userImg={user.userImg}
        userName={user.userName}
        userFullName={user.userFullName}
      ></Usuario>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {suggestions.map((suggestion) => (
          <Sugestao
            img={suggestion.img}
            name={suggestion.name}
            new={suggestion.new}
          ></Sugestao>
        ))}
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
