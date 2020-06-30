const translation = {
  common: {
    yes: 'Да',
    no: 'Нет',
    currencyUa: 'грн',
    messages: {
      smthWrong: 'Упс! Что-то пошло не так!',
    },
    breadcrumbs: {
      home: 'Главная',
    },
  },
  menu: {
    home: 'Главная',
    delivery: 'Оплата и доставка',
    aboutUs: 'О нас',
  },
  product: {
    view: {
      availability: 'Наличие',
      available: 'Есть на складе',
      notAvailable: 'Нет в наличии',
      inCart: 'Уже в корзине',
      addToCart: 'Добавить в корзину',
      category: 'Категория',
      description: 'Описание',
      ingredients: 'Состав',
    },
  },
  checkout: {
    title: 'Оформление заказа',
    placeOrder: 'Заказать',
    loginTitle: 'Есть аккаунт?',
    toLogin: 'Ввойти',
    shippingTitle: 'Адрес доставки',
    additionalTitle: 'Дополнительная информация',
    name: 'Имя',
    surname: 'Фамилия',
    city: 'Город(село)',
    npDep: 'Отделение "Нова Пошта"',
    phone: 'Телефон',
    email: 'Email',
    password: 'Пароль',
    repeatPassword: 'Повторите пароль',
    createAccount: 'Создать аккаунт?',
    notes: 'Примечание',
    notesPlaceholder: 'Примечания о Вашем заказе, например, уточнения о доставке.',
    orderTitle: 'Ваш заказ',
    agreePrivacyPolicy: 'Я соглас(ен/на) с <s>политикой конфиденциальности</s>',
    helpText: {
      phone: '+380XXXXXXXXX',
      npDep: 'номер',
    },
    products: {
      total: 'Итого',
      columns: {
        name: 'Продукт',
        total: 'Итого',
      },
    },
  },
  termsPopup: {
    title: 'Политика конфиденциальности',
    content:
      '<p>- Мы сохраняем Ваши личные данные для обработки Вашего заказа и удобства вашего использования сайта.</p>' +
      '<p>- Мы передаем Ваши данные службам доставки и/или платежным системам для обработки Вашего заказа.</p>' +
      '<p>- Мы не передаем Ваши личные данные другим третьим лицам</p>',
  },
  signIn: {
    title: 'Ввойти',
    email: 'Email',
    password: 'Пароль',
    signIn: 'Ввойти',
    lostPassword: 'Забыли пароль?',
    messages: {
      wrongCred: 'Email или пароль неверны',
      hiUser: 'Привет, {{name}}',
    },
  },
  signUp: {
    title: 'Регистрация',
    name: 'Имя',
    surname: 'Фамилия',
    city: 'Город (село)',
    npDep: 'Отделение "Нова Пошта"',
    phone: 'Телефон',
    email: 'Email',
    password: 'Пароль',
    repeatPassword: 'Повторите пароль',
    register: 'Зарегистрироваться',
    helpText: {
      phone: '+380XXXXXXXXX',
      npDep: 'номер',
    },
    messages: {
      success: 'Поздравляем! Теперь Вы можете залогиниться',
    },
  },
  userMenu: {
    myProfile: 'Мой профиль',
    myOrders: 'Мои заказы',
    signIn: 'Ввойти',
    signUp: 'Зарегистрироваться',
    signOut: 'Выйти',
  },
  orders: {
    header: 'Мои заказы',
    headerAdmin: 'Заказы',
    title: 'Название',
    status: 'Статус',
    price: 'Цена',
    paymentMethod: 'Метод оплаты',
    createdDate: 'Дата',
    noData: 'Нет заказов',
  },
  order: {
    title: 'Заказ #{{id}}',
    titleShort: 'Заказ #{{id}}',
    detailsTitle: 'Детали заказа',
    productsTitle: 'Продукты',
    shippingTitle: 'Детали отправки',
    status: {
      new: 'Новый',
      sent: 'Отправлен',
      retrieved: 'Получен',
    },
    paymentMethod: {
      cash: 'Наличные',
      oncard: 'На карту',
    },
    shippingDetails: {
      name: 'Имя',
      surname: 'Фамилия',
      city: 'Город (село)',
      npDep: 'Отделение "Нова Пошта"',
      phone: 'Телефон',
      email: 'Email',
    },
  },
  profile: {
    title: 'Мой профиль',
    name: 'Имя',
    surname: 'Фамилия',
    city: 'Город (село)',
    npDep: 'Отделение "Нова Пошта"',
    phone: 'Телефон',
    email: 'Email',
    save: 'Сохранить',
    helpText: {
      phone: '+380XXXXXXXXX',
      npDep: 'номер',
    },
  },
  home: {
    title: 'Популярные продукты',
  },
  cart: {
    title: 'Корзина',
    totals: 'Итоги корзины',
    total: 'Итого',
    toCheckout: 'Оформить заказ',
    noData: 'Корзина пустая',
    columns: {
      name: 'Продукт',
      price: 'Цена',
      quantity: 'Количество',
      total: 'Итого',
    },
  },
  aboutUs: {
    title: 'О нас',
  },
  delivery: {
    title: 'Оплата и доставка',
  },
  category: {
    noData: 'В этой категории нет продуктов',
    sorting: {
      byDate: {
        label: 'По дате: {{direction}}',
        asc: 'сначала ранние',
        desc: 'сначала новые',
      },
      byPrice: {
        label: 'По цене: {{direction}}',
        asc: 'дешевые -> дорогие',
        desc: 'дорогие -> дешевые',
      },
    },
  },
  pagination: {
    show: 'Показать {{qty}}',
    showing: 'Показано {{from}} - {{to}} с {{total}} результатов',
  },
  cartCanvas: {
    title: 'Ваша корзина',
    total: 'Итого',
    toCart: 'К козрине',
    toCheckout: 'Оформить',
  },
  paymentMethod: {
    oncard: 'Скинуть на карту',
    cash: 'Оплатить наложенным платежем',
    helpText: {
      oncard: 'Мы свяжемся с Вами и предоставим всю необходимую информацию',
      cash: 'Оплатите при получении ("Нова пошта" взимает дополнительную плату).',
    },
  },
  footer: {
    copyright: '© Копирайт 2020 <l>Bemiracle</l>. Все права защищены.',
  },
};

export default { translation };
