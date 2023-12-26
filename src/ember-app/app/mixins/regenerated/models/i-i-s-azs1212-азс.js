import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  название: DS.attr('string'),
  номер: DS.attr('number'),
  состояние: DS.attr('i-i-s-azs1212-состояние')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-azs1212-азс.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-azs1212-азс.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-azs1212-азс.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-azs1212-азс.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АзсE', 'i-i-s-azs1212-азс', {
    номер: attr('Номер', { index: 0 }),
    название: attr('Название', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    состояние: attr('Состояние', { index: 3 })
  });

  modelClass.defineProjection('АзсL', 'i-i-s-azs1212-азс', {
    номер: attr('Номер', { index: 0 }),
    название: attr('Название', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    состояние: attr('Состояние', { index: 3 })
  });
};
