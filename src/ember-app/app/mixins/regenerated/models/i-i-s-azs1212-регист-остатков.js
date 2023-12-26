import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  оплата: DS.belongsTo('i-i-s-azs1212-оплата', { inverse: null, async: false }),
  резервуар: DS.belongsTo('i-i-s-azs1212-резервуар', { inverse: null, async: false })
});

export let ValidationRules = {
  оплата: {
    descriptionKey: 'models.i-i-s-azs1212-регист-остатков.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  резервуар: {
    descriptionKey: 'models.i-i-s-azs1212-регист-остатков.validations.резервуар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистОстатковE', 'i-i-s-azs1212-регист-остатков', {
    
  });

  modelClass.defineProjection('РегистОстатковL', 'i-i-s-azs1212-регист-остатков', {
    
  });
};
