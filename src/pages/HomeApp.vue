<template>
  <div class="home">
    <div class="container">
      <h1 class="home__title">
        Профиль
      </h1>
      <div class="home__avatar">
        <img src="https://img07.rl0.ru/afisha/-x-i/daily.afisha.ru/uploads/images/f/cc/fcc478d98b801815ee91bde7ef9b295c.jpg" alt="avatar-1">
      </div>
      <form class="home__form" action="">
        <label for="img">
          Фото
        </label>
        <input required id="img" type="text" value="https://img07.rl0.ru/afisha/-x-i/daily.afisha.ru/uploads/images/f/cc/fcc478d98b801815ee91bde7ef9b295c.jpg">
        <label for="name">
          Имя
        </label>
        <input required id="name" type="text" value="Терминатор 10000">
        <label for="mail">
          Почта
        </label>
        <input required id="mail" type="text" value="vitia2011@mail.ru">
        <label for="pass">
          Новый пороль
        </label>
        <input id="pass" type="password">
        <label required for="test-pass">
          Старый пороль
        </label>
        <input id="test-pass" type="password">
        <button>
          Редактировать
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  .home__avatar {
    width: 60px;
    height: 60px;
    border-radius: 100px;
    margin-bottom: 20px;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
  }

  .home__avatar img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .home__form {
    display: flex;
    flex-direction: column;
  }

  .home__form input {
    width: 200px;
    height: 30px;
    font-size: 16px;
    border-radius: 10px;
    padding: 4px;
    display: flex;
    align-items: center;
    border: 1px solid rgb(15, 19, 26);
    margin-bottom: 30px;
  }

  .home__form label {
    margin-bottom: 10px;
  }

  .home__form button {
    height: 40px;
    font-size: 20px;
    width: 180px;
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

  .home__form button:hover {
    color: #ffffff;
    background: rgb(71, 65, 167);
}
</style>