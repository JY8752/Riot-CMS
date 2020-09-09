import '@riotjs/hot-reload'
import { component } from 'riot'
import 'semantic-ui-riot'
import App from './app.riot'

// register('router', Router)
// register('route', Route)
component(App)(document.getElementById('app'), {
    title: 'Riot Route Demo'
})