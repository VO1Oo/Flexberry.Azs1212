import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СправочникЦенMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-справочник-цен';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СправочникЦенMixin, Validations, {
});

defineProjections(Model);

export default Model;
