import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипТопливаEnum from '../enums/i-i-s-azs1212-тип-топлива';

export default FlexberryEnum.extend({
  enum: ТипТопливаEnum,
  sourceType: 'IIS.Azs1212.ТипТоплива'
});
