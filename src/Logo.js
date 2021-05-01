export default function Logo(props) {
  return (
    <>
      <div class="logo">
        <ion-icon name="logo-instagram"></ion-icon>
        <div class="separador"></div>
        <img src={props.img} />
      </div>

      <div class="logo-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
      </div>

      <div class="instagram-mobile">
        <img src={props.img} />
      </div>
    </>
  );
}
