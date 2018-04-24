import {Table, Column, Model, HasMany} from 'sequelize-typescript';
import {Order} from './order'

@Table
export class Pet extends Model<Pet> {
    @Column
    name: string;

    @Column
    photo: string;

    @Column
    tags: string;

    @HasMany(() => Order)
    orders: Order[];

    /*static scope(...args: any[]): typeof Pet {
        args[0] = args[0] || 'defaultScope';
        return super.scope.call(this, ...args);
    }*/
}