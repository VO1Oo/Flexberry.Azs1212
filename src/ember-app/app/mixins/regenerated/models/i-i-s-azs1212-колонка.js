import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  состояние: DS.attr('i-i-s-azs1212-состояние'),
  состав: DS.hasMany('i-i-s-azs1212-состав', { inverse: 'колонка', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-azs1212-колонка.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-azs1212-колонка.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состав: {
    descriptionKey: 'models.i-i-s-azs1212-колонка.validations.состав.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КолонкаE', 'i-i-s-azs1212-колонка', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 })
  });

  modelClass.defineProjection('КолонкаL', 'i-i-s-azs1212-колонка', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 })
  });
};
