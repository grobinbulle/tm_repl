<template>
  <div class="allpage">
    <div class="menubar-css">
      <!-- création du menu-haut -->
      <Menubar :model="item" style="margin-top: -60px; width: 101.3%; position: fixed; z-index: 4; margin-left : 0%; margin-right: -11%; max-height: 65px;">
        <!-- éléments à gauche du menu -->
        <template #start> 
          <Button class="but-menubar">Retour à la page d'accueil</Button>
        </template>
        <!-- élément à doite du menu -->
        <template>
        </template>
        <template #end>
          <div class="but-menubar">
            <Button icon="pi pi-user" class="p-button-rounded p-button-info user-but" />
          </div>
        </template>
      </Menubar>
    </div>
    <!-- contenu autre que le menu-haut -->
    <div class="toutepage">
      <div class="content">
        <h1>Résumé</h1>
        <p>Nous avons vu que, dans ce chapitre, bla bla bla bla bla bla
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
        </p>
      </div>
      <Button>Passer au prochain chapitre</Button>
    </div>
  </div>
</template>

<style scoped>
  export default {
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
.allpage{
  width: 103%;
  height: 103%;
  margin-left: -1.5%;
  margin-right: -1.5%;
  margin-top: 0%;
  margin-bottom: -1.5%;
}
/* contenu de toute la page*/
  .content{
    text-align: left;
    margin-left: 13%;
    font-size: 120%;
    vertical-align: middle;
    max-width: 70%;
    margin-top: -6%;
  }
.toutepage{
  padding-top: 15%;
  padding-bottom: 15%;
  margin-left: 0%;
  margin-top: 0%;
  width: 103%;
  height: 103%;
  animation: fadein 1s;
  background: linear-gradient(to bottom left, #5c7fd4 50%, #D3D3D3 50%) no-repeat center center fixed;
}
p{
  font-size: 130%;
  text-align: left;
  font-family : system-ui;
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
/*Autres boutons */
Button{
  margin-left: 5px;
  background-color : #F9F9F9;
  border-color: #F9F9F9;
  color : grey;
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
h1{
  font-family : system-ui;
}

</style>