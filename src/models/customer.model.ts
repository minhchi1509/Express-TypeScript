import {
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';
import sequelize from '@/configs/sequelize.config';

interface ICustomer
  extends Model<
    InferAttributes<ICustomer>,
    InferCreationAttributes<ICustomer>
  > {
  id: CreationOptional<string>;
  name: string;
  age: number;
  address: string;
  email: string;
  phoneNumber: string;
}

const CustomerModel = sequelize.define<ICustomer>(
  'Customer',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'users',
    timestamps: true
  }
);

export type { ICustomer };
export default CustomerModel;
