import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se retorna um array de produtos', async function () {
    const res = await chai.request(app).get('/products');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
  });

});
