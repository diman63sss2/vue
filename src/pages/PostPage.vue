<template>

  <div class="new">
    <div class="container">
      <h1 class="catalog__title">
        Заголовок новости
      </h1>
      <div class="new__content">
        <img src="assets/img/new-1.jpg" alt="new-1" class="new__img">
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
        </p>
        <p>
          Почему он используется?
            Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
        </p>
        <p>
          Откуда он появился?
            Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32
        </p>
        <p>
          Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.
        </p>
        <p>
          Где его взять?
            Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.
        </p>
      </div>
      <span class="new__date">
        12.02.20011
      </span>
      <span class="new__like__title">Оценка</span>
      <div class="new__like">
        <div class="new__like__item new__like__item__minus">
          -
        </div>
        <div class="new__like__item new__like__item__pluse active">
          +
        </div>
      </div>
      <div class="new__like__curr">
        <div class="new__like__curr__item new__like__curr__minus">
          -3
        </div>
        <div class="new__like__curr__item new__like__curr__pluse">
          +42
        </div>
      </div> 
      <div class="new__comments">
        <div class="new__comment__item">
          <div class="new__comment">
            <span class="new__comment__title">
              Иван Иванов
            </span>
            <p class="new__comment__desc">
              Статья огонь, супер информативная!!!
            </p>
            <span class="new__comment__comm new__comment__comm__dell">
              Удалить
            </span>
            <span class="new__comment__comm new__comment__comm__sucses">
              Одобрить
            </span>
            <span class="new__comment__comm new__comment__comm__add">
              Прокомментировать
            </span>
            <form action="" class="new__add__comment">
              <h3 class="new__add__comment__title">
                Ответить пользователю "Иван Иванов"
              </h3>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button>
                Отправить
              </button>
            </form>
          </div>
          <div class="new__comment__item">
            <div class="new__comment">
              <span class="new__comment__title">
                Павел Шнитько
              </span>
              <p class="new__comment__desc">
                Согласен с Иваном!
              </p>
              <span class="new__comment__comm new__comment__comm__add">
                Прокомментировать
              </span>
            </div>
          </div>
          <div class="new__comment__item">
            <div class="new__comment">
              <span class="new__comment__title">
                ТЕРМИНАТОР 10000
              </span>
              <p class="new__comment__desc">
                Иван дурак!
              </p>
              <span class="new__comment__comm new__comment__comm__add">
              Прокомментировать
            </span>
            </div>
          </div>
        </div>
        <div class="new__comment__item">
          <div class="new__comment">
            <span class="new__comment__title">
              Иван Иванов2
            </span>
            <p class="new__comment__desc">
              Статья огонь, супер информативная!!!
            </p>
            <span class="new__comment__comm new__comment__comm__add">
              Прокомментировать
            </span>
          </div>
          <div class="new__comment__item">
            <div class="new__comment">
              <span class="new__comment__title">
                Павел Шнитько
              </span>
              <p class="new__comment__desc">
                Согласен с Иваном!
              </p>
              <span class="new__comment__comm new__comment__comm__add">
                Прокомментировать
              </span>
            </div>
          </div>
          <div class="new__comment__item">
            <div class="new__comment">
              <span class="new__comment__title">
                ТЕРМИНАТОР 10000
              </span>
              <p class="new__comment__desc">
                Иван дурак!
              </p>
              <span class="new__comment__comm new__comment__comm__add">
                Прокомментировать
              </span>
            </div>
          </div>
        </div>
      </div>
      <form action="" class="new__add__comment">
        <h3 class="new__add__comment__title">
          Оставить комментарий
        </h3>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>
          Отправить
        </button>
      </form>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>