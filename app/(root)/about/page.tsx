export default function About() {
  return (
    <div className="mx-auto max-w-6xl space-y-4 p-3">
      <h1 className="text-2xl font-medium text-amber-600">О сайте</h1>
      <p>
        <b className="text-amber-600">Movies Database</b> - это пет-проект,
        разработанный{" "}
        <a href="https://github.com/lelikone777" className="hover:underline">
          <b className="text-amber-600">Алексеем Калининым</b>
        </a>{" "}
        с использованием{" "}
        <a href="https://nextjs.org/blog/next-14" className="hover:underline">
          <b className="text-amber-600">Next.js 14</b>
        </a>
        . Этот веб-сайт представляет собой базу данных фильмов, которая
        обеспечивает доступ к актуальной информации о фильмах по популярности,
        выпуску, рейтингу и другим критериям, созданный при помощи{" "}
        <a href="https://www.themoviedb.org/" className="hover:underline">
          <b className="text-amber-600">IMDb API</b>
        </a>{" "}
        .
      </p>

      <p>
        Пользователи могут легко находить интересующие их фильмы, используя
        различные фильтры и сортировки, такие как популярность, жанр, рейтинг и
        т. д. Благодаря постоянному обновлению базы данных с новыми релизами,
        посетители сайта всегда будут в курсе последних кинематографических
        достижений.
      </p>

      <p>
        Кроме того, <b className="text-amber-600">Movies Database</b> предлагает
        удобный интерфейс для взаимодействия с сообществом киноманов. Этот
        проект является не только источником информации о фильмах, но и
        платформой для общения и обмена мнениями, созданным для настоящих
        ценителей кинематографа.
      </p>
    </div>
  );
}
