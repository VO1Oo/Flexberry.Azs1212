import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пистолет: DS.belongsTo('i-i-s-azs1212-пистолет', { inverse: null, async: false }),
  колонка: DS.belongsTo('i-i-s-azs1212-колонка', { inverse: 'состав', async: false })
});

export let ValidationRules = {
  пистолет: {
    descriptionKey: 'models.i-i-s-azs1212-состав.validations.пистолет.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  колонка: {
    descriptionKey: 'models.i-i-s-azs1212-состав.validations.колонка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставE', 'i-i-s-azs1212-состав', {
    
  });
};
