// Import images
import sberImage from './assets/images/sber.jpg';
import tarnishedImage from './assets/images/tarnished.jpg';
import realmImage from './assets/images/realm.jpg';
import technomartImage from './assets/images/technomart.jpg';
import yetiImage from './assets/images/yeti.jpg';
import coffeImage from './assets/images/coffe.jpg';
import blobImage from './assets/images/me.jpg';
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

    your_img_url: blobImage
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




const dataportfolio = [
    {
        title: "Sber.py",
        img: sberImage,
        description: "Простой клон приложения сбербанка, написанный на Python, с использованием базы данных Access",
        link: "https://youtu.be/EoD5zvQSYwg",
    },




    {
        title: "Tarnished",
        img: tarnishedImage,
        description: "Моя первая action-rpg разработанная на Ue4, с прокачкой уровня, магазином и боссами",
        link: "https://youtu.be/cZjISttNTu8?si=Qw9wzPwa1KWSbD4x",
    },
    {
        title: "Technomart",
        img: technomartImage,
        description: "Сайт магазина строй-материалов и перфораторов",
        link: "https://1notlov3.github.io/Technomart_1notlov3",


    },
    {
        title: "Coffe Shop",
        img: coffeImage,
        description: "Приложение администратора кофейни написанное на Python",
        link: "https://youtu.be/ydrZuMrKGpo",


    },



    {
        title: "Realm of shadows",
        img: realmImage,
        description: "Metroidvania с генерируемыми локациями, прокачкой, магией и боссами . Проект все еще в стадии разработки!!!",
        link: "#",
    },
    {
        title: "Yeticave",
        img: yetiImage,
        description: "Сайт магазина товаров для горнолыжного спорта",
        link: "https://1notlov3.github.io/1notlov3_yeticave",


    },

];

// ... rest of your code remains unchanged



const contactConfig = {
    YOUR_EMAIL: "webecw@gmail.com",
    YOUR_FONE: "@maximl_lgrachev",
    description: "Я всегда рад связаться и обсудить любые вопросы или проекты. Пишите мне!",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_kgchqcg",
    YOUR_TEMPLATE_ID: "template_7d3hnql",
    YOUR_USER_ID: "OJ5bjrc9W6zxcl16S",
};

const socialprofils = {
    github: "https://github.com/1notlov3",
    vk: "https://vk.com/maksim__grachev",
    instagram: "https://www.instagram.com/1not_lov3/",
    tg: "https://t.me/maximl_lgrachev",
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