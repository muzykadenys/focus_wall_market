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

        <button
          className="hero_wrap_button"
          // onClick={HandleClickOrder}
        >
          Замовляй прямо зараз!
        </button>
      </div>
    </section>
  );
}

export default Hero;
