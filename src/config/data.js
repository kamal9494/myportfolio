
export const data = [{
    id: 1,
    img: require('../assets/project_chatbot.png'),
    cat: 'React JS/AWS',
    title: 'ChatBot Web Application using AWS Amplify as backend',
    des: 'Created a fully functional chatbot application using React JS and AWS Lex Service',
    createdOn: 'DEC 2, 2022',
    details: {
        deployURL: 'https://academicbot.netlify.app/',
        repo: 'https://github.com/kamal9494/acadChatBot',
        stack: ['React JS', 'AWS Amplify', 'Bootstrap'],
        overview: 'This chat bot application will helps you to plan your academics. It gives you the information about the courses, pre-requesites of any course and credits of the course.',
        working: 'Visit this web application with following URL',
        services: ['AWS Lex', 'Lambda'],
        architecture: require('../assets/architecture.png'),
        packageInfo: ['for styling i used bootstrap package'],
        packageList: [{
            title: 'bootstrap - 5.2.3',
            des : 'Bootstrap is a popular front-end web development framework that allows you to create responsive and mobile-first websites quickly and easily. It includes CSS and JavaScript components for things like typography, forms and buttons as well as a grid system for laying out content on the page.',
            ref: 'https://www.npmjs.com/package/bootstrap'
        },{
            title: 'aws-amplify - 5.1.1',
            des : 'Amplify will be the complete backend of this application. In Amplify, there are different categories available, like authentication, storage, and interactions. So, interactions will help us communicate with our Lex bot, which is already available in the AWS cloud.',
            ref: 'https://www.npmjs.com/package/aws-amplify'
        },
        {
            title: 'uuid - 9.0.0',
            des : 'UUID stands for Universally Unique Identifier. It is a standardized way of generating unique IDs. I used v4() unique id as a parameter for each message.',
            ref: 'https://www.npmjs.com/package/uuid'
        }],
        frontend: '',
        backend: ['', 'AWS Amplify Interactions category enables AI-powered chatbots in our mobile application. '],
        backendImgs: require('../assets/amplify.gif'),
        ref: [{
            info: 'View Presentation',
            img: 'https://prezi.com/view/A7f1cDTkqEjywMU3j4Wu/',
        }, {
            info: 'Amplify Docs',
            img: 'https://docs.amplify.aws/lib/interactions/chatbot/q/platform/js/',
        }, {
            info: 'react-native-gifted-chat',
            img: 'https://www.npmjs.com/package/react-native-gifted-chat',
        },
        ]
    }
},
];