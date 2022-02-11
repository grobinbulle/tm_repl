<template>
  <html>
    <head>
      <title>Log in</title>
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
      <div class="toutepage">
        <div class="content">
          <h1>Log in</h1>
          <h3>Username</h3>
          <InputText type="text" v-model="value1" placeholder="Username" />
          <h3>Password</h3>
          <Password v-model="value4" placeholder="Confirm Password"/>
          <div>
            <Button class="loginbutton" style="margin: 1.5rem;">Log in</Button>
          </div>
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
.toutepage{
  padding-bottom: 10%;
  padding-top: 10%;
  margin-left: -20%;
  margin-top: auto;
  margin-bottom: auto;
}
/* contenu de toute la page*/
  .content{
    text-align: left;
    display: inline-block;
    margin-left: -10%;
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
</style>