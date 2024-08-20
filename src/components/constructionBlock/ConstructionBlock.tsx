interface StepsItemType {
  title: string;
  content: string;
}

interface ConstructionBlockType {
  rectBg: "rgb(255,255,255)" | "rgb(242,242,242)";
  img: string;
  title: string;
  steps: StepsItemType[];
}

function ConstructionBlock({
  img,
  title,
  steps,
  rectBg,
}: ConstructionBlockType) {
  return (
    <section className="constructionBlock">
      <div className="constructionBlock_wrap">
        <div className="constructionBlock_wrap_whiteBg">
          <img src={img} alt="construction image" />
          <div
            className="constructionBlock_wrap_whiteBg_rect"
            style={{ backgroundColor: rectBg }}
          ></div>
        </div>

        <div className="constructionBlock_wrap_content">
          <h1 className="constructionBlock_wrap_content_title">{title}</h1>

          <div className="constructionBlock_wrap_content_steps">
            {steps.map((el: StepsItemType, index: number) => (
              <div
                className="constructionBlock_wrap_content_steps_el"
                key={`SE_${index}`}
              >
                <div className="constructionBlock_wrap_content_steps_el_number">
                  {index + 1}
                </div>
                <h3>{el.title}</h3>
                <p>{el.content}</p>
              </div>
            ))}
          </div>

          <a href="#" target="_blank">
            Детальніше
          </a>
        </div>
      </div>
    </section>
  );
}

export default ConstructionBlock;
