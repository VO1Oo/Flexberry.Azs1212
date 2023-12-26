import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КолонкаMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-колонка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КолонкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
