export const bandsData = {
  megadeth: {
    name: 'Megadeth',
    genre: 'Трэш-метал',
    year: 1983,
    description: 'Американская трэш-метал группа, основанная в 1983 году гитаристом и вокалистом Дэйвом Мастейном и басистом Дэвидом Эллефсоном после ухода Мастейна из Metallica.',
    members: [
      {
        name: 'Дэйв Мастейн',
        role: 'Вокал, ритм-гитара',
        description: 'Основатель группы, один из лучших гитаристов трэш-метала',
        years: '1983 - настоящее время'
      },
      {
        name: 'Кико Лоурейро',
        role: 'Соло-гитара',
        description: 'Бразильский гитарист, присоединился к группе в 2015 году',
        years: '2015 - настоящее время'
      },
      {
        name: 'Джеймс ЛоМензо',
        role: 'Бас-гитара',
        description: 'Опытный басист, вернулся в группу в 2021 году',
        years: '2006-2010, 2021 - настоящее время'
      },
      {
        name: 'Дирк Вербёрен',
        role: 'Ударные',
        description: 'Бельгийский барабанщик, присоединился в 2014 году',
        years: '2014 - настоящее время'
      }
    ],
    equipment: {
      guitars: [
        {
          model: 'Dean VMNT Signature',
          description: 'Фирменная гитара Дэйва Мастейна с характерным дизайном',
          player: 'Дэйв Мастейн'
        },
        {
          model: 'Jackson King V',
          description: 'Классическая V-образная гитара для трэш-метала',
          player: 'Дэйв Мастейн'
        },
        {
          model: 'Ibanez RG',
          description: 'Современная гитара для технического исполнения',
          player: 'Кико Лоурейро'
        }
      ],
      bass: [
        {
          model: 'Jackson David Ellefson Signature',
          description: 'Фирменная бас-гитара с мощным звуком',
          player: 'Джеймс ЛоМензо'
        },
        {
          model: 'ESP LTD',
          description: 'Надежная бас-гитара для студийной работы',
          player: 'Джеймс ЛоМензо'
        }
      ]
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        alt: 'Megadeth группа',
        caption: 'Megadeth в полном составе'
      },
      {
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
        alt: 'Дэйв Мастейн',
        caption: 'Дэйв Мастейн с гитарой'
      }
    ],
    achievements: [
      {
        title: 'Grammy Award',
        description: 'Победа в номинации "Лучшее метал-исполнение"',
        year: 2017
      },
      {
        title: 'Зал славы метала',
        description: 'Включение в Зал славы метала',
        year: 2019
      }
    ]
  },

  metallica: {
    name: 'Metallica',
    genre: 'Трэш-метал / Хэви-метал',
    year: 1981,
    description: 'Американская трэш-метал группа, основанная в 1981 году в Лос-Анджелесе. Одна из самых влиятельных и коммерчески успешных метал-групп в истории.',
    members: [
      {
        name: 'Джеймс Хэтфилд',
        role: 'Вокал, ритм-гитара',
        description: 'Основатель группы, автор большинства песен',
        years: '1981 - настоящее время'
      },
      {
        name: 'Ларс Ульрих',
        role: 'Ударные',
        description: 'Соосновател группы, датский барабанщик',
        years: '1981 - настоящее время'
      },
      {
        name: 'Кирк Хэммет',
        role: 'Соло-гитара',
        description: 'Присоединился после ухода Дэйва Мастейна',
        years: '1983 - настоящее время'
      },
      {
        name: 'Роберт Трухильо',
        role: 'Бас-гитара',
        description: 'Басист группы с 2003 года',
        years: '2003 - настоящее время'
      }
    ],
    equipment: {
      guitars: [
        {
          model: 'ESP James Hetfield Signature',
          description: 'Фирменная гитара с мощным звуком для ритм-партий',
          player: 'Джеймс Хэтфилд'
        },
        {
          model: 'ESP Kirk Hammett Signature',
          description: 'Гитара для соло-партий с характерным звуком',
          player: 'Кирк Хэммет'
        }
      ],
      bass: [
        {
          model: 'Warwick Robert Trujillo Signature',
          description: 'Фирменная бас-гитара с глубоким звуком',
          player: 'Роберт Трухильо'
        }
      ]
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        alt: 'Metallica',
        caption: 'Metallica на сцене'
      }
    ],
    achievements: [
      {
        title: 'Grammy Awards',
        description: 'Множественные победы в номинациях метал',
        year: '1989-2009'
      },
      {
        title: 'Зал славы рок-н-ролла',
        description: 'Включение в Зал славы рок-н-ролла',
        year: 2009
      }
    ]
  },

  ironmaiden: {
    name: 'Iron Maiden',
    genre: 'Хэви-метал',
    year: 1975,
    description: 'Британская хэви-метал группа, основанная в 1975 году басистом Стивом Харрисом. Одна из самых влиятельных и успешных метал-групп, известная сложными композициями и театральными выступлениями.',
    members: [
      {
        name: 'Брюс Дикинсон',
        role: 'Вокал',
        description: 'Харизматичный фронтмен с мощным голосом',
        years: '1981-1993, 1999 - настоящее время'
      },
      {
        name: 'Стив Харрис',
        role: 'Бас-гитара',
        description: 'Основатель группы, главный автор песен',
        years: '1975 - настоящее время'
      },
      {
        name: 'Дэйв Мюррей',
        role: 'Соло-гитара',
        description: 'Один из трех гитаристов группы',
        years: '1976 - настоящее время'
      },
      {
        name: 'Адриан Смит',
        role: 'Соло-гитара',
        description: 'Гитарист и автор песен',
        years: '1980-1990, 1999 - настоящее время'
      },
      {
        name: 'Янник Герс',
        role: 'Соло-гитара',
        description: 'Третий гитарист группы',
        years: '1990 - настоящее время'
      },
      {
        name: 'Нико МакБрейн',
        role: 'Ударные',
        description: 'Барабанщик группы с 1982 года',
        years: '1982 - настоящее время'
      }
    ],
    equipment: {
      guitars: [
        {
          model: 'Fender Stratocaster',
          description: 'Классическая гитара для характерного звука Iron Maiden',
          player: 'Дэйв Мюррей'
        },
        {
          model: 'Jackson Adrian Smith Signature',
          description: 'Фирменная гитара Адриана Смита',
          player: 'Адриан Смит'
        }
      ],
      bass: [
        {
          model: 'Fender Precision Bass',
          description: 'Легендарная бас-гитара Стива Харриса',
          player: 'Стив Харрис'
        }
      ]
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        alt: 'Iron Maiden',
        caption: 'Iron Maiden на концерте'
      }
    ],
    achievements: [
      {
        title: 'Зал славы метала',
        description: 'Включение в Зал славы метала',
        year: 2005
      }
    ]
  },

  blacksabbath: {
    name: 'Black Sabbath',
    genre: 'Хэви-метал',
    year: 1968,
    description: 'Британская рок-группа, основанная в 1968 году в Бирмингеме. Считается одной из групп, создавших жанр хэви-метал.',
    members: [
      {
        name: 'Оззи Осборн',
        role: 'Вокал',
        description: 'Легендарный фронтмен, "Принц тьмы"',
        years: '1968-1979, 1997-1998, 2001-2006, 2011-2017'
      },
      {
        name: 'Тони Айомми',
        role: 'Соло-гитара',
        description: 'Основатель группы, создатель фирменного звука',
        years: '1968 - настоящее время'
      },
      {
        name: 'Гизер Батлер',
        role: 'Бас-гитара',
        description: 'Басист-основатель группы',
        years: '1968-1984, 1991-1994, 1997-2006, 2011-2017'
      },
      {
        name: 'Билл Уорд',
        role: 'Ударные',
        description: 'Оригинальный барабанщик группы',
        years: '1968-1980, 1983, 1985, 1994, 1997-2006'
      }
    ],
    equipment: {
      guitars: [
        {
          model: 'Gibson SG',
          description: 'Легендарная гитара Тони Айомми',
          player: 'Тони Айомми'
        },
        {
          model: 'Gibson Les Paul',
          description: 'Альтернативная гитара для студийной работы',
          player: 'Тони Айомми'
        }
      ],
      bass: [
        {
          model: 'Fender Precision Bass',
          description: 'Классическая бас-гитара для тяжелого звука',
          player: 'Гизер Батлер'
        }
      ]
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        alt: 'Black Sabbath',
        caption: 'Black Sabbath - пионеры метала'
      }
    ],
    achievements: [
      {
        title: 'Зал славы рок-н-ролла',
        description: 'Включение в Зал славы рок-н-ролла',
        year: 2006
      },
      {
        title: 'Создатели хэви-метала',
        description: 'Признаны создателями жанра хэви-метал',
        year: 1970
      }
    ]
  },

  acdc: {
    name: 'AC/DC',
    genre: 'Хард-рок',
    year: 1973,
    description: 'Австралийская хард-рок группа, основанная в 1973 году братьями Янгами. Одна из самых влиятельных рок-групп всех времен, известная своим мощным звуком и энергичными выступлениями.',
    members: [
      {
        name: 'Брайан Джонсон',
        role: 'Вокал',
        description: 'Вокалист группы с 1980 года',
        years: '1980 - настоящее время'
      },
      {
        name: 'Ангус Янг',
        role: 'Соло-гитара',
        description: 'Соосновател группы, известен школьной формой',
        years: '1973 - настоящее время'
      },
      {
        name: 'Стиви Янг',
        role: 'Ритм-гитара',
        description: 'Племянник Малкольма Янга, заменил его в 2014',
        years: '2014 - настоящее время'
      },
      {
        name: 'Клифф Уильямс',
        role: 'Бас-гитара',
        description: 'Басист группы с 1977 года',
        years: '1977 - настоящее время'
      },
      {
        name: 'Фил Радд',
        role: 'Ударные',
        description: 'Барабанщик группы (с перерывами)',
        years: '1975-1983, 1994-2014, 2015 - настоящее время'
      }
    ],
    equipment: {
      guitars: [
        {
          model: 'Gibson SG',
          description: 'Фирменная гитара Ангуса Янга',
          player: 'Ангус Янг'
        },
        {
          model: 'Gretsch Malcolm Young Signature',
          description: 'Фирменная ритм-гитара',
          player: 'Стиви Янг'
        }
      ],
      bass: [
        {
          model: 'Steinberger',
          description: 'Современная бас-гитара без головки грифа',
          player: 'Клифф Уильямс'
        }
      ]
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        alt: 'AC/DC',
        caption: 'AC/DC на сцене'
      }
    ],
    achievements: [
      {
        title: 'Зал славы рок-н-ролла',
        description: 'Включение в Зал славы рок-н-ролла',
        year: 2003
      }
    ]
  },

  vanhalen: {
    name: 'Van Halen',
    genre: 'Хард-рок',
    year: 1972,
    description: 'Американская хард-рок группа, основанная в 1972 году братьями Эдди и Алексом Ван Халенами. Группа оказала огромное влияние на развитие рок-музыки и гитарной техники.',
    members: [
      {
        name: 'Дэвид Ли Рот',
        role: 'Вокал',
        description: 'Харизматичный фронтмен классического состава',
        years: '1974-1985, 2006-2020'
      },
      {
        name: 'Эдди Ван Хален',
        role: 'Соло-гитара',
        description: 'Легендарный гитарист, революционер техники',
        years: '1972-2020'
      },
      {
        name: 'Алекс Ван Хален',
        role: 'Ударные',
        description: 'Соосновател группы, брат Эдди',
        years: '1972-2020'
      },
      {
        name: 'Майкл Энтони',
        role: 'Бас-гитара',
        description: 'Басист классического состава',
        years: '1974-2006'
      }
    ],
    equipment: {
      guitars: [
        {
          model: 'EVH Wolfgang',
          description: 'Фирменная гитара Эдди Ван Халена',
          player: 'Эдди Ван Хален'
        },
        {
          model: 'Fender Stratocaster "Frankenstrat"',
          description: 'Самодельная гитара Эдди, ставшая легендой',
          player: 'Эдди Ван Хален'
        }
      ],
      bass: [
        {
          model: 'Music Man StingRay',
          description: 'Фирменная бас-гитара Майкла Энтони',
          player: 'Майкл Энтони'
        }
      ]
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        alt: 'Van Halen',
        caption: 'Van Halen в классическом составе'
      }
    ],
    achievements: [
      {
        title: 'Зал славы рок-н-ролла',
        description: 'Включение в Зал славы рок-н-ролла',
        year: 2007
      },
      {
        title: 'Революция в гитарной технике',
        description: 'Эдди Ван Хален изменил подход к игре на гитаре',
        year: 1978
      }
    ]
  }
};
