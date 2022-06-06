<template>
  <div class="new">
    <div class="container">
      <input v-if="role ==='ADMIN'" type="button" value="Удалить" @click="deleteArticle" /> <br />
      <form v-if="role ==='ADMIN'" class="new__admin" action="">
        <input required name="id" type="hidden" value="3">
        <label for="title">
          Заголовок новости
        </label>
        <input required id="title" type="text" v-model="articleForm.title">
        <label for="desc">
          Контент новости
        </label>
        <textarea
          id="desc"
          name=""
          cols="30"
          rows="10"
          v-model="articleForm.text">
        </textarea>
        <label for="img">
          Ссылка на изображение
        </label>
        <input required id="img" type="text" v-model="articleForm.filename">
        <input type="button" value="Изменить" @click="updateNew" /> <br />
      </form>
      {{this.sucsess}} <br>
      <h1 v-if="role !=='ADMIN'" class="catalog__title">
        {{article.title}}
      </h1>
      <div v-if="role !=='ADMIN'" class="new__content">
        <img :src="article.filename" alt="new-1" class="new__img">
        <p>
          {{article.text}}
        </p>
      </div>
      <span class="new__date">
        {{article.creationDate}}
      </span>
      <br>
      <span class="new__like__title">Оценка</span>
      <div @click="addLike" class="new__like">
        <div class="new__like__item new__like__item__pluse active">
          +
        </div>
      </div>
      <div class="new__like__curr">
        <div class="new__like__curr__item new__like__curr__pluse">
          + {{article.amountOfLikes}}
        </div>
      </div>
      <div class="new__comments">
        <!-- <div class="new__comment__item">
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
        </div> -->
        <article-message
          v-for="value in messages"
          :key="value.id" :message="value" :author="nameUser" :articleId="this.id" :role="this.role" :userName="userName"  v-on:reloud="reloud" />
      </div>
      <form v-if="role != undefined" action="" class="new__add__comment">
        <h3 class="new__add__comment__title">
          Оставить комментарий
        </h3>
        <textarea
          id="desc"
          name=""
          cols="30"
          rows="10"
          v-model="message.text">
        </textarea>
        <input type="button" value="Отправить" @click="addMessage(articleCode)" /> <br />
      </form>
    </div>
  </div>

</template>

<script>
  import jwt_decode from "jwt-decode";
  import axios from "axios";
  import ArticleMessage from '@/components/ArticleMessage.vue';
  export default {
  components: { ArticleMessage },
    data() {
      return {
        id: this.$route.params.id,
        article: '',
        nameUser: '',
        articleCode: '',
        erors: [],
        role: null,
        message: {
          parentCode: '',
          text: '',
          authorName: '',
          articleId: this.$route.params.id,
        },
        articleForm: {
          title: "Заголовок новости",
          text: "Контент новости",
          filename: "https://static8.depositphotos.com/1008504/984/i/600/depositphotos_9843276-stock-photo-the-word-news.jpg",
          tag: null,
        },
        text: '',
        access_token: '',
        refresh_token: '',
        messages: '',
        messagesSort: [],
        userName: null,
      }
    },
    methods: {
      async addMessage(parentCode)
      {
        this.message.parentCode = parentCode;
        let token = localStorage.getItem("token");
        if(localStorage.access_token) token = localStorage.getItem('access_token');
        axios
          .post("http://localhost:8080/article/" + this.id + "/comments", this.message, {
            headers: { Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            this.result = response.status;
            console.log(response);
            console.log(this.result);
            this.sucsess = "Данные успешно обновленныы";
            this.reloud();
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            this.status = error.response.status;
            this.sucsess = "Произошла ошибка";
          });
      },
      async addLike() {
        let token = localStorage.getItem("token");
        if(localStorage.access_token) token = localStorage.getItem('access_token');
        axios
          .get("http://localhost:8080/article/" + this.id + "/like", {
            headers: { Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            this.result = response.status;
            console.log(response);
            console.log(this.result);
            this.sucsess = "Данные успешно обновленныы";
            this.reloud();
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            this.status = error.response.status;
            this.sucsess = "Произошла ошибка";
          });
      },
      async reloud(){
        console.log('created');
        console.log('install-checkpos');
        if(localStorage.refresh_token) this.refresh_token = localStorage.getItem('refresh_token');
        if(localStorage.access_token) this.access_token = localStorage.getItem('access_token');
        var decoded;
        if(this.access_token){
          decoded = jwt_decode(this.access_token);
          console.log(decoded);
          this.message.authorName = decoded.sub;
          this.role = decoded.roles[0];
          this.userName = decoded.sub
        }
         
          
        axios
          .get("http://localhost:8080/article/" + this.id)
          .then((response) => {
            this.article = response.data;
            this.article.creationDate = response.data.creationDate.split('T')[0];
            this.article.creationDate = this.article.creationDate.replaceAll('-', '.');
            this.nameUser = response.data.authorName;
            this.articleCode = response.data.code;
            console.log(response.data.creationDate.split('T')[0]);
            console.log(response);
          })
          .catch((e) => {
            this.erors.push(e);
            console.log(e)
          });
        axios
          .get("http://localhost:8080/article/" + this.id + "/comments", this.message)
          .then((response) => {
            this.messages = response.data.messageFamilyPojo
            console.log('this.messages');
            console.log(this.messages);
            this.messagesSort = [];
          
            console.log('this.messagesSort');
            console.log(this.messagesSort);
          })
          .catch((e) => {
            this.erors.push(e);
            console.log(e)
          });
      },
      async updateNew() {
        if (this.articleForm.title == "" || this.articleForm.text == "") {
        this.sucsess = "Заполните все поля";
      } else {
        let token = localStorage.getItem("token")
        if(localStorage.access_token) token = localStorage.getItem('access_token');
        axios
          .patch("http://localhost:8080/article/" + this.id, {
            title: this.articleForm.title,
            text: this.articleForm.text,
            filename: this.articleForm.filename,
            tag: this.articleForm.tag,
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
            this.sucsess = "обновленна";
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            this.status = error.response.status;
            this.sucsess = "Произошла ошибка";
          });
        }
      },
      async deleteArticle() {
        let token = localStorage.getItem("token");
        if(localStorage.access_token) token = localStorage.getItem('access_token');
        axios
          .delete("http://localhost:8080/article/"  + this.id,{
            headers: {
              Authorization: `Bearer ${token}`,
            }
          })
          .then((response) => {
            console.log(response);
            console.log(this.users);
            this.sucsess = 'Запись удаленна';
          })
          .catch((e) => {
            this.erors.push(e);
          });
      }
    },
    mounted() { 
      console.log('created');
      console.log('install-checkpos');
      if(localStorage.refresh_token) this.refresh_token = localStorage.getItem('refresh_token');
      if(localStorage.access_token) this.access_token = localStorage.getItem('access_token');
      var decoded;
      if(this.access_token){
        decoded = jwt_decode(this.access_token);
        console.log(decoded);
        this.message.authorName = decoded.sub;
        this.role = decoded.roles[0];
        this.userName = decoded.sub
      }
        
      axios
        .get("http://localhost:8080/article/" + this.id)
        .then((response) => {
          this.article = response.data;
          this.articleForm.title = this.article.title;
          this.articleForm.text = this.article.text;
          this.articleForm.filename = this.article.filename;
          
          this.article.creationDate = response.data.creationDate.split('T')[0];
          this.article.creationDate = this.article.creationDate.replaceAll('-', '.');
          this.nameUser = response.data.authorName;
          this.articleCode = response.data.code;
          console.log(response.data.creationDate.split('T')[0]);
          console.log(response);
        })
        .catch((e) => {
          this.erors.push(e);
          console.log(e)
        });
        axios
          .get("http://localhost:8080/article/" + this.id + "/comments", this.message)
          .then((response) => {
            this.messages = response.data.messageFamilyPojo
            console.log('this.messages');
            console.log(this.messages);
            this.messagesSort = [];
          
            console.log('this.messagesSort');
            console.log(this.messagesSort);
          })
          .catch((e) => {
            this.erors.push(e);
            console.log(e)
          });
    }
  }
</script>

<style>
  .new {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .new__img {
    max-width: 100%;
    max-height: 600px;
    margin-bottom: 40px;
  }

  .new p {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
  }

  .new__date {
    margin-top: auto;
    margin-left: auto;
    color: grey;
    margin-top: 30px;
    display: flex;
  }

  .new__comments {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .new__comment__item {
    width: 95%;
    margin-left: 5%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .new__comments>.new__comment__item {
    margin-left: 0;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }

  .new__comment {
    display: flex;
    flex-direction: column;
  }

  .new__comment__title {
    font-size: 18px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #4741a7;
    display: flex;
  }

  .new__comment__comm {
    font-size: 12px;
    color: black;
    cursor: pointer;
  }

  .new__comment__comm:hover {
    text-decoration: underline;
  }

  .new__add__comment {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .new__add__comment textarea {
    width: 400px;
    max-width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid rgb(71, 65, 167);
    padding: 10px;
    resize: none;
  }

  .new__add__comment input[type="button"] {
    height: 40px;
    font-size: 20px;
    width: 140px;
    background: none;
    color: rgb(71, 65, 167);
    border: 1px solid rgb(71, 65, 167);
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s all ease;
  }

  .new__add__comment button:hover {
    color: #ffffff;
    background: rgb(71, 65, 167);
  }

  .new__add__comment__title {
    margin-bottom: 10px;
    font-size: 20px;
    display: flex;
  }

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

  .new__admin button:hover {
    background: #bb7db2;
  }

  .new__like {
    display: flex;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .new__like__item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    color: rgb(15, 19, 26);
    border: 1px solid #000000;
    transition: 0.3s all ease;
    cursor: pointer;
  }

  .new__like__item:last-child {
    margin-right: 0;
  }

  .new__like__item__pluse {
    border: 1px solid #1a8d00;
    color: #1a8d00;
  }

  .new__like__item__pluse.active,
  .new__like__item__pluse:hover {
    background: #1a8d00;
    color: #ffffff;
  }

  .new__like__item__minus {
    border: 1px solid #921313;
    color: #921313;
  }

  .new__like__item__minus.active,
  .new__like__item__minus:hover {
    background: #921313;
    color: #ffffff;
  }

  .new__like__title {
    margin-top: 40px;
    margin-bottom: 10px;
    display: flex;
  }

  .new__like__curr {
    display: flex;
  }

  .new__like__curr__item {
    margin-right: 20px;
  }

  .new__like__curr__item:last-child {
    margin-right: 0;
  }

  .new__like__curr__minus {
    color: #921313;
  }

  .new__like__curr__pluse {
    color: #1a8d00;
  }
</style>