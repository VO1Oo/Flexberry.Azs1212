import { Serializer as СправочникЦенSerializer } from
  '../mixins/regenerated/serializers/i-i-s-azs1212-справочник-цен';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СправочникЦенSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
