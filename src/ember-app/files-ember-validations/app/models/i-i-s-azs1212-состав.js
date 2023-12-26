import {
  defineNamespace,
  defineProjections,
  Model as СоставMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-состав';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
