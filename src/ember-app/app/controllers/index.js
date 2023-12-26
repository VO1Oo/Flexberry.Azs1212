import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.azs1212.caption'),
          title: i18n.t('forms.application.sitemap.azs1212.title'),
          children: [{
            link: 'i-i-s-azs1212-регист-остатков-l',
            caption: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-регист-остатков-l.caption'),
            title: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-регист-остатков-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-azs1212-пистолет-l',
            caption: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-пистолет-l.caption'),
            title: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-пистолет-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-azs1212-азс-l',
            caption: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-азс-l.caption'),
            title: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-азс-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-azs1212-оплата-l',
            caption: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-оплата-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-azs1212-справочник-цен-l',
            caption: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-справочник-цен-l.caption'),
            title: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-справочник-цен-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-azs1212-терминал-l',
            caption: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-терминал-l.caption'),
            title: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-терминал-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-azs1212-колонка-l',
            caption: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-колонка-l.caption'),
            title: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-колонка-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-azs1212-резервуар-l',
            caption: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-резервуар-l.caption'),
            title: i18n.t('forms.application.sitemap.azs1212.i-i-s-azs1212-резервуар-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})