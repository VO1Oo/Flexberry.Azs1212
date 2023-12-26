import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  бонусы: DS.attr('number'),
  номерКарты: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  оплата: DS.belongsTo('i-i-s-azs1212-оплата', { inverse: 'карты', async: false })
});

export let ValidationRules = {
  бонусы: {
    descriptionKey: 'models.i-i-s-azs1212-карты.validations.бонусы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерКарты: {
    descriptionKey: 'models.i-i-s-azs1212-карты.validations.номерКарты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-azs1212-карты.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-azs1212-карты.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартыE', 'i-i-s-azs1212-карты', {
    номерКарты: attr('Номер карты', { index: 0 }),
    номерТелефона: attr('Номер телефона', { index: 1 }),
    бонусы: attr('Бонусы', { index: 2 })
  });
};
