const translation = {
  common: {
    yes: 'Yes',
    no: 'No',
    currencyUa: 'hrn',
    messages: {
      smthWrong: 'Oops! Something went wrong!',
    },
    breadcrumbs: {
      home: 'Home',
    },
  },
  menu: {
    home: 'Home',
    delivery: 'Payments and delivery',
    aboutUs: 'About us',
  },
  product: {
    view: {
      availability: 'Availability',
      available: 'In stock',
      notAvailable: 'Not available',
      inCart: 'Already in cart',
      addToCart: 'Add to cart',
      category: 'Category',
      description: 'Description',
      ingredients: 'Ingredients',
    },
  },
  checkout: {
    title: 'Checkout',
    placeOrder: 'Place order',
    loginTitle: 'Returning customer?',
    toLogin: 'Click here to login',
    shippingTitle: 'Shipping details',
    additionalTitle: 'Additional information',
    name: 'First name',
    surname: 'Last name',
    city: 'City',
    npDep: 'Nova Poshta Dep',
    phone: 'Phone',
    email: 'Email',
    password: 'Password',
    repeatPassword: 'Repeat password',
    createAccount: 'Create an account?',
    notes: 'Order notes',
    notesPlaceholder: 'Notes about your order, e.g. special notes for delivery.',
    orderTitle: 'Your order',
    agreePrivacyPolicy: 'I agree with the <s>privacy policy</s>',
    helpText: {
      phone: '+380XXXXXXXXX',
      npDep: 'digit',
    },
    products: {
      total: 'Total',
      columns: {
        name: 'Product',
        total: 'Total',
      },
    },
  },
  termsPopup: {
    title: 'Terms & Conditions',
    content:
      '<p>- We save your personal data to process your order and to support your experience throughout this website.</p>' +
      '<p>- We share your personal data with delivery services and/or payment systems to process your order.</p>' +
      "<p>- We don't share your personal data with any other third parties.</p>",
  },
  signIn: {
    title: 'Login',
    email: 'Email',
    password: 'Password',
    signIn: 'Log in',
    lostPassword: 'Lost your password?',
    messages: {
      wrongCred: 'Email or password is wrong',
      hiUser: 'Hi, {{name}}',
    },
  },
  signUp: {
    title: 'Register',
    name: 'First name',
    surname: 'Last name',
    city: 'City',
    npDep: 'Nova Poshta Dep',
    phone: 'Phone',
    email: 'Email',
    password: 'Password',
    repeatPassword: 'Repeat password',
    register: 'Register',
    helpText: {
      phone: '+380XXXXXXXXX',
      npDep: 'digit',
    },
    messages: {
      success: 'Congratulates! Now you can sign in with your credentials',
    },
  },
  userMenu: {
    myProfile: 'My Profile',
    myOrders: 'My Orders',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signOut: 'Sign Out',
  },
  orders: {
    header: 'My orders',
    headerAdmin: 'Orders',
    title: 'Title',
    status: 'Status',
    price: 'Price',
    paymentMethod: 'Payment method',
    createdDate: 'Date',
    noData: 'There are no orders',
  },
  order: {
    title: 'Order #{{id}}',
    titleShort: 'Order #{{id}}',
    detailsTitle: 'Order details',
    productsTitle: 'Products',
    shippingTitle: 'Shipping details',
    status: {
      new: 'New',
      sent: 'Sent',
      retrieved: 'Retrieved',
    },
    paymentMethod: {
      cash: 'Cash',
      oncard: 'Card',
    },
    shippingDetails: {
      name: 'First name',
      surname: 'Last name',
      city: 'City',
      npDep: 'Nova Poshta Dep',
      phone: 'Phone',
      email: 'Email',
    },
  },
  profile: {
    title: 'My profile',
    name: 'First name',
    surname: 'Last name',
    city: 'City',
    npDep: 'Nova Poshta Dep',
    phone: 'Phone',
    email: 'Email',
    save: 'Save',
    helpText: {
      phone: '+380XXXXXXXXX',
      npDep: 'digit',
    },
  },
  home: {
    title: 'Popular products',
  },
  cart: {
    title: 'Cart',
    totals: 'Cart totals',
    total: 'Total',
    toCheckout: 'Proceed to checkout',
    noData: 'The cart is empty',
    columns: {
      name: 'Product',
      price: 'Price',
      quantity: 'Quantity',
      total: 'Total',
    },
  },
  aboutUs: {
    title: 'About us',
  },
  delivery: {
    title: 'Payments and delivery',
  },
  category: {
    noData: 'There are no products in this category',
    sorting: {
      byDate: {
        label: 'By date: {{direction}}',
        asc: 'earliest to latest',
        desc: 'latest to earliest',
      },
      byPrice: {
        label: 'By price: {{direction}}',
        asc: 'cheep -> expensive',
        desc: 'expensive -> cheep',
      },
    },
  },
  pagination: {
    show: 'Show {{qty}}',
    showing: 'Showing {{from}} - {{to}} of {{total}} results',
  },
  cartCanvas: {
    title: 'Your Cart',
    total: 'Total',
    toCart: 'View cart',
    toCheckout: 'Checkout',
  },
  paymentMethod: {
    oncard: 'Send to card',
    cash: 'Cash on delivery',
    helpText: {
      oncard: 'We will contact you and provide with details.',
      cash: 'Pay upon delivery ("Nova poshta" charges an extra fee).',
    },
  },
  footer: {
    copyright: '© Copyright 2020 <l>Bemiracle</l>. All Rights Reserved.',
  },
};

export default { translation };
