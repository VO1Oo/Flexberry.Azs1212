import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПистолетMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-пистолет';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПистолетMixin, Validations, {
});

defineProjections(Model);

export default Model;
