<template>
  <div>
    <div id="modal__register" class="modal modal__register dn">
      <div class="modal__container">
        <div class="modal__form__cross modal-register-btn" @click="modalHideReg"></div>
        <div class="modal__form__title">
          Регистрация
        </div>
        <Form-user-reg/>
      </div>
    </div>
    <div id="modal__authorization" class="modal modal__authorization dn">
      <div class="modal__container">
        <div class="modal__form__cross modal-authorization-btn"  @click="modalHideSign"></div>
        <div class="modal__form__title">
          Вход
        </div>
        <Form-user-sign />
      </div>
    </div>
  </div>
</template>

  

<script>

  import FormUserSign from "./FormUserSign";
  import FormUserReg from "./FormUserReg";

  export default {
   components: {
     FormUserSign,
     FormUserReg,
   },
   methods: {
     modalHideSign() {
       document.getElementById("modal__authorization").classList.toggle("dn");
     },
     modalHideReg() {
       document.getElementById("modal__register").classList.toggle("dn");
       document.getElementById("modal__authorization").classList.add("dn");
     }
   } 
  }
  
</script>

<style>
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__container {
  position: relative;
  width: 470px;
  border-radius: 10px;
  max-width: 90%;
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(15, 19, 26, 0.3);
  padding: 30px 26px 30px 26px;
  margin-right: 24px;
}

.modal__container:nth-child(2) {
  margin-right: 0;
}

.modal__form__title {
  font-size: 40px;
  font-weight: 500;
  color: #6f6c9e;
  font-family: "Roboto", sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.modal__form__inputs {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 6px;
}

.modal__form__input {
  width: 47%;
  margin-right: 6%;
  height: 60px;
  border: 0px solid;
  background: #939393;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px;
}

.modal__form__input:nth-child(2n) {
  margin-right: 0;
}

.modal__form__input::placeholder {
  color: #ffffff;
}

.modal__form__input.active {
  background: #ffffff;
  color: #5351fb;
  box-shadow: 3px 3px 3px rgba(71, 65, 167, 0.4);
}

.modal__form__input:focus {
  background: #ffffff;
  color: #5351fb;
  box-shadow: 3px 3px 3px rgba(71, 65, 167, 0.4);
}

.modal__form__input:last-child {
  margin-right: 0;
}

.modal__form__label {
  color: #424243;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  position: relative;
  cursor: pointer;
  margin-left: 40px;
  max-width: 100%;
  display: flex;
  margin-bottom: 24px;
}

.modal__form__label::before {
  content: "";
  position: absolute;
  top: -2px;
  width: 25px;
  height: 25px;
  background: #5351fb;
  border-radius: 5px;
  left: -36px;
  cursor: pointer;
}

.modal__form__label::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 8px;
  
  left: -28px;
  top: 6px;
  opacity: 0;
  cursor: pointer;
}

.modal__form__check {
  width: 0;
  height: 0;
  opacity: 0;
  display: none;
}

.modal__form__check:checked+label::after {
  opacity: 1;
}

.modal__form__button {
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
  font-family: "Roboto", sans-serif;
  transition: 0.3s all ease;
  cursor: pointer;
  border: 0px;
}

.modal__form__button:hover {
  background: #bb7db2;
}

.modal__form__cross {
  position: absolute;
  right: 22px;
  top: 22px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #6f6c9e;
  cursor: pointer;
  transition: 0.3s all ease;
}

.modal__form__cross:hover {
  border: 2px solid #bb7db2;
}

.modal__form__cross:hover::after {
  background: #bb7db2;
}

.modal__form__cross:hover::before {
  background: #bb7db2;
}

.modal__form__cross::after {
  content: "";
  position: absolute;
  width: 13px;
  height: 2px;
  background: #6f6c9e;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  transition: 0.3s all ease;
}

.modal__form__cross::before {
  content: "";
  position: absolute;
  width: 13px;
  height: 2px;
  background: #6f6c9e;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: 0.3s all ease;
}

.modal__form__links {
  display: flex;
  margin-bottom: 20px;
}

.modal__form__link {
  width: 50%;
  text-align: center;
  font-size: 18px;
  color: #424243;
  transition: 0.3s all ease;
  cursor: pointer;
}

.modal__form__link:hover {
  color: #4741a7;
}

.modal__form__link:first-child {
  border-right: 2px solid #4741a7;
}

.modal__form__socials {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.modal__form__socials__title {
  font-size: 18px;
  color: #424243;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 6px;
}

.modal__form__social {
  width: 34px;
  height: 34px;
  position: relative;
  display: flex;
  margin-right: 10px;
}

.modal__form__social:last-child {
  margin-right: 0;
}

.modal__form__social:hover .modal__form__social__img {
  opacity: 0;
}

.modal__form__social:hover .modal__form__social__img-acitve {
  opacity: 1;
}

.modal__form__social__img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: 0.3s all ease;
}

.modal__form__social__img-active {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  transition: 0.3s all ease;
}
</style>