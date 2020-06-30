const translation = {
  common: {
    yes: 'Так',
    no: 'Ні',
    currencyUa: 'грн',
    messages: {
      smthWrong: 'Упс! Щось трапилось!',
    },
    breadcrumbs: {
      home: 'Головна',
    },
  },
  menu: {
    home: 'Головна',
    delivery: 'Оплата і доставка',
    aboutUs: 'Про нас',
  },
  product: {
    view: {
      availability: 'Наявність',
      available: 'Є на складі',
      notAvailable: 'Нема в наявності',
      inCart: 'Вже в кошику',
      addToCart: 'Додати в кошик',
      category: 'Категорія',
      description: 'Опис',
      ingredients: 'Склад',
    },
  },
  checkout: {
    title: 'Оформлення замовлення',
    placeOrder: 'Замовити',
    loginTitle: 'Маєте аккаунт?',
    toLogin: 'Увійти',
    shippingTitle: 'Адреса доставки',
    additionalTitle: 'Додаткова інформація',
    name: "Ім'я",
    surname: 'Прізвище',
    city: 'Місто (село)',
    npDep: 'Відділення "Нова Пошта"',
    phone: 'Телефон',
    email: 'Email',
    password: 'Пароль',
    repeatPassword: 'Повторіть пароль',
    createAccount: 'Створити аккаунт?',
    notes: 'Примітки',
    notesPlaceholder: 'Примітки по Вашому замовленню, наприклад, уточнення про доставку.',
    orderTitle: 'Ваше замовлення',
    agreePrivacyPolicy: 'Я згод(ен/на) з <s>політикою конфіденційності</s>',
    helpText: {
      phone: '+380XXXXXXXXX',
      npDep: 'номер',
    },
    products: {
      total: 'Всього',
      columns: {
        name: 'Продукт',
        total: 'Всього',
      },
    },
  },
  termsPopup: {
    title: 'Політика конфіденційності',
    content:
      '<p>- Ми зберігаємо Ваші особисті дані для обробки Вашого замовлення і зручності Вашого використання сайту.</p>' +
      '<p>- Ми передаємо Ваші дані службам доставки і/або платіжним системам для обробки Вашого замовлення.</p>' +
      '<p>- Ми не передаємо Ваші особисті дані іншим третім особам.</p>',
  },
  signIn: {
    title: 'Увійти',
    email: 'Email',
    password: 'Пароль',
    signIn: 'Увійти',
    lostPassword: 'Забули пароль?',
    messages: {
      wrongCred: 'Email або пароль невірний',
      hiUser: 'Привіт, {{name}}',
    },
  },
  signUp: {
    title: 'Реєстрація',
    name: "Ім'я",
    surname: 'Прізвище',
    city: 'Місто (село)',
    npDep: 'Відділення "Нова Пошта"',
    phone: 'Телефон',
    email: 'Email',
    password: 'Пароль',
    repeatPassword: 'Повторіть пароль',
    register: 'Зареєструватися',
    helpText: {
      phone: '+380XXXXXXXXX',
      npDep: 'номер',
    },
    messages: {
      success: 'Вітаємо! Тепер Ви можете залогінитись',
    },
  },
  userMenu: {
    myProfile: 'Мій профіль',
    myOrders: 'Мої замовлення',
    signIn: 'Ввійти',
    signUp: 'Зареєструватися',
    signOut: 'Вийти',
  },
  orders: {
    header: 'Мої замовлення',
    headerAdmin: 'Замовлення',
    title: 'Назва',
    status: 'Статус',
    price: 'Ціна',
    paymentMethod: 'Метод оплати',
    createdDate: 'Дата',
    noData: 'Нема замовлень',
  },
  order: {
    title: 'Замовлення #{{id}}',
    titleShort: 'Зам. #{{id}}',
    detailsTitle: 'Деталі замовлення',
    productsTitle: 'Продукти',
    shippingTitle: 'Деталі відправлення',
    status: {
      new: 'Новий',
      sent: 'Відправлений',
      retrieved: 'Отриманий',
    },
    paymentMethod: {
      cash: 'Готівка',
      oncard: 'На карту',
    },
    shippingDetails: {
      name: "Ім'я",
      surname: 'Прізвище',
      city: 'Місто (село)',
      npDep: 'Відділення "Нова Пошта"',
      phone: 'Телефон',
      email: 'Email',
    },
  },
  profile: {
    title: 'Мій профіль',
    name: "Ім'я",
    surname: 'Прізвище',
    city: 'Місто (село)',
    npDep: 'Відділення "Нова Пошта"',
    phone: 'Телефон',
    email: 'Email',
    save: 'Зберегти',
    helpText: {
      phone: '+380XXXXXXXXX',
      npDep: 'номер',
    },
  },
  home: {
    title: 'Популярні продукти',
  },
  cart: {
    title: 'Кошик',
    totals: 'Підсумки кошика',
    total: 'Всього',
    toCheckout: 'Оформити замовлення',
    noData: 'Кошик пустий',
    columns: {
      name: 'Продукт',
      price: 'Ціна',
      quantity: 'Кількість',
      total: 'Всього',
    },
  },
  aboutUs: {
    title: 'Про нас',
  },
  delivery: {
    title: 'Оплата і доставка',
  },
  category: {
    noData: 'В цій категорії немає продуктів',
    sorting: {
      byDate: {
        label: 'За датою: {{direction}}',
        asc: 'спочатку ранні',
        desc: 'спочатку нові',
      },
      byPrice: {
        label: 'За ціною: {{direction}}',
        asc: 'дешеві -> дорогі',
        desc: 'дорогі -> дешеві',
      },
    },
  },
  pagination: {
    show: 'Показати {{qty}}',
    showing: 'Показано {{from}} - {{to}} з {{total}} результатів',
  },
  cartCanvas: {
    title: 'Ваш кошик',
    total: 'Всього',
    toCart: 'До кошика',
    toCheckout: 'Оформити',
  },
  paymentMethod: {
    oncard: 'Скинути на карту',
    cash: 'Оплатити при отриманні',
    helpText: {
      oncard: "Ми зв'яжемося з Вами та надамо всю необхідну інформацію.",
      cash: 'Оплачуйте при отриманні ("Нова пошта" знімає додаткову плату).',
    },
  },
  footer: {
    copyright: '© Копірайт 2020 <l>Bemiracle</l>. Всі права захищені.',
  },
};

export default { translation };
