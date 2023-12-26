import { Serializer as РегистОстатковSerializer } from
  '../mixins/regenerated/serializers/i-i-s-azs1212-регист-остатков';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистОстатковSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
