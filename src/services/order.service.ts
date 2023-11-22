import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { OrderResponse } from '../types/OrderResponse';

async function getOrders():Promise<ServiceResponse<OrderResponse[]>> {
  const promise = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  });
  const ordersMap = promise.map(({ dataValues }) => ({
    id: dataValues.id,
    userId: dataValues.userId,
    productIds: dataValues.productIds?.map((product) => product.id),
  }));
  return { status: 200, data: ordersMap };
}

export default {
  getOrders,
};