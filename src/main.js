import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);
app.use(PrimeVue);

import router from './router/index';

import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Password from 'primevue/password';
import Sidebar from 'primevue/sidebar';
import PanelMenu from 'primevue/panelmenu';
import ScrollPanel from 'primevue/scrollpanel';
import ProgressBar from 'primevue/progressbar';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Editor from 'primevue/editor';
import ToggleButton from 'primevue/togglebutton';
import Message from 'primevue/message';
import CoursePage from './components/CoursePage.vue'
import Index from './components/Index.vue'
import signup from './components/signup.vue'
import login from './components/login.vue'
import Exercice from './components/Exercice.vue'
import ListCourses from './components/ListCourses.vue'
import Resume from './components/Resume.vue'
import TableMatiere from './components/TableMatiere.vue'


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          

app.use(router)
app.use(PrimeVue);

app.component('Message', Message)
app.component('ToggleButton', ToggleButton)
app.component('Editor', Editor)
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('Password', Password);
app.component('Sidebar', Sidebar);
app.component('PanelMenu', PanelMenu);
app.component('ScrollPanel', ScrollPanel);
app.component('ProgressBar', ProgressBar);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Card', Card);
app.component('Checkbox', Checkbox);

app.mount('#app');
