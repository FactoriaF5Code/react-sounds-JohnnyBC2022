import { Guitar } from "../guitar-contain/Guitar";
import "./Main.css";

export function Main() {
  return (
    <main>
      <h1 className="main__h1">Aprende con los mejores cursos de música</h1>
      <h2 className="main__h2">Curso de Guitarra</h2>
      <p className="main__p">
        ¿Alguna vez te has preguntado por qué las guitarras tienen seis cuerdas?
        Bueno, es porque cinco no serían suficientes para ocultar la cantidad de
        acordes equivocados que tocarás al principio. Aprender a tocar la
        guitarra es como aprender a montar en bicicleta: al principio, es
        posible que te caigas, te golpees un dedo (o dos) con las cuerdas, pero
        una vez que lo logras, sientes la emoción de ir a todas partes y mostrar
        tus nuevas habilidades... ¡o al menos intentarlo mientras mantienes una
        sonrisa en la cara y una púa en la mano!
      </p>
      <Guitar />
      <p className="main__p">
        Practica con nuestra guitarra. Para ello, 
        puedes apretar en tu teclado sobre las{"  "}
        <span className="negrita">teclas A, S, D, F, G o H.</span>
      </p>
    </main>
  );
}
