// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//=================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Kherson, Mira str.',
}
var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedIn: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        // big: true,
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        // big: false,
        text: 'Pet project for parsing sport betting data from different platforms (odds) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / skills',
    },

    header,

    main: {
      // skills: {
      //   title: 'All skills',
      //   big: true,
      skills: [
        { name: 'HTML', point: 10, isTop: true },
        { name: 'Handbars', point: 10, isTop: true },
        { name: 'VS Code & NPM', point: 9, isTop: false },
        { name: 'Git & Terminal', point: 7 },
        { name: 'React.js', point: 0 },
        { name: 'PHP', point: null },
      ],
      // },

      // hobbies: {
      //   title: 'My hobbies',
      //   big: false,
      hobbies: [
        { name: 'Reading', isMain: true },
        { name: 'Sport', isMain: false },
        { name: 'Music', isMain: true },
      ],
    },

    footer,
  })
})
// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / education',
    },

    header,

    main: {
      // educations: {
      //   title: 'My education',
      //   big: true,
      educations: [
        { name: 'school', isEnd: true },
        { name: 'сollege', isEnd: false },
        { name: 'university', isEnd: true },
      ],
      // },
      // certificates: {
      //   title: 'My certificates',
      //   big: false,
      certificates: [
        { name: 'Certificat № 1', id: 1234567 },
        { name: 'Certificat № 2', id: 456879 },
        { name: 'Certificat № 3', id: 775532 },
      ],
    },

    footer,
  })
})
// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume / work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT-Brains',
            url: 'https://it-brains.com.ua/',
          },

          duration: {
            from: '06.02.2023',
            for: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'Airbnb competitor. High-load application for searching apartments',
              stacks: [
                { name: 'React.js' },
                { name: 'HTML/CSS' },
                { name: 'Node.js' },
              ],
              stackAmount: 7,
              awardAmount: 3,
              awards: [
                {
                  name: 'Background vrerification - is a feature that provides users to prove that they are real peresons',
                },
                {
                  name: 'Preparing SEO optimazed pages. The automated process of getting data for the app from documents',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})
// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
