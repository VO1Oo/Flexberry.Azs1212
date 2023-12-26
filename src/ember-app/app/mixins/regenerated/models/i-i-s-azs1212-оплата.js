import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  номер: DS.attr('number'),
  сумма: DS.attr('decimal'),
  типОплаты: DS.attr('i-i-s-azs1212-тип-оплаты'),
  колонка: DS.belongsTo('i-i-s-azs1212-колонка', { inverse: null, async: false }),
  терминал: DS.belongsTo('i-i-s-azs1212-терминал', { inverse: null, async: false }),
  карты: DS.hasMany('i-i-s-azs1212-карты', { inverse: 'оплата', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-azs1212-оплата.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-azs1212-оплата.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-azs1212-оплата.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-azs1212-оплата.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колонка: {
    descriptionKey: 'models.i-i-s-azs1212-оплата.validations.колонка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  терминал: {
    descriptionKey: 'models.i-i-s-azs1212-оплата.validations.терминал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карты: {
    descriptionKey: 'models.i-i-s-azs1212-оплата.validations.карты.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-azs1212-оплата', {
    номер: attr('Номер', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    сумма: attr('Сумма', { index: 3 })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-azs1212-оплата', {
    номер: attr('Номер', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    сумма: attr('Сумма', { index: 3 })
  });
};
