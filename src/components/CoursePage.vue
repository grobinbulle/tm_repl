<template>
  <!-- création du head -->
  <head>
    import * from './javascript/CoursePage.js'
    <title>Page de cours</title>
    <meta charset="UTF-8">
    <meta name="description" content="Bienvenue sur la nouvelle plateforme d'apprentissage du cours d'informatique.">
    <meta name="keywords" content="informatique, apprentissage, plateforme, collège du sud">
  </head>
  <body>
    <!-- div englobant l'intégralité de la page -->
    <div class="page" :class="{'page-shift': visibleLeft, 'page-normal': !visibleLeft}" style="height: 100%;">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="menubar-css">
      <!-- création du menu-haut -->
      <Menubar :model="item" style="margin-top: -65px; width: 100.7%; position: fixed; z-index: 4; margin-left : 1.5%; margin-right: -10%; max-height: 65px;">
        <!-- éléments à gauche du menu -->
        <template #start> 
          <Button>Retour à la page d'accueil</Button>
          <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="p-mr-2"/>
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

      <!-- fin du menu-haut -->
      <!-- intégration du contenu de notre page -->
      <div class="content" style ="width: 100%;"> 
        <h1>2.1 Le monde des robots</h1>
        <!-- appel de la barre latérale -->
        <Sidebar v-model:visible="visibleLeft" :modal="false" :autoZIndex="true">
          <p>Naviguer dans ce chapitre</p>
          <PanelMenu :model="items" />
        </Sidebar>
        <div class="contenu">  
                  <!-- ajout du contenu textuel de notre cour -->
          <div class="text" style="margin-top: 0%; z-index: 1; float: none; width: 80%; height : 60%; font-size: 20px; text-align : left; margin-right : auto; margin-left: auto; font-size: 25px;">                 
                            <h3>2.1.1. Introduction </h3>
      Les robots sont des appareils mécaniques contrôlés par ordinateur, capables d’effectuer des tâches automatisées de manière autonome. Cela fait bien longtemps qu’ils jouent un rôle important dans l’industrie, dans la technologie, dans la médecine, dans la recherche et dans les sciences, à savoir dans pratiquement tous les domaines de l’activités humaines. Alors que les premiers robots étaient conçus pour assister les humains dans les tâches monotones et pénibles physiquement, les robots de nouvelle génération sont capables de collecter des données sur leur environnement à l’aide de capteurs, de prendre des décisions pertinentes ou d’adapter leur comportement en fonction de leur environnement (auto-apprentissage). On parle alors de robots auto-apprenants (self-learning robot en anglais).
    
      Il existe différents types de robots : les robots industriels fixes, les robots mobiles ou les robots humanoïdes. Mais il y a une chose que tous les robots ont en commun : ils doivent tous être programmés. Il faut des humains pour décrire de manière très précise la tâche qu’un robot doit effectuer à l’aide d’une suite d’instructions, à savoir d’un programme informatique.
      <br>    
          </div>
          <div class="visuel">
            <!-- ajout de l'image du robot -->
            <iframe width="80%" height="80%" src="https://www.youtube.com/embed/vMVg9QMOxvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <figure><img src="../assets/nao.jpg" style="height : 85%; width: 60%; margin:left: 50%; margin-right: 0%; margin-top: 0%;"/><figcaption>Le robot nao</figcaption></figure>
          </div>
        </div>
      </div>
      <div style="margin-top: 0%; z-index: 1; float: none; width: 80%; height : 60%; font-size: 20px; text-align : left; margin-right : auto; margin-left: auto; font-size: 25px;">
        <h2>Vos Notes</h2>
        <div id="app">
          <InputText type="text" class="p-inputtext-lg" v-model="name" placeholder="Vos notes" />
        </div>  
      </div>
      <!-- création d'une div englobant les éléments de fin de page -->
      <div class="findepage" style="margin-top: 0px; float: none">
        <div class="coche">
          <input type="checkbox" id="compris" name="J'ai compris le contenu de ce chapitre">
          <label for="compris">J'ai compris le contenu de ce chapitre</label>
        </div>
        <Button class="p-button-raised" id="exercice" style="position: center; min-height: 100%;">Vers les exercices</Button>
      </div>
    </div>
    </div>
  </body>
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
  export default {
}
<style lang="scss" scoped>
::v-deep(.p-scrollpanel) {
    p {
        padding: .5rem;
        line-height: 1.5;
        margin: 0;
    }

    &.custombar1 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-b);
        }

        .p-scrollpanel-bar {
            background-color: var(--primary-color);
            &:hover {
                background-color: #007ad9;
            }
        }
    }

    &.custombar2 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-b);
            border-bottom: 9px solid var(--surface-b);
        }

        .p-scrollpanel-bar {
            background-color: var(--surface-d);
            border-radius: 0;
            opacity: 0;
        }
    }  
}
body{
  height: 105%;
  margin-left: -2%;
  margin-right: -3%;
  margin-top: 0%;
  margin-bottom: -5%;
  padding-bottom: 4%;
  background: linear-gradient(to bottom left, #E1E1E1 50%, #F1F1F1 50%);
}
.p-inputtext-lg{
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
}
.toutepage{
  margin-left: 0%;
  margin-right: 0%;
}
.coche:hover{
  font-size: 105%;
  transition-duration: .5s;
}
figcaption{
  font-weight: bold;
}
/* css du bouton des exercices*/
#exercice{
  background-color: #ff8000;
  border-color: #ff8000;
  color: white;
  display: inline-block;
  font-size: 120%;
}
#exercice:hover{
  background-color: orange;
  height: 105%;
  width: 105%;
  transition-duration: .5s;
}

/* bouton du menu-haut*/
Button{
  margin: 5px;
  background-color : #F9F9F9;
  border-color: #F9F9F9;
  color : grey;
  text-align: center;
}
navbuttton{
  background-color: #F9F9F9;
  color : grey;
}
.p-button-rounded{
  background-color : #F9F9F9;
}
.visuel{
  display: grid;
  grid-template-columns: 60% 40% 60%;
  align-items: center;
  justify-content: space-between;
  margin-left: 15%;
  margin-top: 3%;
  max-width: 80%;
}
h1{
  font-size: 40px;
  background-color: #5c7fd4;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: white;
  width: 110%;
  margin-left: -4%;
  margin-right: auto;
  max-width: 104%;
}
/*css permettant l'adaptation avec la sidebar */
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
a {
  color : grey;
}
.findepage{
  display: grid;
  grid-template-columns: 40% 30% 30%;
  align-items: center;
  justify-content: space-between;
  margin-left: 20%;
  margin-top: 10%;
}
label {
  font-size: 150%;
  color: grey;
  font-weight: bold;
}
input{
  size: 150%;
}
</style>