<template>
  <div class="new__comment__item">
    <div class="new__comment">
      <span class="new__comment__title">
        {{message.message.authorName}}
      </span>
      <p class="new__comment__desc">
        {{message.message.text}}
      </p>
      <span class="new__comment__comm new__comment__comm__add" @click="open">
        Прокомментировать
      </span>
      <span v-if="role == 'ADMIN' || authorName === userName" @click="deleteMessage" class="new__comment__comm new__comment__comm__dell">
        Удалить
      </span>
      <form v-if="this.openForm === true" action="" class="new__add__comment">
        <h3 class="new__add__comment__title">
          Ответить пользователю "{{authorName}}"
        </h3>
        <textarea
          id="desc"
          name=""
          cols="30"
          rows="10"
          v-model="messageRequest.text">
        </textarea>
        <input type="button" value="Отправить" @click="addMessage(this.message.message.code)" /> <br />
      </form>
      {{result}}
    </div>
    <article-message
      v-for="value in child"
      :key="value.id" :message="value" :author="author" :articleId="articleId" :role="role" :userName="userName"/>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    
    props: ['message', 'author', 'articleId', 'role', 'userName'],
    data(){
      return {
        text: this.message.message.text,
        parentCode: this.message.message.parentCode,
        creationDate: this.message.message.creationDate,
        authorName: this.message.message.authorName,
        code: this.message.message.code,
        messageId: this.message.message.messageId,
        approvedCondition: this.message.message.approvedCondition,
        modified: this.message.message.modified,
        openForm: false,
        child: this.message.messageFamilies,
        messageRequest: {
          parentCode: this.message.code,
          text: '',
          authorName: this.userName,
          articleId: this.articleId,
        },
        result: null,
      }
    },
    methods: {
      open () {
        if(this.openForm == false) {
          this.openForm = true;
        }else{
          this.openForm = false;
        }
      },
      async addMessage(parentCode)
      { 
        this.messageRequest.articleId = Number(this.messageRequest.articleId);
        this.messageRequest.parentCode = parentCode;
        let token = localStorage.getItem("token");
        if(localStorage.access_token) token = localStorage.getItem('access_token');
        axios
          .post("http://localhost:8080/article/" + this.messageRequest.articleId + "/comments", this.messageRequest, {
            headers: { Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            this.result = response.status;
            console.log(response);
            console.log(this.result);
            this.result = "Сообщение отправеленно";
            this.messageRequest.text = '';
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            this.status = error.response.status;
            this.result = "Произошла ошибка";
          });
      },
      async deleteMessage()
      {
        let token = localStorage.getItem("token");
        if(localStorage.access_token) token = localStorage.getItem('access_token');
        axios
          .delete("http://localhost:8080/article/" + this.messageRequest.articleId + "/comments",
          {
            headers: { Authorization: `Bearer ${token}`,
          },
          data: {
            code: this.code,
          }, 
          })
          .then((response) => {
            this.result = response.status;
            console.log(response);
            console.log(this.result);
            this.result = "Сообщение удаленно";
            this.openForm = false;
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            this.status = error.response.status;
            this.result = "Произошла ошибка";
            this.openForm = false;
          });
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>