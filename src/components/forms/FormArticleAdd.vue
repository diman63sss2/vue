<template>
  <div class="new">
    <div class="container">
      <form class="new__admin" action="">
        <label for="title"> Заголовок новости </label>
        <input required id="title" type="text" v-model="article.title" />
        <label for="desc"> Контент новости </label>
        <textarea
          id="desc"
          name=""
          cols="30"
          rows="10"
          v-model="article.text"
        ></textarea>
        <label for="img"> Ссылка на изображение </label>
        <input required id="img" type="text" value="" />
        <input type="button" value="Добавить" @click="mounted" /> <br />
        {{ result }} <br />
        {{ errorMessage }} <br />
        {{ erors }} <br />
        {{ status }} <br />
        {{ sucsess }} <br />
        {{ article }} <br />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      result: null,
      article: {
        title: "Заголовок новости",
        text: "Контент новости",
        filename:
          "https://static8.depositphotos.com/1008504/984/i/600/depositphotos_9843276-stock-photo-the-word-news.jpg",
        tag: null,
        authorId: "4",
      },
      erors: [],
      errorMessage: null,
      status: null,
      sucsess: null,
    };
  },
  created() {},
  methods: {
    async mounted() {
      if (this.article.title == "" || this.article.text == "") {
        this.sucsess = "Заполните все поля";
      } else {
        axios
          .post("http://localhost:8080/article", {
            title: this.article.title,
            text: this.article.text,
            filename: this.article.filename,
            tag: this.article.tag,
            authorId: this.article.authorId,
          })
          .then((response) => {
            this.result = response.status;
            console.log(response);
            console.log(this.result);
            this.sucsess = "Запись созданна";
            this.article = {
              title: null,
              text: null,
              filename: null,
              tag: null,
              authorId: null,
            };
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            this.status = error.response.status;
            this.sucsess = "Произошла ошибка";
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>