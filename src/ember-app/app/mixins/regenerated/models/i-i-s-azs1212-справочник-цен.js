import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  типТоплива: DS.attr('i-i-s-azs1212-тип-топлива'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  типТоплива: {
    descriptionKey: 'models.i-i-s-azs1212-справочник-цен.validations.типТоплива.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-azs1212-справочник-цен.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправочникЦенE', 'i-i-s-azs1212-справочник-цен', {
    цена: attr('Цена', { index: 0 }),
    типТоплива: attr('Тип топлива', { index: 1 })
  });

  modelClass.defineProjection('СправочникЦенL', 'i-i-s-azs1212-справочник-цен', {
    цена: attr('Цена', { index: 0 }),
    типТоплива: attr('Тип топлива', { index: 1 })
  });
};
