<template>
  <div class="new__comment__item">
    <div class="new__comment">
      <span class="new__comment__title">
        {{message.authorName}}
      </span>
      <p class="new__comment__desc">
        {{message.text}}
      </p>
      <span class="new__comment__comm new__comment__comm__add" @click="open">
        Прокомментировать
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
        <input type="button" value="Отправить" @click="addMessage(this.message.code)" /> <br />
      </form>
    </div>
    <article-message
      v-for="value in messagesSort"
      :key="value.id" :message="value" :author="nameUser"/>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    
    props: ['message', 'author'],
    data(){
      return {
        text: this.message.text,
        parentCode: this.message.parentCode,
        creationDate: this.message.creationDate,
        authorName: this.message.authorName,
        code: this.message.code,
        articleId: this.message.articleId,
        messageId: this.message.messageId,
        approvedCondition: this.message.approvedCondition,
        modified: this.message.modified,
        openForm: false,
        messageRequest: {
          parentCode: this.message.code,
          text: '',
          authorName: this.author,
          articleId: this.message.articleId,
        },
        
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
        this.messageRequest.parentCode = parentCode;
        let token = localStorage.getItem("token");
        if(localStorage.access_token) token = localStorage.getItem('access_token');
        axios
          .post("http://localhost:8080/article/" + this.articleId + "/comments", this.messageRequest, {
            headers: { Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            this.result = response.status;
            console.log(response);
            console.log(this.result);
            this.sucsess = "Данные успешно обновленныы";
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            this.status = error.response.status;
            this.sucsess = "Произошла ошибка";
          });
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>