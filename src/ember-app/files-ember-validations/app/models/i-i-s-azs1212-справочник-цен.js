import {
  defineNamespace,
  defineProjections,
  Model as СправочникЦенMixin
} from '../mixins/regenerated/models/i-i-s-azs1212-справочник-цен';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СправочникЦенMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
