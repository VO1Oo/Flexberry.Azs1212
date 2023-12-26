import { Serializer as КолонкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-azs1212-колонка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КолонкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
