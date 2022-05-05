<template>
  <div class="allpage">   
    <div class="menubar-css">
      <!-- création du menu-haut -->
      <Menubar :model="item" style="margin-top: -65px; width: 102%; position: fixed; z-index: 4; margin-left : 0%; margin-right: -11%; max-height: 65px;">
        <!-- éléments à gauche du menu -->
        <template #start> 
          <Button class="but-menubar"><router-link :to="'/'" class="menurouter">Retour à la page d'accueil</router-link></Button>
        </template>
        <!-- élément à doite du menu -->
        <template #end>
          <Button icon="pi pi-user" class="p-button-rounded p-button-info" />
        </template>
      </Menubar>
    </div>
    
    <div class="toutepage">
      <div class="content">
        <h1>Se connecter</h1>
        <form>
          <label for="user">Nom d'utilisateur</label><br>
          <input type="text" id="fname" name="fname" required><br>
          <label for="password">Mot de passe</label><br>
          <input type="password" id="password" name="password" minlength="8" required><br>
          <input type="submit" class="envoi" value="Se connecter"><br>
          <Button style="background-color: #5c7fd4; border-color: #5c7fd4;"><router-link :to="'/ListCourses'" class="rlink">Choix du cours</router-link></Button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  export default {
}
.allpage{
  width: 101%;
  min-height:100vh;
  margin-top: 0%;
  margin-bottom: -5%;
  padding-bottom: 10%;
  background: linear-gradient(to bottom left, #5c7fd4 50%, #D3D3D3 50%) no-repeat center center fixed;
  margin-left: -0.5%;
}
.menurouter{
  color: grey;
  text-decoration: none;
}
.rlink{
  color: white;
  text-decoration: none;
}
.but-menubar{
  font-size: 2vh;
  align-items: center;
}
.user-but{
  margin-bottom: -18%;
}
input{
  width: 100%;
  height: 150%;
  font-size: 120%;
  margin-top: 3%;
  margin-bottom: 3%;
  box-shadow:none;
  border:0 none;
  outline:0;
}
label{
  font-weight: bold;
  font-size: 130%;
  box-shadow:none;
  border:0 none;
  outline:0;
}
.envoi{
  background-color: #5c7fd4;
  border-color: #5c7fd4;
  color: white;
  width: 60%;
  box-shadow:none;
  border:0 none;
  outline:0;
}
.toutepage{
  padding-bottom: 10%;
  padding-top: 10%;
  margin-top: auto;
  margin-bottom: auto;
  animation: fadein 1s;
}
/* contenu de toute la page*/
  .content{
    text-align: left;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    font-size: 150%;
    vertical-align: middle;
  }
/* bouton de login*/
.loginbutton{
  margin: 5px;
  background-color : #5c7fd4;
  border-color: #5c7fd4;
  color : white;
}
/* Autres boutons de la page*/
Button{
  margin: 5px;
  background-color : #F9F9F9;
  border-color: #F9F9F9;
  color : grey;
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
</style>