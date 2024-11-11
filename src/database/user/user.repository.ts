import { BaseRepository } from '../base.repository';
import { CustomMongooseRepository } from '../mongooseCustom.decorator';

import { User } from './user.schema';

@CustomMongooseRepository(User)
export class UserRepository extends BaseRepository<User> {}
