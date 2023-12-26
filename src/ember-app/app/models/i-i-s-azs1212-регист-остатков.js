import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистОстатковMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-регист-остатков';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистОстатковMixin, Validations, {
});

defineProjections(Model);

export default Model;
