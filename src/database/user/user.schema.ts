import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ collection: 'users' })
export class User {
  id: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  picture: string;

  @Prop()
  updatedAt: Date;
}
