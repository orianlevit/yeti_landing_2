import { AppRegistry } from 'react-native';
import App from './App';
import posthog from 'posthog-js'

posthog.init('phc_nlAzvhoW1FZzGV41gZCl38tklflowj3o6dVykMDY9dn',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

AppRegistry.registerComponent('YetiLanding', () => App);
AppRegistry.runApplication('YetiLanding', {
  rootTag: document.getElementById('root')
}); 