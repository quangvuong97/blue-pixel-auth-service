import { DynamicModule, Provider } from '@nestjs/common';
import { getModelToken, ModelDefinition, MongooseModule, SchemaFactory } from '@nestjs/mongoose';

import { MONGOOSE_EX_CUSTOM_REPOSITORY } from './mongooseCustom.decorator';

export class MongooseCustomModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static forCustomRepository<T extends new (...args: unknown[]) => any>(repositories: T[]): DynamicModule {
    const providers: Provider[] = [];
    const models: ModelDefinition[] = [];

    repositories.forEach((Repository) => {
      const entity = Reflect.getMetadata(MONGOOSE_EX_CUSTOM_REPOSITORY, Repository);

      if (!entity) return;

      providers.push({
        inject: [getModelToken(entity.name)],
        provide: Repository,
        useFactory: (model: unknown): typeof Repository => new Repository(model),
      });
      const schema = SchemaFactory.createForClass(entity);
      schema.set('toJSON', { virtuals: true });
      schema.set('toObject', { virtuals: true });

      models.push({ name: entity.name, schema });
    });

    return {
      module: MongooseCustomModule,
      imports: [MongooseModule.forFeature(models)],
      providers,
      exports: providers,
    };
  }
}
