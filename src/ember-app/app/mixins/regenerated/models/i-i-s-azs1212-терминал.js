import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  азс: DS.belongsTo('i-i-s-azs1212-азс', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-azs1212-терминал.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  азс: {
    descriptionKey: 'models.i-i-s-azs1212-терминал.validations.азс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТерминалE', 'i-i-s-azs1212-терминал', {
    номер: attr('Номер', { index: 0 })
  });

  modelClass.defineProjection('ТерминалL', 'i-i-s-azs1212-терминал', {
    номер: attr('Номер', { index: 0 })
  });
};
