<template>
  <form class="new__admin" action="">
    <input required name="id" type="hidden" value="3">
    <label for="title">
      Заголовок новости
    </label>
    <input required id="title" type="text" v-model="article.title">
    <label for="desc">
      Контент новости
    </label>
    <textarea
      id="desc"
      name=""
      cols="30"
      rows="10"
      v-model="article.text">
    </textarea>
    <label for="img">
      Ссылка на изображение
    </label>
    <input required id="img" type="text" v-model="article.filename">
    <input type="button" value="Добавить новость" @click="mounted" /> <br />
  </form>
  {{this.result}} <br>
  {{}} <br>
  {{}} <br>
  {{}} <br>
  {{}} <br>
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
        filename: "https://static8.depositphotos.com/1008504/984/i/600/depositphotos_9843276-stock-photo-the-word-news.jpg",
        tag: null,
        authorId: "1",
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
        let token = localStorage.getItem("token")
        if(localStorage.access_token) token = localStorage.getItem('access_token');
        axios
          .post("http://localhost:8080/article", {
            title: this.article.title,
            text: this.article.text,
            filename: this.article.filename,
            tag: this.article.tag,
            authorId: this.article.authorId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
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

<style>
  .new__admin {
    display: flex;
    flex-direction: column;
  }

  .new__admin input,
  .new__admin textarea {
    margin-bottom: 30px;
    margin-top: 10px;
  }

  .new__admin button {
    background: #4741a7;
    height: 40px;
    border-radius: 10px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    font-weight: 500;
    font-family: "Roboto",
      sans-serif;
    transition: 0.3s all ease;
    cursor: pointer;
    border: 0px;
  }
</style>