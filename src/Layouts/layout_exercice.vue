<template>
  <div class="allpage">
    <div class="page" :class="{'page-shift': visibleLeft, 'page-normal': !visibleLeft}" style="height: 100%;">
      <div class="menubar-css">
        <!-- création du menu-haut -->
        <Menubar :model="item" style="margin-top: -65px; width: 102%; position: fixed; z-index: 4; margin-left : 0.5%; margin-right: -14%; max-height: 65px;">
          <!-- éléments à gauche du menu -->
          <template #start> 
            <Button class="but-menubar">Retour à la page d'accueil</Button>
            <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="p-mr-2 arrow-but"/>
          </template>
          <!-- élément à doite du menu -->
          <template #end>
            <Button icon="pi pi-user" class="p-button-rounded p-button-info" />
          </template>
        </Menubar>
      </div>
        <!-- fin du menu-haut -->
        <!-- appel de la sidebar -->
      <div class="toutepage">
      <Sidebar v-model:visible="visibleLeft" :modal="false" :autoZIndex="true">
        <p>Naviguer dans ce chapitre</p>
        <PanelMenu :model="items" />
      </Sidebar>
          <h1 style="">Exercices</h1>
        <!-- début de l'exercice -->
        <div class="content" style="max-width: 70%">
          <h2> Nom de l'exercice</h2>
          <div>
            <img src="../assets/moteur.png" style="height : 34%; width: 60%; margin-top: 0%; margin-left: 20%;"/>
            <h2>Question</h2>
            <Editor v-model="value" editorStyle="height: 320px"/>
          </div>
          <Button style="background-color: #D3D3D3; border-color: #D3D3D3; color: #696969;" class="backtheorie">Revenir à la théorie</Button>
          <Button class="envoyer backtheorie">Envoyer la réponse</Button>
        </div>
      </div>
      <!-- fin de l'exercice -->
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      visibleLeft: true,
      items: [
                {
                    label: 'Chapitre 1',
                    items: [
                      {
                          label: 'Chapitre 1.1',
                          items: [
                            {
                                label: 'Chapitre 1.1.1',
                            },
                            {
                                label: 'Chapitre 1.1.2',
                            }
                          ]
                      },
                      {
                          label: 'Chapitre 1.2',
                      },
                      {
                          label: 'Chapitre 1.3',
                      }
                    ]
                },
              ]
		}
	}
}

</script>

<style scoped>
 /* css du titre*/ 
h1{
  font-size: 40px;
  background-color: #5c7fd4;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: white;
  width: 104%;
  margin-left: -4%;
  margin-right: auto;
  max-width: 104%;
}
/* css du contenu de la page*/
.content{
  display: inline-block;
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
input{
  width: 100%;
  height: 150%;
  font-size: 120%;
  margin-top: 1%;
  margin-bottom: 1%;
  box-shadow:none;
  border:0 none;
  outline:0;
}
Button:hover{
  background-color: grey;
  transition-duration: 0.5s;
}
.question{
  font-size: 200%;
}
label{
  font-weight: bold;
  font-size: 150%;
  box-shadow:none;
  border:0 none;
  outline:0;
}
.envoi{
  background-color: #5c7fd4;
  border-color: #5c7fd4;
  color: white;
  width: 13rem;
  padding: 1%;
  border-radius: 4px;
  box-shadow:none;
  border:0 none;
  outline:0;
}

.textar{
  height: 10vh;
}
.allpage{
  width: 105%;
  height: 105%;
  margin-left: -2%;
  margin-right: -3%;
  margin-top: 0%;
  margin-bottom: -5%;
  padding-bottom: 20%;
  padding-right: 1%;
  background: linear-gradient(to bottom left, #E1E1E1 50%, #F1F1F1 50%) no-repeat center center fixed;

}

PanelMenu{
  max-width: 80%;
}
Sidebar{
  max-width: 80%;
}
  /*commande pour la gestion de la sidebar */
  .page-normal {
    margin-left: -10px;
    margin-right: -15px;
    transition-duration: 0.35s;

  }
  .page-shift {
      margin-left: 19rem;
      transition-duration: 0.35s;
      margin-right: -15px;
  }
/*bouton envoyer la réponse */
.envoyer{
  margin: 5px;
  background-color : #5c7fd4;
  border-color: #5c7fd4;
  color : white;
  margin: 0.15em;
}

.content{
  text-align : left;
  max-width: 90%;
}
  /*Css des autres boutons */
  Button{
  margin: 5px;
  background-color : #F9F9F9;
  border-color: #F9F9F9;
  color : grey;
  margin: 0.15em;
}
.backtheorie{
  width: 13rem;
  font-size: 120%;
  padding-top: -10px;
  padding-bottom: -10px;
  margin-left: -0.2%;
}
.backtheorie:hover{
  background-color: blue;
  transition-duration: .5s;
}
h2{
  font-size: 150%;
}
</style>