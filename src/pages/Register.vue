<template>

<div class="ui middle aligned center aligned grid login__container">
  <div class="column">
    <h2 class="ui orange header">
      <div class="content">
        Slack
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">

        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="name" placeholder="Pseudo" v-model.trim="name" required>
          </div>
        </div>

        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="email" name="email" placeholder="Email" v-model.trim="email" required>
          </div>
        </div>

        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Mot de passe" v-model.trim="password" required>
          </div>
        </div>

        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password_confirmation" placeholder="Répéter le mot de passe" v-model.trim="password_confirmation" required>
          </div>
        </div>

        <div class="ui fluid large orange button" @click.prevent="register">S'inscrire</div>
      </div>
    </form>

    <div class="ui message">
       Déjà inscrit ? <router-link to="/login">Se Connecter</router-link>
    </div>
  </div>
</div>

</template>

<script>

  export default {
    name: 'register',
    data () {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    },
    methods: {
      register() {
        console.log('register')
      }
    }
  }

</script>

<style scoped>
.login__container{
        margin-top: 40px;
    }
.column{
    max-width: 450px;
}
</style>
