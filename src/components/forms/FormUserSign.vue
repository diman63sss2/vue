<template>
  <form action="" class="modal__form">
    <div class="modal__form__inputs">
      <input type="name" v-model="user.username" placeholder="name" required class="modal__form__input">
      <input
      type="password"
      v-model="user.password"
      placeholder="пороль"
      required class="modal__form__input"
      />
    </div>
    <div class="modal__form__links">
      <a class="modal__form__link modal-authorization-btn modal-register-btn" @click="modalHideReg">
        Регистрация
      </a>
    </div>
    <div class="modal__form__button" @click="mounted" >
      АВТОРИЗАЦИЯ
    </div>
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
      access_token: 
      <br>
      {{access_token}}
      <br>
      refresh_token:
      <br>
      {{refresh_token}}
      <br>
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
        username: "",
        password: "",
      },
      erors: [],
      errorMessage: "",
      status: null,
      sucsess: "",
      access_token: "",
      refresh_token: "",
    };
  },
  created() {},
  methods: {
    async mounted() {
      if (this.user.username == "" || this.user.password == "") {
        this.sucsess = "Заполните все поля";
      } else {
        var qs = require('qs');
        axios
          .post("http://localhost:8080/login", qs.stringify({
            username: this.user.username,
            password: this.user.password,
          }),
          {
            headers: {
              
            }
          }
          )
          .then((response) => {
            this.result = response.status;
            console.log(response);
            console.log(this.result);
            this.sucsess = "Вы успешно вошли";
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            
            this.user = {
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
    modalHideReg() {
      document.getElementById("modal__register").classList.toggle("dn");
      document.getElementById("modal__authorization").classList.add("dn");
    }
  },
};
</script>

<style>
</style>