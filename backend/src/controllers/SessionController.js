const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection("ongs").where("id", id).select("name").first(); // vai retornar apenas o nome da ONG

    if (!ong) {
      // se o ID não for de uma ONG da tabela
      return response
        .status(400)
        .json({ error: "There's no ONG with this ID buddy." });
    }
    return response.json(ong); // se deu certo, ele volta o nome da ong
  },
};
