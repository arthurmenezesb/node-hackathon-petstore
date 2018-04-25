import {Table, Column, Model, ForeignKey, BelongsTo, Default, DataType} from 'sequelize-typescript';
import {Pet} from './pet'

@Table
export class Order extends Model<Order> {
    @Column
    quantity: number;

    @Column
    shipDate: Date;
    
    @Default('Placed')
    @Column(DataType.ENUM('Placed', 'Approved', 'Delivered', 'Completed'))
    status: OrderStatus;

    @ForeignKey(() => Pet)
    @Column
    petId: number;

    @BelongsTo(() => Pet)
    pet: Pet;
}