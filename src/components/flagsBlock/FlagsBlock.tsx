function FlagsBlock() {
  return (
    <section className="flagsBlock">
      <div className="flagsBlock_wrap">
        <div className="flagsBlock_wrap_content">
          <img src="../img/flags.png" alt="flags image"/>

          <div className="flagsBlock_wrap_content_text">
            <h1 className="flagsBlock_wrap_content_text_title">
              Розмірна сітка віндера:
            </h1>

            <div className="flagsBlock_wrap_content_textWrap">
              <div className="flagsBlock_wrap_content_textWrap_left">
                <p className="flagsBlock_wrap_content_textWrap_left_el">XS</p>
                <p className="flagsBlock_wrap_content_textWrap_left_el">S</p>
                <p className="flagsBlock_wrap_content_textWrap_left_el">M</p>
                <p className="flagsBlock_wrap_content_textWrap_left_el">L</p>
              </div>
              <div className="flagsBlock_wrap_content_textWrap_right">
                <p className="flagsBlock_wrap_content_textWrap_right_el">
                  400x2000 мм
                </p>
                <p className="flagsBlock_wrap_content_textWrap_right_el">
                  650x2200 мм
                </p>
                <p className="flagsBlock_wrap_content_textWrap_right_el">
                  700x3400 мм
                </p>
                <p className="flagsBlock_wrap_content_textWrap_right_el">
                  820x4700 мм
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlagsBlock;
