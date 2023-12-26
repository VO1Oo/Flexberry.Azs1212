import {
  defineNamespace,
  defineProjections,
  Model as РегистОстатковMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-регист-остатков';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистОстатковMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
