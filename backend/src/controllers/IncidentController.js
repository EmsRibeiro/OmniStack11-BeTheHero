const connection = require("../database/connection");
const { index } = require("./OngController");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id") // JOIN na tabela ong onde ong_id = a do incident
      .limit(5) // limita até 5 resultados por page
      .offset((page - 1) * 5) // pula 1 pagina, pega prox e * 5 os resultados
      .select(
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ); // select tudo de incidents e parte de ongs table
    response.header("X-Total-Count", count["count(*)"]);

    return response.json(incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    
    const ong_id = request.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id,
    });
    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization; // verifica if incident foi criado pela ONG correta
    const incident = await connection("incidents")
      .where("id", id) // comparação if id é igual ao {id}
      .select("ong_id")
      .first(); // retorna apenas 1 resultado
    if (incident.ong_id != ong_id) {
      return response.status(401).json({ error: "Operation not permitted!" });
    } // if a ong_id do incident for diferente da ong_id, retorna 401 - não autorizado (http status)

    await connection("incidents").where("id", id).delete;

    return response.status(204).send();
  },
}; // cria uma row com o incident
