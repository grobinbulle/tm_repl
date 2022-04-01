<template>
  <div class="allpage">
    <div class="menubar-css">
      <!-- création du menu-haut -->
      <Menubar :model="item" style="margin-top: -65px; width: 101.3%; position: fixed; z-index: 4; margin-left : 0%; margin-right: -11%; max-height: 65px;">
        <!-- éléments à gauche du menu -->
        <template #start> 
          <Button class="but-menubar"><router-link :to="'/'">Retour à la page d'accueil</router-link></Button>
        </template>
        <!-- élément à doite du menu -->
        <template #end>
          <Button icon="pi pi-user" class="p-button-rounded p-button-info" />
        </template>
      </Menubar>
    </div>
    <!-- contenu autre que le menu-haut -->
    <div class="toutepage">
      <div class="content">
        <h1>S'inscrire</h1>
        <form>
          <label for="fname">Prénom</label><br>
          <input type="text" id="fname" name="fname" required><br>
          <label for="lname">Nom</label><br>
          <input type="text" id="lname" name="lname" required><br>
          <label for="email">E-mail</label><br>
          <input type="email" id="email" name="email" placeholder="prenom.nom@studentfr.ch" required><br>        
          <label for="classe">Classe</label><br>
          <select name="classe" class="choix" id="classe" required>
              <option value="">--Choisissez votre classe--</option>
              <option value="1ECG">1ère ECG</option>
              <option value="2ECG">2ème ECG</option>
              <option value="3ECG">3ème ECG</option>
              <option value="1EC">1ère EC</option>
              <option value="2EC">2ème EC</option>
              <option value="3EC">3ème EC</option>
              <option value="1GY">1ère GY</option>
              <option value="2GY">2ème GY</option>
              <option value="3GY">3ème GY</option>
              <option value="4GY">4ème GY</option>
          </select><br>
          <label for="password">Mot de passe</label><br>
          <input type="password" id="password" name="password" minlength="8" required><br>
          <label for="password">Confirmez le mot de passe</label><br>
          <input type="password" id="password" name="password" minlength="8" required><br>
          <input type="submit" class="envoi" value="S'inscrire"><br>
          <router-link :to="'/ListCourses'">Choix du cours</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  export default {
}

.allpage{
  width: 103%;
  height: 110%;
  margin-left: -1.5%;
  margin-right: -1.5%;
  margin-top: 0%;
  margin-bottom: -5%;
  background: linear-gradient(to bottom left, #5c7fd4 50%, #D3D3D3 50%) no-repeat center center fixed;
}
.but-menubar{
  font-size: 2vh;
  width : 18vh;
  height: 7vh;
  align-items: center;
}
.user-but{
  margin-bottom: -18%;
}
/* contenu de toute la page*/
  .content{
    text-align: left;
    display: inline-block;
    margin-left: -5%;
    font-size: 120%;
    vertical-align: middle;
  }
.toutepage{
  padding-bottom: 10%;
  padding-top: 5%;
  margin-left: -20%;
  margin-top: 0%;
  animation: fadein 1s; 
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
.choix{
  font-size: 130%;
  box-shadow:none;
  border:0 none;
  outline:0;
  margin-top: 3%;
  margin-bottom: 3%;
}

/* bouton sign up*/
.signupbutton{
  margin-top: 5px;
  margin-left: -2%;
  background-color : #5c7fd4;
  border-color: #5c7fd4;
  color : white;
}
input{
  width: 100%;
  height: 150%;
  font-size: 120%;
  margin-top: 3%;
  margin-bottom: 3%;
}
/*Autres boutons */
Button{
  margin-left: 5px;
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