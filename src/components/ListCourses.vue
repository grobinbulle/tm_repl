<template>
  <div class="allpage">
    <div class="menubar-css">
      <!-- création du menu-haut -->
      <Menubar :model="item" style="margin-top: -65px; width: 101%; position: fixed; z-index: 4; margin-left : 0%; margin-left: -0%; max-height: 65px;">
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
      <div class="content" style ="margin-top : 50px; width: 105%;">
        <h1>Choisissez votre cours</h1>
        <div class="toutecarte"> 
          <Card class="carte" id="c1">
            <template #header>
            </template>
            <template #title>
                Cours de programmation
            </template>
            <template #content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </template>
            <template #footer>
              <Button class="Bouton"><router-link :to="'/TableMatiere'" class="rlink">Aller au chapitre</router-link></Button>
            </template>
          </Card>
          <Card class="carte" id="c2">
            <template #header>
            </template>
            <template #title>
                Cours de Web design
            </template>
            <template #content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </template>
            <template #footer>
              <Button class="Bouton"><router-link :to="'/TableMatiere'" class="rlink">Aller au chapitre</router-link></Button>
            </template>
          </Card>
          <Card class="carte" id="c3">
            <template #header>
            </template>
            <template #title>
                Cours de Robotique
            </template>
            <template #content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </template>
            <template #footer>
              <Button class="Bouton"><router-link :to="'/TableMatiere'" class="rlink">Aller au chapitre</router-link></Button>
            </template>
          </Card>
          <Card class="carte" id="c4">
            <template #header>
            </template>
            <template #title>
                L'internet des objets
            </template>
            <template #content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </template>
            <template #footer>
              <Button class="Bouton"><router-link :to="'/TableMatiere'" class="rlink">Aller au chapitre</router-link></Button>
            </template>
          </Card>
          <Card class="carte" id="c5">
            <template #header>
            </template>
            <template #title>
                Les réseaux informatiques
            </template>
            <template #content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </template>
            <template #footer>
              <Button class="Bouton"><router-link :to="'/Tablematiere'" class="rlink">Aller au chapitre</router-link></Button>
            </template>
          </Card>
          <Card class="carte" id="c6">
            <template #header>
            </template>
            <template #title>
                Cours "Listes avancées"
            </template>
            <template #content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </template>
            <template #footer>
              <Button class="Bouton"><router-link :to="'/TableMatiere'" class="rlink">Aller au chapitre</router-link></Button>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- éléments du PanelMenu -->
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
p {
  padding: .5rem;
  line-height: 1.5;
  margin: 0;
}
/* bouton de login*/
.loginbutton{
  margin: 5px;
  background-color : #5c7fd4;
  border-color: #5c7fd4;
  color : white;
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
.allpage{
  width: 102%;
  min-height:100vh;
  margin-top: 0%;
  margin-bottom: -5%;
  margin-left: -1%;
  margin-right: -1%;
  padding-bottom: 10%;
  padding-right: 2%;
  background: linear-gradient(to bottom left, #E1E1E1 50%, #F1F1F1 50%) no-repeat center center fixed;
}
.content{
  max-width: 102%;
}
/* Autres boutons de la page*/
Button{
  margin: 5px;
  background-color : #F9F9F9;
  border-color: #F9F9F9;
  color : grey;
}
.Bouton{
  background-color: #5c7fd4;
  border-color: #5c7fd4;
  color: white;
}

.carte{
  margin-top: 2%;
  max-width: 25rem;
  max-height: 10%;
  display: inline-block;
  margin-left: 1%;
  margin-right: 1%;
  animation: fadein 1s;    
}

#c1:hover{
  background-color: #F1F1F1;
  transition-duration: .5s;
}
#c2:hover{
  background-color: #F1F1F1;
  transition-duration: .5s;
}
#c3:hover{
  background-color: #F1F1F1;
  transition-duration: .5s;
}
#c4:hover{
  background-color: #F1F1F1;
  transition-duration: .5s;
}
#c5:hover{
  background-color: #F1F1F1;
  transition-duration: .5s;
}
#c6:hover{
  background-color: #F1F1F1;
  transition-duration: .5s;
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
.toutecarte{
  margin-right: auto;
  margin-left: -5%;
}
h1{
  font-size: 40px;
  background-color: #5c7fd4;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: white;
  width: 101%;
  margin-left: -1%;
  max-width: 101%;
}
p-panelmenu{
  width: 60%;
  margin-top: 100px;
}
</style>