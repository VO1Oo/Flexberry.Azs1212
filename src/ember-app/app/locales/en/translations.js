import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAzs1212АзсLForm from './forms/i-i-s-azs1212-азс-l';
import IISAzs1212КолонкаLForm from './forms/i-i-s-azs1212-колонка-l';
import IISAzs1212ОплатаLForm from './forms/i-i-s-azs1212-оплата-l';
import IISAzs1212ПистолетLForm from './forms/i-i-s-azs1212-пистолет-l';
import IISAzs1212РегистОстатковLForm from './forms/i-i-s-azs1212-регист-остатков-l';
import IISAzs1212РезервуарLForm from './forms/i-i-s-azs1212-резервуар-l';
import IISAzs1212СправочникЦенLForm from './forms/i-i-s-azs1212-справочник-цен-l';
import IISAzs1212ТерминалLForm from './forms/i-i-s-azs1212-терминал-l';
import IISAzs1212АзсEForm from './forms/i-i-s-azs1212-азс-e';
import IISAzs1212КолонкаEForm from './forms/i-i-s-azs1212-колонка-e';
import IISAzs1212ОплатаEForm from './forms/i-i-s-azs1212-оплата-e';
import IISAzs1212ПистолетEForm from './forms/i-i-s-azs1212-пистолет-e';
import IISAzs1212РегистОстатковEForm from './forms/i-i-s-azs1212-регист-остатков-e';
import IISAzs1212РезервуарEForm from './forms/i-i-s-azs1212-резервуар-e';
import IISAzs1212СправочникЦенEForm from './forms/i-i-s-azs1212-справочник-цен-e';
import IISAzs1212ТерминалEForm from './forms/i-i-s-azs1212-терминал-e';
import IISAzs1212АзсModel from './models/i-i-s-azs1212-азс';
import IISAzs1212КартыModel from './models/i-i-s-azs1212-карты';
import IISAzs1212КолонкаModel from './models/i-i-s-azs1212-колонка';
import IISAzs1212ОплатаModel from './models/i-i-s-azs1212-оплата';
import IISAzs1212ПистолетModel from './models/i-i-s-azs1212-пистолет';
import IISAzs1212РегистОстатковModel from './models/i-i-s-azs1212-регист-остатков';
import IISAzs1212РезервуарModel from './models/i-i-s-azs1212-резервуар';
import IISAzs1212СоставModel from './models/i-i-s-azs1212-состав';
import IISAzs1212СправочникЦенModel from './models/i-i-s-azs1212-справочник-цен';
import IISAzs1212ТерминалModel from './models/i-i-s-azs1212-терминал';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-azs1212-азс': IISAzs1212АзсModel,
    'i-i-s-azs1212-карты': IISAzs1212КартыModel,
    'i-i-s-azs1212-колонка': IISAzs1212КолонкаModel,
    'i-i-s-azs1212-оплата': IISAzs1212ОплатаModel,
    'i-i-s-azs1212-пистолет': IISAzs1212ПистолетModel,
    'i-i-s-azs1212-регист-остатков': IISAzs1212РегистОстатковModel,
    'i-i-s-azs1212-резервуар': IISAzs1212РезервуарModel,
    'i-i-s-azs1212-состав': IISAzs1212СоставModel,
    'i-i-s-azs1212-справочник-цен': IISAzs1212СправочникЦенModel,
    'i-i-s-azs1212-терминал': IISAzs1212ТерминалModel
  },

  'application-name': 'Azs1212',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Azs1212',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Azs1212',
          title: 'Azs1212'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        azs1212: {
          caption: 'Azs1212',
          title: 'Azs1212',
          'i-i-s-azs1212-регист-остатков-l': {
            caption: 'Регист остатков',
            title: ''
          },
          'i-i-s-azs1212-пистолет-l': {
            caption: 'Пистолет',
            title: ''
          },
          'i-i-s-azs1212-азс-l': {
            caption: 'Азс',
            title: ''
          },
          'i-i-s-azs1212-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-azs1212-справочник-цен-l': {
            caption: 'Справочник цен',
            title: ''
          },
          'i-i-s-azs1212-терминал-l': {
            caption: 'Терминал',
            title: ''
          },
          'i-i-s-azs1212-колонка-l': {
            caption: 'Колонка',
            title: ''
          },
          'i-i-s-azs1212-резервуар-l': {
            caption: 'Резервуар',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-azs1212-азс-l': IISAzs1212АзсLForm,
    'i-i-s-azs1212-колонка-l': IISAzs1212КолонкаLForm,
    'i-i-s-azs1212-оплата-l': IISAzs1212ОплатаLForm,
    'i-i-s-azs1212-пистолет-l': IISAzs1212ПистолетLForm,
    'i-i-s-azs1212-регист-остатков-l': IISAzs1212РегистОстатковLForm,
    'i-i-s-azs1212-резервуар-l': IISAzs1212РезервуарLForm,
    'i-i-s-azs1212-справочник-цен-l': IISAzs1212СправочникЦенLForm,
    'i-i-s-azs1212-терминал-l': IISAzs1212ТерминалLForm,
    'i-i-s-azs1212-азс-e': IISAzs1212АзсEForm,
    'i-i-s-azs1212-колонка-e': IISAzs1212КолонкаEForm,
    'i-i-s-azs1212-оплата-e': IISAzs1212ОплатаEForm,
    'i-i-s-azs1212-пистолет-e': IISAzs1212ПистолетEForm,
    'i-i-s-azs1212-регист-остатков-e': IISAzs1212РегистОстатковEForm,
    'i-i-s-azs1212-резервуар-e': IISAzs1212РезервуарEForm,
    'i-i-s-azs1212-справочник-цен-e': IISAzs1212СправочникЦенEForm,
    'i-i-s-azs1212-терминал-e': IISAzs1212ТерминалEForm
  },

});

export default translations;
