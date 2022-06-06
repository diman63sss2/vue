<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog__title__container">
        <h3 class="catalog__title">Свежие новости</h3>
        <span class="catalog__sort" @click="sortSetting">{{typeSort}}</span>
      </div>
      <div class="catalog__items">
        <div
          v-for="value in currentPosts"
          :key="value.id"
          class="catalog__item"
        >
          <a class="catalog__item" @click="$router.push('/post/' + value.id)">
            <div class="catalog__item__img__container">
              <img
                :src="value.filename"
                :alt="value.title"
                class="catalog__item__img"
              />
            </div>
            <div class="catalog__item__content">
              <div class="catalog__item__content__container">
                <h2 class="catalog__item__title">{{ value.title }}</h2>
                <p class="catalog__item__desc">
                  {{ value.text }}
                </p>
              </div>
              <span class="catalog__item__date"> {{ value.creationDate }} </span>
            </div>
          </a>
        </div>
      </div>
      <div class="catalog__pagination">
        <a v-for="value in numbersPages"
          :key="value.id" href="#"
          @click="goToPage(value)"
          class="catalog__pagination__link">
          {{value}}
          </a>
      </div>
    </div>
  </div>
</template>

<script>
// axios.get("http://localhost:8080/user/list").then((response) => (this.users = response.data));
import axios from "axios";
export default {
  data() {
    return {
      result: null,
      articles: [],
      erors: [],
      onPage: 3,
      pages: null,
      numbersPages: [],
      currentPage: 1,
      currentPosts: [],
      typeSort: 'По популярности',
    };
  },
  created() {
    axios
      .get("http://localhost:8080/article/list")
      .then((response) => {
        this.articles = response.data;
        console.log(response);
        this.articles.forEach(element => {
          element.creationDate = element.creationDate.split('T')[0];
          element.creationDate = element.creationDate.replaceAll('-', '.');
        });


        this.pages = Math.floor(this.articles.length / 3);
        if(this.pages < this.articles.length / 3){
          this.pages++;
        }

        for(var j = 0; j < this.pages; j++){
          this.numbersPages.push(j+1);
        }

        this.currentPosts = [];
        for(var i = (this.currentPage-1)*this.onPage; i < this.currentPage*this.onPage; i++){
          if(this.articles.length - 1 >= i){
            this.currentPosts.push(this.articles[i]);
          }
        }
      })
      .catch((e) => {
        this.erors.push(e);
      });
  },
  methods: {
    goToPage(number){
      this.currentPage = number;
      this.pages = Math.floor(this.articles.length / 3);
      if(this.pages < this.articles.length / 3){
        this.pages++;
      }

      this.numbersPages = [];
      for(var j = 0; j < this.pages; j++){
        this.numbersPages.push(j+1);
      }

      this.currentPosts = [];
      for(var i = (this.currentPage-1)*this.onPage; i < this.currentPage*this.onPage; i++){
        if(this.articles.length - 1 >= i){
          this.currentPosts.push(this.articles[i]);
        }
      }
    },
    byField(field) {
      return (a, b) => a[field] > b[field] ? 1 : -1;
    },
    sortSetting(){
      if(this.typeSort == 'По популярности'){
        this.typeSort = 'По названию';
        this.articles.sort(this.byField('amountOfLikes'));
        this.goToPage(this.currentPage);
      }else{
        this.typeSort = 'По популярности';
        this.articles.sort(this.byField('title'));
        this.goToPage(this.currentPage);
      }
      
    }
  },
};
</script>

<style>
.catalog {
  margin-top: 50px;
}

.catalog__title {
  font-size: 30px;
  color: #484781;
  display: flex;
  margin-bottom: 30px;
}

.catalog__title__container {
  display: flex;
  justify-content: space-between;
}

.catalog__sort {
  cursor: pointer;
}

.catalog__sort:hover {
  text-decoration: underline;
}

.catalog__items {
  display: flex;
  flex-direction: column;
}

.catalog__item {
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  cursor: pointer;
}

.catalog__item__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.catalog__item__img__container {
  width: 300px;
  min-width: 300px;
  height: 300px;
  margin-right: 20px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.3s all ease;
}

.catalog__item:hover .catalog__item__img__container {
  box-shadow: 10px 10px 30px rgba(15, 19, 26, 0.3);
}

.catalog__item:hover .catalog__item__img {
  width: 120%;
  height: 120%;
}

.catalog__item__img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  transition: 0.3s all ease;
}

.catalog__item__title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #000000;
}

.catalog__item__desc {
  font-size: 14px;
  line-height: 21px;
  margin-bottom: auto;
  color: #000000;
}

.catalog__item__date {
  margin-top: auto;
  margin-left: auto;
  color: grey;
}

.catalog__pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
}

.catalog__pagination__link {
  font-size: 18px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: #4741a7;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #4741a7;
  margin-right: 10px;
  transition: 0.3s all ease;
}

.catalog__pagination__link:hover {
  background: #4741a7;
  color: #ffffff;
}

.catalog__pagination__link:last-child {
  margin-right: 0;
}
</style>