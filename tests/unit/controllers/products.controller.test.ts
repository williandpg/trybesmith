import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductsController from '../../../src/controllers/product.controller';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa a função createProduct', async function () {
    req.body = { name: 'Product', price: 10, orderId: 1 };
    await ProductsController.createProduct(req as Request, res as Response);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledOnce;
  });

  it('Testa a função getProducts', async function () {
    await ProductsController.getProducts(req as Request, res as Response);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledOnce;
  });

  it('Testa um valor invalido em createProduct', async function () {
    req.body = { invalidField: 'Invalid Value' };
    await ProductsController.createProduct(req as Request, res as Response);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledOnce;
  });

});