import { HydratedDocument, Model } from 'mongoose';

// type ModelMethods = {
//   [K in keyof Model<HydratedDocument<unknown>>]: Model<HydratedDocument<unknown>>[K] extends (
//     ...args: unknown[]
//   ) => unknown
//     ? K
//     : never;
// }[keyof Model<HydratedDocument<unknown>>];

export class BaseRepository<T> {
  constructor(readonly model: Model<HydratedDocument<T>>) {}

  // private delegateMethod<K extends ModelMethods>(
  //   methodName: K,
  // ): (...args: Parameters<Model<HydratedDocument<T>>[K]>) => ReturnType<Model<HydratedDocument<T>>[K]> {
  //   const method = this.model[methodName]; // Kiểm tra xem phương thức có phải là một hàm không
  //   if (typeof method !== 'function') throw new Error(`${methodName} is not a function`);

  //   return (...args: Parameters<Model<HydratedDocument<T>>[K]>) => this.model[methodName.toString()](args);
  // }

  // aggregate = this.delegateMethod('aggregate');

  // castObject = this.delegateMethod('castObject');

  // applyDefaults = this.delegateMethod('applyDefaults');

  // applyVirtuals = this.delegateMethod('applyVirtuals');

  // bulkWrite = this.delegateMethod('bulkWrite');

  // bulkSave = this.delegateMethod('bulkSave');

  // countDocuments = this.delegateMethod('countDocuments');

  // create = this.delegateMethod('create');

  // createCollection = this.delegateMethod('createCollection');

  // createSearchIndex = this.delegateMethod('createSearchIndex');

  // deleteMany = this.delegateMethod('deleteMany');

  // deleteOne = this.delegateMethod('deleteOne');

  // dropSearchIndex = this.delegateMethod('dropSearchIndex');

  // findById = this.delegateMethod('findById');

  // findOne = this.delegateMethod('findOne');

  // hydrate = this.delegateMethod('hydrate');

  // init = this.delegateMethod('init');

  // insertMany = this.delegateMethod('insertMany');

  // listSearchIndexes = this.delegateMethod('listSearchIndexes');

  // populate = this.delegateMethod('populate');

  // updateSearchIndex = this.delegateMethod('updateSearchIndex');

  // validate = this.delegateMethod('validate');

  // watch = this.delegateMethod('watch');

  // $where = this.delegateMethod('$where');

  // translateAliases = this.delegateMethod('translateAliases');

  // distinct = this.delegateMethod('distinct');

  // estimatedDocumentCount = this.delegateMethod('estimatedDocumentCount');

  // exists = this.delegateMethod('exists');

  // find(
  //   filter: RootFilterQuery<HydratedDocument<T>>,
  //   projection?: ProjectionType<HydratedDocument<T>> | null | undefined,
  //   options?: QueryOptions<HydratedDocument<T>> | null | undefined,
  // ) {
  //   return this.model.find(filter, projection, options);
  // }

  // findByIdAndDelete = this.delegateMethod('findByIdAndDelete');

  // findByIdAndUpdate = this.delegateMethod('findByIdAndUpdate');

  // findOneAndDelete = this.delegateMethod('findOneAndDelete');

  // findOneAndReplace = this.delegateMethod('findOneAndReplace');

  // findOneAndUpdate = this.delegateMethod('findOneAndUpdate');

  // replaceOne = this.delegateMethod('replaceOne');

  // recompileSchema = this.delegateMethod('recompileSchema');

  // updateMany = this.delegateMethod('updateMany');

  // updateOne = this.delegateMethod('updateOne');

  // where = this.delegateMethod('where');
}
