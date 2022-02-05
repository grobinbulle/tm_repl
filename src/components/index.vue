<template>
  <html>
    <head>
      <title>Index</title>
      <meta charset="UTF-8">
      <meta name="description" content="Bienvenue sur la nouvelle plateforme d'apprentissage du cours d'informatique.">
      <meta name="keywords" content="informatique, apprentissage, plateforme, collège du sud">
    </head>
    <body>
      <Menubar :model="item" style="margin-top: -65px; width: 103%; position: fixed; z-index: 4; margin-left : -1%; margin-right: -5%">
        <template #start> 
          <SplitButton label="Naviguer dans ce chapitre" style="color: #F9F9F9; margin-bottom: 5px;" :model="items" class="p-button-secondary"></SplitButton>
        </template>
        <template #end>
          <InputText placeholder="Search" type="text" />
          <Button icon="pi pi-user" class="p-button-rounded p-button-info" />
        </template>
      </Menubar>
      <div class="toutepage">
        <div class="content">
          <div>
            <h1 style="">Bienvenue dans CsudInfo</h1>
          </div>
          <div>
            <h2 style="">Qu'est-ce que CsudInfo ?</h2>
          </div>
          <div>
            <h3 style="color: #5c7fd4; text-align: justify; width:60%;"> CsudInfo est la toute nouvelle plateforme du cours d'informatique au Collège du Sud. Elle présente un design retravaillé visant un apprentissage de meilleure qualité.</h3>
          </div>
          <div class="boutons">
            <Button style="background-color: #5c7fd4; border-color: #5c7fd4;">Log In</Button>
            <Button style="background-color: white; color: #5c7fd4;">Sign up</Button>
          </div>
          <p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
        </div>
      </div>
    </body>
  </html>
</template>

<style scoped>
  Button{
    margin: 0.15em;
  }
.content{
  text-align: left;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}
body{
  margin-left: -0.5%;
  margin-right: -0.5%;
  margin-top: 0%;
  margin-bottom: -5%;
  padding-bottom: 10%;
  background: linear-gradient(to bottom left, #E1E1E1 50%, #F1F1F1 50%);
}
.toutepage{
  margin-top: 0px;
}
</style>