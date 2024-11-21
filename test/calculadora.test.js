const assert = require("assert");
const Calculadora = require("../calculadora");

describe("Calculadora", function () {
  let calc;

  beforeEach(function () {
    calc = new Calculadora();
  });

  it("deve somar dois números corretamente", function () {
    const resultado = calc.somar(5, 3);
    assert.strictEqual(resultado, 8);
  });

  it("deve subtrair dois números corretamente", function () {
    const resultado = calc.subtrair(10, 4);
    assert.strictEqual(resultado, 6);
  });

  it("deve multiplicar dois números corretamente", function () {
    const resultado = calc.multiplicar(3, 7);
    assert.strictEqual(resultado, 21);
  });

  it("deve dividir dois números corretamente", function () {
    const resultado = calc.dividir(15, 3);
    assert.strictEqual(resultado, 5);
  });

  it("deve lançar um erro ao tentar dividir por zero", function () {
    assert.throws(() => calc.dividir(10, 0), /Divisão por zero não é permitida/);
  });
});
