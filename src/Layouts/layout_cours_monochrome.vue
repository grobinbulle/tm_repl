<template>
  <div class="allpage">
    <div class="page" :class="{'page-shift': visibleLeft, 'page-normal': !visibleLeft}" style="height: 100%;">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="menubar-css">
      <!-- création du menu-haut -->
      <Menubar :model="item" style="margin-top: -65px; width: 101.3%; position: fixed; z-index: 4; margin-left : 0%; margin-right: -11%; max-height: 65px;">
        <!-- éléments à gauche du menu -->
        <template #start> 
          <Button class="but-menubar">Retour à la page d'accueil</Button>
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
        <h1>Titre du cours</h1>
        <!-- appel de la barre latérale -->
        <Sidebar v-model:visible="visibleLeft" :modal="false" :autoZIndex="true">
          <p>Naviguer dans ce chapitre</p>
          <div>
              <Button type="button" icon="pi pi-plus" label="étendre" @click="expandAll" />
              <Button type="button" icon="pi pi-minus" label="réduire" @click="collapseAll" />
          </div>
          <PanelMenu :model="items" v-model:expandedKeys="expandedKeys"></PanelMenu>
        </Sidebar>
        <div class="contenu">  
                  <!-- ajout du contenu textuel de notre cour -->
          <div class="text" style="margin-top: 0%; z-index: 1; float: none; width: 80%; height : 60%; font-size: 20px; text-align : left; margin-right : auto; margin-left: auto; font-size: 150%; font-family : system-ui">                 
            <h3>Titre </h3>
            <h5>Content</h5>
            <br>    
          </div>
          <div class="visuel">
            <!-- ajout de l'image du robot -->
            <iframe width="80%" height="80%" src="https://www.youtube.com/embed/vMVg9QMOxvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <figure><img src="../assets/nao.jpg" style="height : 85%; width: 60%; margin:left: 50%; margin-right: 0%; margin-top: 0%;"/><figcaption>Le robot nao</figcaption></figure>
          </div>
          <!--Possibilité de changer le style de message : severity = success, info, warn, error-->
          <Message class="Message" severity="warn" :closable="false">Il est important de noter que nous utilisions dans ce cours le robot micro:bit</Message>        
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
        <div class="coche">
          <input type="checkbox" id="compris" name="J'ai compris le contenu de ce chapitre">
          <label for="compris">J'ai compris le contenu de ce chapitre</label>
        </div>
        <Button class="p-button-raised" id="exercice" style="position: center; min-height: 100%;">Vers les exercices</Button>
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
.Message{
  max-width : 80%;
  margin-left : 10%;
}
h5{
  font-weight: normal;
}
.allpage{
  width: 102%;
  min-height:100vh;
  margin-top: 0%;
  margin-bottom: -5%;
  padding-bottom: 4%;
  padding-right: 1%;
  background-color: #E1E1E1;
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