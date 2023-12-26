import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеEnum from '../enums/i-i-s-azs1212-состояние';

export default FlexberryEnum.extend({
  enum: СостояниеEnum,
  sourceType: 'IIS.Azs1212.Состояние'
});
