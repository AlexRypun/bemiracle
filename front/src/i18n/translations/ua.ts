const translation = {
  common: {
    yes: 'Так',
    no: 'Ні',
    messages: {
      smthWrong: 'Упс! Щось трапилось!',
    },
    breadcrumbs: {
      home: 'Головна',
    },
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
    placeOrder: 'Замовити',
  },
  signIn: {
    messages: {
      wrongCred: 'Email або пароль невірний',
      hiUser: 'Привіт, {{name}}',
    },
  },
  signUp: {
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
    noOrders: 'Нема замовлень',
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
};

export default { translation };
