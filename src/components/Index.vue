<template>
  <div class="allpage">
    <Menubar :model="item" style="margin-top: -55px; width: 102%; position: fixed; z-index: 4; margin-left : -2%; margin-right: -5%;">
      <template #start> 
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
        <Button icon="pi pi-user" class="p-button-rounded p-button-info"/>
      </template>
    </Menubar>
    <div class="toutepage">
      <div class="content">
        <div>
          <h1 style="font-size: 250%;">Bienvenue dans 21Learning</h1>
        </div>
        <div>
          <h2 style="font-size: 230%;">Qu'est-ce que 21Learning ?</h2>
        </div>
        <div>
          <h3 style="color: #5c7fd4; text-align: left; width:80%;   font-size: 150%;"> 21Learning est la toute nouvelle plateforme du cours d'informatique au Collège du Sud. Elle présente un design retravaillé visant un apprentissage de meilleure qualité.</h3>
        </div>
        <div>
          <Button class="boutons" style="background-color: white; color: #5c7fd4; margin: 0.15em; width: 15%; height: 30%; margin-left: 0.5%; margin-right: 0.5%; color: white;"><router-link :to="'/signup'" class="rlink">S'inscrire</router-link></Button>
          <Button class="boutons" style="background-color: #5c7fd4; border-color: #5c7fd4;margin: 0.15em; width: 15%; height: 30%; margin-left: 0.5%; margin-right: 0.5%;"><router-link :to="'/login'" class="rlink2">Se connecter</router-link></Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
    }
</script>
<style scoped>
.allpage{
  width: 102%;
  min-height:100vh;
  margin-top: -0.5%;
  margin-bottom: -0.5%;
  padding-bottom: 10%;
  background: linear-gradient(to bottom left, #E1E1E1 50%, #F1F1F1 50%) no-repeat center center fixed;
}
.content{
  max-width: 60%;
  text-align: left;
  display: inline-block;
  margin-left: 0;
  font-size: 120%;
  vertical-align: middle;
  animation: fadein 2s;
  font-family : system-ui;
}
.toutepage{
  padding-bottom: 10.5%;
  padding-top: 8.5%;
  margin-top: 0%;
}
.rlink{
  color:#5c7fd4;
  text-decoration : none;
}
.rlink2{
  color:white;
  text-decoration : none;
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