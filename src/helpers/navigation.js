// Components
import Home from '../components/home';
import HowToPlay from '../components/how-to-play';
import Contacts from '../components/contacts';
import Rules from '../components/rules';

const navigation = [
    {
        component: Home,
        title: 'Главная'
    },
    {
        component: HowToPlay,
        title: 'Как играть'
    },
    {
        component: Rules,
        title: 'Правила'
    },
    {
        component: Contacts,
        title: 'Команда'
    }
];

export default navigation;
