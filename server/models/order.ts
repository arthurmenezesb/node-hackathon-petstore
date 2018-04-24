import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Pet} from './pet'

@Table
export class Order extends Model<Order> {
    @Column
    quantity: number;

    @Column
    shipDate: Date;

    @Column
    status: string;

    @Column
    orderStatus: OrderStatus;

    @ForeignKey(() => Pet)
    @Column
    petId: number;

    @BelongsTo(() => Pet)
    pet: Pet;
}