import {
  defineNamespace,
  defineProjections,
  Model as КартыMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-карты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КартыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
