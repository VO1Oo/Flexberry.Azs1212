import {
  defineNamespace,
  defineProjections,
  Model as ТерминалMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-терминал';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТерминалMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
