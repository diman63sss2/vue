<template>
  <header class="header">
    <div class="container">
      <nav class="header__menu">
        <li class="header__menu__item">
          <a href="index.html" class="header__menu__link"> Главная </a>
        </li>
        <li class="header__menu__item">
          <a href="add.html" class="header__menu__link"> Добавить новость </a>
        </li>
      </nav>
      <div class="header__user__сontainer">
        <span class="header__user modal-authorization-btn"> Войти </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {},
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