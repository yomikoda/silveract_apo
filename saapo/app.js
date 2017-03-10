var apos = require('apostrophe')({
  shortName: 'saapo',
  title: 'saapo',

  // These are the modules we want to bring into the project.
  modules: {
    // This configures the apostrophe-users module to add an admin-level
    // group by default
    'apostrophe-users': {
      groups: [
        {
          title: 'guest',
          permissions: [ ]
        },
        {
          title: 'admin',
          permissions: [ 'admin' ]
        }
      ]
    },
    // This configures the apostrophe-assets module to push a 'site.less'
    // stylesheet by default
    'apostrophe-assets': {
      stylesheets: [
        {
          name: 'basic'
        },
        {
          name:'comment-ca-marche'
        },
        {
          name: 'contact'
        },
        {
          name: 'home'
        },
        {
          name: 'question-fréquentes'
        },
        {
          name: 'qui-sommes-nous'
        },
        {
          name: 'reset'
        },
        {
          name: 'swiper.mini'
        }
      ],
      scripts : [
        {
          name: 'swiper.min'
        },
        {
          name: 'basic'
        },
        {
          name: 'comment-ca-marche'
        },
        {
          name: 'contact'
        },
        {
          name: 'index'
        },
        {
          name: 'qui-sommes-nous'
        }
      ]
    },
    // This configures our default page template
    'apostrophe-pages': {
      types: [
        {
          name: 'home',
          label: 'Home'
        },
        {
          name: 'index',
          label: 'Index'
        },
        {
          name: 'contact',
          label: 'Contact'
        },
        {
          name: 'comment-ca-marche',
          label: 'Comment-ça-marche ?'
        },
        {
          name: 'questions-fréquentes',
          label: 'Questions Fréquentes'
        },
        {
          name: 'qui-sommes-nous',
          label: 'Qui Sommes Nous ?'
        }
      ]
    }
    // Add your modules and their respective configuration here!
  }

});
