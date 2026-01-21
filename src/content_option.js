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

const uiuxSkills = [
    {
        title: "UI стили (UI/UX Pro Max)",
        items: [
            "Minimalism & Swiss Style",
            "Glassmorphism",
            "Neumorphism",
            "Brutalism",
            "Claymorphism",
            "Aurora UI",
            "Dark Mode (OLED)",
        ],
    },
    {
        title: "Цветовые палитры",
        items: [
            "SaaS Trust Blue (#2563EB / #3B82F6)",
            "E-commerce Luxury (#1C1917 / #CA8A04)",
            "Service Landing Page (#3B82F6 / #F97316)",
        ],
    },
    {
        title: "Типографические пары",
        items: [
            "Playfair Display + Inter",
            "Poppins + Open Sans",
            "Space Grotesk + DM Sans",
            "Cormorant Garamond + Libre Baskerville",
        ],
    },
    {
        title: "UX-гайдлайны",
        items: [
            "Контраст текста 4.5:1+",
            "Focus-states для клавиатуры",
            "Touch targets 44x44px",
            "Поддержка reduced motion",
            "Четкая обратная связь об ошибках",
        ],
    },
    {
        title: "Charts & data patterns",
        items: [
            "Line chart для трендов",
            "Grouped bar для сравнений",
            "Donut chart для долей",
            "Scatter plot для корреляций",
            "Funnel chart для конверсий",
        ],
    },
    {
        title: "Стековые направления",
        items: [
            "React",
            "Next.js",
            "Vue",
            "Svelte",
            "SwiftUI",
            "React Native",
            "Flutter",
            "Tailwind",
            "shadcn/ui",
        ],
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
    uiuxSkills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
