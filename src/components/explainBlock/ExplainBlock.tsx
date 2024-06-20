type ExplainBlockType = {
  img: string;
  topType: "word" | "set_of_word";
  topTitle?: string;
  contentTitle: string;
  content: string;
};

function ExplainBlock({
  img,
  topType,
  contentTitle,
  content,
  topTitle,
}: ExplainBlockType) {
  return (
    <div className="explainBlock">
      {topType === "set_of_word" && (
        <div className="explainBlock_top">
          <h2 className="explainBlock_top_el explainBlock_top_elActive">
            01.Фокусволи
          </h2>
          <h2 className="explainBlock_top_el">02.Куби</h2>
          <h2 className="explainBlock_top_el">03.Віндери</h2>
          <h2 className="explainBlock_top_el">04.Підтримка</h2>
        </div>
      )}
      {topType === "word" && (
        <div className="explainBlock_top">
          <h2 className="explainBlock_top_el explainBlock_topTitle">
            {topTitle}
          </h2>
        </div>
      )}

      <div className="explainBlock_bottom">
        <div className="explainBlock_bottom_left">
          <div className="explainBlock_bottom_left_wrap">
            <p className="explainBlock_bottom_left_wrap_text">
              <span>{contentTitle}</span>
              {content}
            </p>

            <button className="explainBlock_bottom_left_wrap_btn">
              Замовити
            </button>
          </div>
        </div>

        <div className="explainBlock_bottom_right">
          <img className="explainBlock_bottom_right_img" src={img} />
        </div>
      </div>
    </div>
  );
}

export default ExplainBlock;
