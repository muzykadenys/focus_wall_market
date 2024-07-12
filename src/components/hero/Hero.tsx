import Header from "../header/Header";

function Hero() {
  return (
    <section className="hero">
      <Header />

      <div className="hero_wrap">
        <div className="hero_wrap_text">
          <h1 className="hero_wrap_text_title">Текстильні лайтбокси</h1>
          <h1 className="hero_wrap_text_title">Рекламні куби</h1>
          <h1 className="hero_wrap_text_title">Віндери, прапори</h1>
        </div>

        <a
          href="#contact"
          className="hero_wrap_button"
        >
          Замовляй прямо зараз!
        </a>
      </div>
    </section>
  );
}

export default Hero;
