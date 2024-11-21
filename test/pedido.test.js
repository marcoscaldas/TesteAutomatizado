const assert = require("assert");
const Pedido = require("../pedido");

describe("Sistema de Pedidos - Hamburgueria", function () {
  let pedido;

  beforeEach(function () {
    pedido = new Pedido();
  });

  it("deve adicionar itens ao pedido", function () {
    pedido.adicionarItem("Hambúrguer", 10.5, 2);
    pedido.adicionarItem("Batata Frita", 5.0, 1);
    assert.strictEqual(pedido.itens.length, 2);
  });

  it("deve calcular o total do pedido corretamente", function () {
    pedido.adicionarItem("Hambúrguer", 10.5, 2);
    pedido.adicionarItem("Batata Frita", 5.0, 1);
    const total = pedido.calcularTotal();
    // (10.5 * 2) + (5.0 * 1) + 5.0 (taxa de entrega)
    assert.strictEqual(total, 31.0);
    
  });

  it("deve aplicar desconto ao pedido", function () {
    pedido.adicionarItem("Hambúrguer", 10.0, 2);
    pedido.aplicarDesconto("PROMO10");
    const totalComDesconto = pedido.calcularTotal();
    // (10 * 2) - 10% + 5.0 (taxa)
    assert.strictEqual(totalComDesconto, 23.0); 
  });

  it("deve confirmar o pedido se houver itens", function () {
    pedido.adicionarItem("Hambúrguer", 10.0, 1);
    pedido.confirmar();
    assert.strictEqual(pedido.status, "Confirmado");
  });

  it("deve lançar erro ao confirmar pedido vazio", function () {
    assert.throws(() => pedido.confirmar(), /Pedido vazio/);
  });

  it("deve cancelar o pedido", function () {
    pedido.cancelar();
    assert.strictEqual(pedido.status, "Cancelado");
  });
});
