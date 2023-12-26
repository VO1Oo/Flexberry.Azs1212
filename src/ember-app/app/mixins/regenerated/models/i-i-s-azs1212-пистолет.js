import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  состояние: DS.attr('i-i-s-azs1212-состояние'),
  справочникЦен: DS.belongsTo('i-i-s-azs1212-справочник-цен', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-azs1212-пистолет.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-azs1212-пистолет.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справочникЦен: {
    descriptionKey: 'models.i-i-s-azs1212-пистолет.validations.справочникЦен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПистолетE', 'i-i-s-azs1212-пистолет', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 })
  });

  modelClass.defineProjection('ПистолетL', 'i-i-s-azs1212-пистолет', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 })
  });
};
