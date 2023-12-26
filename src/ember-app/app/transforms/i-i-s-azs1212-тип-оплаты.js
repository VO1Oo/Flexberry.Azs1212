import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипОплатыEnum from '../enums/i-i-s-azs1212-тип-оплаты';

export default FlexberryEnum.extend({
  enum: ТипОплатыEnum,
  sourceType: 'IIS.Azs1212.ТипОплаты'
});
