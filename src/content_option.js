
const logotext = "<1notlov3/>";
const meta = {
    title: "Портфолио Грачева Максима",
    description: "Я начинающий full-stack и game developer!",
};

const introdata = {
    title: "Грачев Максим",
    animated: {
        first: "Full-stack developer",
        second: "Game developer",
        third: "Разрабатываю сайты, игры и приложения",

    },

    your_img_url: "https://svgur.com/i/zaY.svg",
};

const dataabout = {
    title: "Кто я такой?",
    aboutme: "Я начинающий full-stack разработчик, а так же разработчик игр на платформах Unity и Unreal Engine",
    title2: "Чем я занимаюсь?",
    aboutme2: "Сейчас я активно изучаю языки программирования C#, C++ и Php, занимаюсь разработкой игр и серверов. Кроме того, я увлекаюсь\n" +
        "      разработкой веб-сайтов и приложений."
};


const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "C#",
        value: 75,
    },
    {
        name: "C++",
        value: 70,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Php",
        value: 40,
    },
];



// Import images
// Import images
import sberImage from './assets/images/sber.jpg';
import tarnishedImage from './assets/images/tarnished.jpg';
import realmImage from './assets/images/realm.jpg';
import technomartImage from './assets/images/technomart.jpg';
const dataportfolio = [
    {
        title: "Sber.py",
        img: sberImage,
        description: "Простой клон приложения сбербанка, написанный на Python, с использованием базы данных Access",
        link: "#",
    },
    {
        title: "Tarnished",
        img: tarnishedImage,
        description: "Моя первая action-rpg разработанная на Ue4, с прокачкой уровня, магазином и боссами",
        link: "#",
    },
    {
        title: "Realm of shadows",
        img: realmImage,
        description: "Metroidvania с генерируемыми локациями, прокачкой, магией и боссами . Проект все еще в стадии разработки!!!",
        link: "#",
    },
    {
        title: "Technomart",
        img: technomartImage,
        description: "Сайт магазина строй-материалов и перфораторов",
        link: "#",
    },
];

// ... rest of your code remains unchanged



const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};