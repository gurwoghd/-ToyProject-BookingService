import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Book {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
