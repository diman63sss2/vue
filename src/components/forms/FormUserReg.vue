<template>
  <form action="" class="modal__form">
    <input required type="text" v-model="user.email" class="modal__form__input" placeholder="E-MAIL">
    <input required type="text" v-model="user.username" class="modal__form__input" placeholder="ВАШЕ ИМЯ">
    <input required type="password" v-model="user.password" class="modal__form__input" placeholder="ПАРОЛЬ">
    <input class="modal__form__button" type="button" value="РЕГИСТРАЦИЯ" @click="mounted" />
    <div>
      {{ sucsess }}
      <br />
      <h3>Пользователь:</h3>
      <div>
        {{ user }}
      </div>
      errorMessage:
      {{ errorMessage }} <br />
      status:
      {{ status }}
      <br />
      result:
      {{ result }}
      <br />
    </div>
  </form>
</template>

<script>
// axios.get("http://localhost:8080/user/list").then((response) => (this.users = response.data));
import axios from "axios";
export default {
  data() {
    return {
      result: null,
      user: {
        email: "",
        username: "",
        password: "",
      },
      erors: [],
      errorMessage: "",
      status: null,
      sucsess: "",
    };
  },
  created() {},
  methods: {
    async mounted() {
      if (
        this.user.email == "" ||
        this.user.username == "" ||
        this.user.password == ""
      ) {
        this.sucsess = "Заполните все поля";
      } else {
        axios
          .post("http://localhost:8080/registration", {
            email: this.user.email,
            username: this.user.username,
            password: this.user.password,
          })
          .then((response) => {
            this.result = response.status;
            console.log(response);
            console.log(this.result);
            this.sucsess = "Вы успешно зарегестрированны";
            this.user = {
              email: "",
              username: "",
              password: "",
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
</style>