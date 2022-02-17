      <div class="toutepage">
        <div class="content">
          <h1>Sign up</h1>
          <!-- boutons d'identification -->
          <h3>Username</h3>
          <InputText type="text" v-model="value1" placeholder="Username" />
          <h3>Password</h3>
          <Password v-model="value4" placeholder="Password"/>
          <h3>Confirm Password</h3>
          <Password v-model="value4" placeholder=" Confirm Password"/>
          <div>
          <Button class="signupbutton" style="margin: 1.5rem;">Sign up</Button>
          </div>
        </div>
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