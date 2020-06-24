export default class TypeOrmHelper {
  static formOrderBy(orderBy: string, rootEntity?: string) {
    let field = orderBy;
    let direction: ('ASC' | 'DESC') = 'ASC';
    if (orderBy.startsWith('-')) {
      field = field.slice(1);
      direction = 'DESC';
    }
    return {
      [rootEntity && field.indexOf('.') === -1 ? `${rootEntity}.${field}` : field]: direction
    };
  }
}
