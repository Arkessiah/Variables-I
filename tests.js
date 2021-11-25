// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Variables I', () => {
  it('Las variables tengoDinero y meDaMiedoVolar existen', () => {
    expect(tengoDinero).to.not.be.an('undefined');
    expect(meDaMiedoVolar).to.not.be.an('undefined');
  });

   it('La variable puedoIrAMexico existe', () => {
    expect(puedoIrAMexico).to.not.be.an('undefined');
  });

  it('La variable puedoIrAMexico cambia su valor a true', () => {
    expect(puedoIrAMexico).to.equal(true);
  });
});
