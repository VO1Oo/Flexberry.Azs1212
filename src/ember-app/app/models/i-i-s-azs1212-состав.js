import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-состав';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставMixin, Validations, {
});

defineProjections(Model);

export default Model;
