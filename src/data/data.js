export const dataEN = {
  header:{
    navpanel:[
      {name:'Home', path:'/'},
      {name:'About me', path:'/about'},
      {name:'Contacts', path:'/contacts'}
    ],
    contactButton:'Send me a letter',
  },
  modal: {
    successSent:'The message have been sent successfully. Please wait for an answer',
    succesRetry:'Send another letter',
    failSent:"The message haven't been sent. You can try again or use another channel to contact me.",
    failRetry:'Try again',
    exit:'Click to exit',
    emailP:'Enter your email so I can mail you back',
    emailHolder:'Your email',
    areaP:'Enter your message',
    areaHolder:'Message',
    button:'Send'
  },
  main:{
    h3:'An individual approach, quick start and quality results are my principles.',
    p:[
      'Welcome to the full-stack web application developer promo page. My name is Kirill and if you are looking for a freelancer for your project then you are in the right place.',
      'You can see the list of technologies that I use on the page about me. '
    ]
  },
  about:{
    h3:[
      "Hi there ! I'm Kirill and I'am a JavaScript Developer from Moscow!",
      "I can help you with building your own Amazon 😉."
    ],
    p:[
      "🤟 I like to write code!"
    ],
    back:'Technologies I use on Back-end part: ',
    front:'Technologies I use on Front-end part: ',
    common:'Common technologies: '
  },
  contacts:{
    h3:'3 Simple Ways To Create your next project with me',
    p:'There are many reasons to contact me and start to get your project done',
    contactsList:[
      {
        h4:'Chat me with Telegram', 
        a:{href:'https://t.me/KirillPirinen', text:'@KirillPirinen'},
        p:"It's fastest way to get in touch"
      },
      {
        h4:'Send me a letter with details of your project', 
        a:{href:'mailto:k.pirinen.rus@gmail.com', text:'k.pirinen.rus@gmail.com'},
        p:"It's more convinient way for some people."
      },
      {
        h4:'Just use buil-in form to get me known about you', 
        a:{href:false, text:'Contact me'},
        p:"I'll definately answer you as soon as possible."
      },
    ]
  }
}

export const dataRU = {
  header:{
    navpanel:[
      {name:'Главная', path:'/'},
      {name:'Обо мне', path:'/about'},
      {name:'Контакты', path:'/contacts'}
    ],
    contactButton:'Написать мне',
  },
  modal: {
    successSent:'Сообщение успешно отправлено. Пожалуйста, дождитесь ответа',
    succesRetry:'Отправить ещё одно письмо',
    failSent:"Сообщение не отправлено. Вы можете попробовать отправить снова или выбрать другой способ связи",
    failRetry:'Попробовать снова',
    exit:'Кликни чтобы выйти',
    emailP:'Введите Вашу почту, чтобы я смог ответить',
    emailHolder:'Почта',
    areaP:'Введите сообщение',
    areaHolder:'Сообщение',
    button:'Отправить'
  },
  main:{
    h3:'Индивидуальный подход, быстрое начало работы и качественные результаты - вот мои принципы.',
    p:[
      'Добро пожаловать на web-приложение визитку JS разработчика. Меня зовут Кирилл, и если вы ищете фрилансера для своего проекта, то вы находитесь в нужном месте.',
      'Вы можете ознакомиться со списком технологий, которые я использую в работе, на странице "Обо мне".'
    ]
  },
  about:{
    h3:[
      "Всем привет! Меня зовут Кирилл, и я разработчик JavaScript из Москвы!",
      "Я могу помочь вам сделать свой собственный Амазон 😉."
    ],
    p:[
      "🤟 Мне нравится кодить!"
    ],
    back:'Список технологий, которые я использую для сервера: ',
    front:'Список технологий, которые я использую для клиента: ',
    common:'Общие технологии: '
  },
  contacts:{
    h3: "3 простых способа создать Ваш следующий проект вместе со мной",
    p: "Есть много причин связаться со мной и начать выполнять свой проект",
   contactsList:[
    {
    h4:"Пообщайтесь со мной в Telegram",
    a:{href:"https://t.me/KirillPirinen", text:"@KirillPirinen"},
    p: "Это самый быстрый способ связаться"
    },
   {
   h4:"Пришлите мне письмо с подробной информацией о вашем проекте",
   a:{href:'mailto:k.pirinen.rus@gmail.com', text:'k.pirinen.rus@gmail.com'},
    p: "Для некоторых людей это более удобный способ"
    },
   {
   h4:"Просто используйте встроенную форму, чтобы сообщить мне о вас",
   a:{href:false, text:"Написать мне"},
    p: "Я обязательно отвечу вам как можно скорее"
    },
    ]
    }
}
