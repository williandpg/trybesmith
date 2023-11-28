import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se retorna um array de orders', async function () {
    const res = await chai.request(app).get('/orders');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
  });

});
