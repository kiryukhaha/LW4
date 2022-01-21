<template>
  <div id = "context">
    <div id = "header" >
      <h1 class="text-header">Иевлев Кирилл P3233 | Вариант: 3336</h1>
    </div>
    <div>
      <div class="border">
        <div>
          <h2 class="text">Аутентификация</h2>
          <form>
            <div>
              <div >
                <input class="text-input" type="text" name="username" placeholder="Логин" v-model.trim = "username">
              </div>
            </div>
            <div>
              <div >
                <input class="text-input" type="password" name="password" placeholder="Пароль" v-model.trim = "password">
              </div>
            </div>
            <div>
              <button class="button" style="width: 168px" @click="login">
                Ввойти
              </button>
              <div></div>
              <button class="button" style="width: 168px" @click="register">
                Регистрация
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login(event) {
      event.preventDefault();

      this.axios.post("http://localhost:8085/user/login", {
        username: this.username,
        password: this.password
      }).then(response => {
        localStorage.setItem("userDetails", JSON.stringify({userId: response.data.userId, accessToken: response.data.accessToken}));


        this.$router.push('main');
      }).catch(() => {
        alert("Неправильный пароль или логин!");
      })
    },
    register(event) {
      event.preventDefault();
      this.axios.post("http://localhost:8085/user/register", {
        username: this.username,
        password: this.password
      }).then(() => {
        alert("Пользователь успешно зарегистрирован!");
      }).catch(()=> {
        alert("Пользователь с таким логином уже есть!");
      })
    }
  }
}
</script>

<style scoped>

body{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.button {
  text-align: center;
  margin-top: 4px;
  margin-bottom: 2px;
  height: 50px;
  width: 160px;
  position: relative;
  appearance: none;
  padding: 1em 2em;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 50px;
  font-size: 15px;
  font-family: "Fedra Sans";
border: 2px solid transparent;
  background: linear-gradient(#000, #000) padding-box, radial-gradient(white, white) border-box;
}

.text{
  text-align: center;
  color: white;
  font-family: "Fedra Sans";
}


.text-header{
  margin-top: 120px;
  text-align: center;
  color: white;
  font-family: "Fedra Sans";
  margin-bottom: 50px


}
.text-input{
  margin-bottom: 6px;
  text-align: center;
  width: 160px;
  height: 30px;
  border-radius: 20px;
  font-size: 15px;
  font-family: "Fedra Sans";
  text-align: center;
  color: white;
  background: linear-gradient(#000, #000) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), white, white) border-box;
  border: 2px double white;


}

.border {

  align-items: center;
  text-align: center;
  margin: auto;
  width: 250px;
  height: 280px;
  border:2px solid white;
}



</style>