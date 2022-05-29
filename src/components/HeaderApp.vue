<template>
  <header class="header">
    <div class="container">
      <nav class="header__menu">
        <li class="header__menu__item">
          <router-link to="/" class="header__menu__link">Главная</router-link>
        </li>
        <li class="header__menu__item">
          <a href="add.html" class="header__menu__link"> Добавить новость </a>
        </li>
      </nav>
      <div v-if="this.autorizen == false" class="header__user__сontainer" @click="modalOpen">
        <span class="header__user modal-authorization-btn"> Войти </span>
      </div>
      <div v-if="this.autorizen == true" class="header__user__сontainer">
        <a href="home.html" class="header__user modal-authorization-btn">
          {{name}}
        </a>
        <span class="header__user modal-authorization-btn" @click="signOut">
          Выйти
        </span>
      </div>
    </div>
  </header>
  <Modal-form/>
</template>

<script>
import ModalForm from './forms/ModalForm.vue';
import jwt_decode from "jwt-decode";

export default {
  components: { ModalForm },
  data() {
    return {
      autorizen: false,
      refresh_token: '',
      access_token: '',
      name: '',
    };
  },
  methods: {
    modalOpen(){
      document.getElementById("modal__authorization").classList.toggle("dn");
    },
    signOut(){
      localStorage.setItem('access_token', '');
      localStorage.setItem('refresh_token', '');
      this.autorizen = false;
    }
  },
  mounted() {
    console.log('install-checkpos');
    if(localStorage.refresh_token) this.refresh_token = localStorage.getItem('refresh_token');
    if(localStorage.access_token) this.access_token = localStorage.getItem('access_token');
    var decoded = jwt_decode(this.access_token);
    console.log(decoded);
    this.name = decoded.sub;
    if(decoded){
      this.autorizen = true;
    }
  },
};
</script>

<style>
.header {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #d3d3d3;
}

.header .container {
  display: flex;
  justify-content: space-between;
}

.header__menu {
  display: flex;
}

.header__menu__item {
  list-style-type: none;
  margin-right: 20px;
}

.header__menu__link {
  color: #5351fb;
  cursor: pointer;
  position: relative;
}

.header__menu__link:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  opacity: 0;
  background: #5351fb;
  transition: 0.3s all ease;
}

.header__menu__link:hover::after {
  opacity: 1;
}

.header__user {
  color: #5351fb;
  cursor: pointer;
  position: relative;
}

.header__user:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  opacity: 0;
  background: #5351fb;
  transition: 0.3s all ease;
}

.header__user:hover::after {
  opacity: 1;
}
</style>