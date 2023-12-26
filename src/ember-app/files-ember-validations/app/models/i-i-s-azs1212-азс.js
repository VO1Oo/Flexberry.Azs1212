import {
  defineNamespace,
  defineProjections,
  Model as АзсMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-азс';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АзсMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
