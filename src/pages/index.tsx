import CarouselEl from "@/components/carouselEl/CarouselEl";
import ConstructionBlock from "@/components/constructionBlock/ConstructionBlock";
import ContactBlock from "@/components/contactBlock/ContactBlock";
import ExplainBlock from "@/components/explainBlock/ExplainBlock";
import FlagsBlock from "@/components/flagsBlock/FlagsBlock";
import Hero from "@/components/hero/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"
        />

        <title>Focus wall market</title>
        <meta
          name="description"
          content="Текстильні лайтбокси. Рекламні куби. Віндери, прапори."
          key="desc"
        />

        <meta property="og:title" content="Focus Wall Market" />
        <meta property="og:description" content="Текстильні лайтбокси. Рекламні куби. Віндери, прапори." />
        <meta property="og:image" content="https://1eca-104-28-205-20.ngrok-free.app/img/baner_1.png" />
        <meta property="og:url" content="https://focus-wall-market.vercel.app" /> 
        <meta property="og:type" content="website" />
      </Head>

      <Hero />

      <ExplainBlock
        idName="focuswall"
        topType="word"
        topTitle="01.Фокусволи"
        contentTitle="Focus Wall"
        content=" (текстильний лайтбокс) - це втілення
              передових технологій та комплекс рішень для ефективної візуальної
              комунікації та оформлення простору. Вироби ідеально поєднують
              функціональність із сучасним дизайном, що робить їх придатними для
              широкого спектру застосувань, від рекламних до декоративних цілей."
        img="../img/baner_2.png"
      />

      <ConstructionBlock
        rectBg={"rgb(255,255,255)"}
        img="../img/constr_1.png"
        title="Конструкція Focus Wall"
        steps={[
          {
            title: "Алюмінієва рама",
            content: `Рами виготовлені з високоякісного легкого алюмінію,  є
                довговічними, а також й естетично привабливі. Легкість рами
                сприяє простоті монтажу та транспортування, а також дозволяє
                легко оновлювати текстильні постери, що ідеально підходить для
                частих маркетингових кампаній.`,
          },
          {
            title: "Текстильний постер",
            content: `Виготовлені з екологічно чистих матеріалів, тканинні постери
                характеризуються високою якістю зображення та відсутністю
                неприємних запахів, що робить їх ідеальними для внутрішнього
                використання. Зображення на текстилі виглядає яскраво, природно
                та реалістично.`,
          },
          {
            title: "LED-освітлення",
            content: `Новітні технології світлодіодного освітлення забезпечують
                рівномірне світло, що підкреслює якість зображення і зменшує
                енергоспоживання.`,
          },
        ]}
      />

      <ExplainBlock
        idName="cube"
        topType="word"
        topTitle="02.Куби"
        contentTitle="Куби"
        content=" - це є стильний і функціональний акцент для будь-якого
            заходу, який привертає увагу та запам’ятовується. Сидіння-куби легко
            адаптується до будь-якого простору і миттєво привертає увагу.
            Запорукою універсальності та зручності рекламного пуфа - є легкість
            та мобільність. Максимальна універсальність і зручність завдяки
            легкості та мобільності рекламного пуфа. Пуфи Cube створені для
            довготривалого використання з можливістю легкої заміни чохла.
            Використовуйте всю поверхню сидінь та втілюйте в життя свої
            креативні ідеї."
        img="../img/baner_3.png"
      />

      <ConstructionBlock
        rectBg={"rgb(242,242,242)"}
        img="../img/constr_2.png"
        title="Конструкція Куба"
        steps={[
          {
            title: "Наповнення",
            content: `Брендовані м’які куби виготовленні з щільного поролоному. Що є
                  безпечним для дітей та дозволяє створювати велике рекламне
                  поле за допомогу виставлення кубів один на одного.`,
          },
          {
            title: "Зовнішні чохли",
            content: `Виготовленні з тканини Оксфорд, котра відштовхує воду та не
                  вимагає особливого догляду.`,
          },
          {
            title: "Брендування",
            content: `На рекламному кубі можна розміщувати будь-яке повноколірне
                  зображення на усіх 6-ти гранях, що надає максимальної
                  видимості та ефективності реклами для вашої компанії чи
                  продукту.`,
          },
        ]}
      />

      <ExplainBlock
        idName="winder"
        topType="word"
        topTitle="03.Віндер"
        contentTitle="Віндери"
        content=" - зручний спосіб реклами для привернення уваги ваших
            клієнтів до бренду та подій. Це мобільні рекламні конструкції у
            вигляді прапорів на стійкому флагштоку. Вони відрізняються легкістю
            та зручністю у використанні."
        img="../img/baner_4.png"
      />

      <FlagsBlock />

      <CarouselEl
        slidesList={[
          { img: "../img/flag_1.png", text: "Хрестоподібна з підшипником" },
          { img: "../img/flag_2.png", text: "Хрестоподібна (Люкс)" },
          { img: "../img/flag_3.png", text: "Плоска квадратна" },
        ]}
      />

      <ContactBlock />
    </div>
  );
}
