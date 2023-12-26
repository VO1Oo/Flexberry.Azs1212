import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  обьем: DS.attr('number'),
  типТоплива: DS.attr('i-i-s-azs1212-тип-топлива')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-azs1212-резервуар.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  обьем: {
    descriptionKey: 'models.i-i-s-azs1212-резервуар.validations.обьем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типТоплива: {
    descriptionKey: 'models.i-i-s-azs1212-резервуар.validations.типТоплива.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РезервуарE', 'i-i-s-azs1212-резервуар', {
    номер: attr('Номер', { index: 0 }),
    типТоплива: attr('Тип топлива', { index: 1 }),
    обьем: attr('Обьем', { index: 2 })
  });

  modelClass.defineProjection('РезервуарL', 'i-i-s-azs1212-резервуар', {
    номер: attr('Номер', { index: 0 }),
    типТоплива: attr('Тип топлива', { index: 1 }),
    обьем: attr('Обьем', { index: 2 })
  });
};
