interface StepsItemType {
  title: string;
  content: string;
}

interface ConstructionBlockType {
  img: string;
  title: string;
  steps: StepsItemType[];
}

function ConstructionBlock({ img, title, steps }: ConstructionBlockType) {
  return (
    <section className="constructionBlock">
      <div className="constructionBlock_wrap">
        <img src={img} />

        <div className="constructionBlock_wrap_content">
          <h1 className="constructionBlock_wrap_content_title">{title}</h1>

          <div className="constructionBlock_wrap_content_steps">
            {steps.map((el: StepsItemType, index: number) => (
              <div
                className="constructionBlock_wrap_content_steps_el"
                key={`SE_${index}`}
              >
                <h2>{index + 1}</h2>
                <h3>{el.title}</h3>
                <p>{el.content}</p>
              </div>
            ))}
          </div>

          <button>Детальніше</button>
        </div>
      </div>
    </section>
  );
}

export default ConstructionBlock;
