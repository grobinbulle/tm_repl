<template>
  <html>
    <head>
      <title>Se Connecter</title>
      <meta charset="UTF-8">
      <meta name="description" content="Bienvenue sur la nouvelle plateforme d'apprentissage du cours d'informatique.">
      <meta name="keywords" content="informatique, apprentissage, plateforme, collège du sud">
    </head>
    <body>
      <div class="menubar-css">
        <!-- création du menu-haut -->
        <Menubar :model="item" style="margin-top: -65px; width: 101%; position: fixed; z-index: 4; margin-left : -1%; margin-right: -5%">
          <!-- éléments à gauche du menu -->
          <template #start> 
            <Button>Retour à la page d'accueil</Button>
          </template>
          <!-- élément à doite du menu -->
          <template #end>
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text" v-model="value1" placeholder="Search" />
            </span>
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
            <input type="text" id="fname" name="fname"><br>
            <label for="lname">Nom</label><br>
            <input type="text" id="lname" name="lname"><br>
            <label for="email">E-mail</label><br>
            <input type="email" id="email" name="email" placeholder="prenom.nom@studentfr.ch"><br>            
            <label for="pet-select">Ecole</label><br>
            <select name="ecole" id="ecole">
                <option value="">Choisissez votre classe</option>
                <option value="GY">GY</option>
                <option value="ECG">ECG</option>
                <option value="EC">EC</option>
            </select><br>
            <input type="submit" value="S'inscrire"><br>
          </form>
        </div>
      </div>
    </body>
  </html>
</template>

<style scoped>
  export default {
}

body{
  margin-left: -0.5%;
  margin-right: -0.5%;
  margin-top: 0%;
  margin-bottom: -5%;
  background: linear-gradient(to bottom left, #5c7fd4 50%, #D3D3D3 50%);
}
/* contenu de toute la page*/
  .content{
    text-align: left;
    display: inline-block;
    margin-left: -10%;
    font-size: 120%;
    vertical-align: middle;
  }
.toutepage{
  padding-bottom: 10%;
  padding-top: 5%;
  margin-left: -20%;
  margin-top: 0%;
}
/* bouton sign up*/
.signupbutton{
  margin-top: 5px;
  margin-left: -2%;
  background-color : #5c7fd4;
  border-color: #5c7fd4;
  color : white;
}
/*Autres boutons */
Button{
  margin-left: 5px;
  background-color : #F9F9F9;
  border-color: #F9F9F9;
  color : grey;
}
</style>