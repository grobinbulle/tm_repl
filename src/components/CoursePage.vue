<template>
  <div class="allpage">
    <!-- div englobant l'intégralité de la page -->
    <div class="page" :class="{'page-shift': visibleLeft, 'page-normal': !visibleLeft}" style="height: 100%;">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="menubar-css">
      <!-- création du menu-haut -->
      <Menubar :model="item" style="margin-top: -65px; width: 101.3%; position: fixed; z-index: 4; margin-left : 0%; margin-right: -11%; max-height: 65px;">
        <!-- éléments à gauche du menu -->
        <template #start> 
          <Button class="but-menubar"><router-link :to="'/'" class="menurouter">Retour à la page d'accueil</router-link></Button>          
          <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="p-mr-2 arrow-but"/>
        </template>
        <!-- élément à doite du menu -->
        <template #end>
          <Button icon="pi pi-user" class="p-button-rounded p-button-info user-but" />
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
          <div>
              <Button type="buttonside" icon="pi pi-plus" label="étendre" @click="expandAll" />
              <Button type="buttonside" icon="pi pi-minus" label="réduire" @click="collapseAll" />
          </div>
          <PanelMenu :model="items" v-model:expandedKeys="expandedKeys">
          </PanelMenu>
        </Sidebar>
        <div class="contenu">  
                  <!-- ajout du contenu textuel de notre cour -->
          <div class="text" style="margin-top: 0%; z-index: 1; float: none; width: 80%; height : 60%; font-size: 20px; text-align : left; margin-right : auto; margin-left: auto; font-size: 150%; font-family : system-ui">                 
                            <h3>2.1.1. Introduction </h3>
      <h5>Les robots sont des <b>appareils mécaniques</b> contrôlés par <b>ordinateur</b>, capables d’effectuer des tâches automatisées de manière <b>autonome</b>.<br> Cela fait bien longtemps qu’ils jouent un rôle important dans l’industrie, dans la technologie, dans la médecine, dans la recherche et dans les sciences, à savoir dans pratiquement tous les domaines de l’activités humaines.<br> Alors que les premiers robots étaient conçus pour assister les humains dans les tâches monotones et pénibles physiquement, les robots de nouvelle génération sont capables de <b>collecter des données sur leur environnement</b> à l’aide de capteurs, de <b>prendre des décisions pertinentes</b> ou d’<b>adapter leur comportement en fonction de leur environnement</b> (auto-apprentissage). On parle alors de robots <b>auto-apprenants</b> (self-learning robot en anglais).
    
      <br>Il existe différents types de robots : les robots <b>industriels</b> fixes, les robots <b>mobiles</b> ou les robots <b>humanoïdes</b>. Mais il y a une chose que tous les robots ont en commun : ils doivent tous être programmés. Il faut des humains pour décrire de manière très précise la tâche qu’un robot doit effectuer à l’aide d’une suite d’instructions, à savoir d’un programme informatique.</h5>
      <br>    
          </div>
          <div class="visuel">
            <!-- ajout de l'image du robot -->
            <iframe width="56%" height="70%" src="https://www.youtube.com/embed/vMVg9QMOxvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <figure><img src="../assets/nao.jpg" style="height : 50%; width: 50%; margin:left: 50%; margin-right: 0%; margin-top: 0%;"/><figcaption>Le robot nao</figcaption></figure>
          </div>
          <Message class="Message" severity="warn" :closable="false">Il est important de noter que nous utilisons dans ce cours le robot micro:bit</Message>        
        </div>
      </div>
      <div style="margin-top: 0%; z-index: 1; float: none; width: 80%; height : 60%; font-size: 20px; text-align : left; margin-right : auto; margin-left: auto; font-size: 25px;">
        <h2>Vos notes</h2>
        <div id="app">
          <Editor v-model="value" editorStyle="height: 320px"/>
        </div>  
      </div>
      <!-- création d'une div englobant les éléments de fin de page -->
      <div class="findepage" style="margin-top: 5%; float: none">
        <Button class="p-button-raised" id="exercice" style="position: center; min-height: 100%;"><router-link :to="'/CoursePage'" class="routerexercice">Aller au chapitre précédent</router-link></Button>
        <ToggleButton v-model="checked" onLabel="J'ai compris le contenu de ce chapitre" offLabel="Cliquez pour valider ce chapitre" onIcon="pi pi-check" offIcon="pi pi-times" id="valider" />
        <Button class="p-button-raised" id="exercice" style="position: center; min-height: 100%;"><router-link :to="'/Exercice'" class="routerexercice">Aller vers les exercices</router-link></Button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      visibleLeft: true,
      checked: false,
      items: [{
                    key: '0',
                    label: 'Robotique',
                    items: [{
                            key: '0_0',
                            label: '2.1 Le monde des robots',
                            to: 'CoursePage'
                        },
                        {
                            key: '0_1',
                            label: '2.2 Mettre le robot en mouvement',
                        },
                        {
                            key: '0_2',
                            label: '2.3. Le robot réagit à son environnement',
                        }
                    ]
                },
                {
                    key: '1',
                    label: 'Programmation',
                    items: [{
                            key: '1_0',
                            label: '1.1. Introduction au chapitre',
                        },
                        {
                            key: '1_1',
                            label: '1.2. Alphabets, mots et langages',
                        },
                        {
                            key: '1_2',
                            label: '1.3. Grammaires',
                        },
                        
                    ]
                },
                {
                    key: '2',
                    label: 'Programmation système',
                    items: [{
                            key: '2_0',
                            label: '1.1. Introduction aux fichiers',
                        },
                        {
                            key: '2_1',
                            label: '1.2. Systèmes de fichiers',
                        },
                        {
                            key: '2_2',
                            label: '1.3. Sauvegarder des données de manière permanente',
                        },
                        
                    ]
                },
            ],
            expandedKeys: {}
        }
    },
    methods: {
        expandAll() {
            for (let node of this.items) {
                this.expandNode(node);
            }

            this.expandedKeys = {
                ...this.expandedKeys
            };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.items && node.items.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.items) {
                    this.expandNode(child);
                }
            }
        }
    },
    mounted() {
        this.expandedKeys[this.items[0.0_1]] = true;
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

.allpage{
  width: 102%;
  min-height:100vh;
  margin-left: -1%;
  margin-right: -3%;
  margin-top: 0%;
  margin-bottom: -5%;
  padding-bottom: 4%;
  padding-right: 1%;
  background: linear-gradient(to bottom left, #E1E1E1 50%, #F1F1F1 50%) no-repeat center center fixed;
}
.routerexercice{
  color: white;
  text-decoration : none;
}
.menurouter{
  color: grey;
  text-decoration : none;
}
h5{
  font-weight: normal;
}
.Message{
  max-width : 80%;
  margin-left : 10%;
}
.p-inputtext-lg{
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
}
.toutepage{
  animation:fadein 1s;
}
h2{
  font-family : system-ui;
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
  background-color: #5c7fd4;
  border-color: #5c7fd4;
  color: white;
  display: inline-block;
  font-size: 120%;
}
#valider{
  font-size: 120%;
  display: inline-block;
  margin-bottom: 0.3%;
}
#exercice:hover{
  background-color: blue;
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
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
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
  margin-top: -3%;
  max-width: 80%;
}
.but-menubar{
  font-size: 2vh;
  align-items: center;
}
h1{
  font-size: 40px;
  background-color: #5c7fd4;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: white;
  width: 104%;
  margin-left: -4%;
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
  align-items:center;
  justify-content: space-between;
  margin-left: 0%;
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