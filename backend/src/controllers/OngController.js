const connection = require('../database/connection')
const crypto = require("crypto");

module.exports = {

  async index (request, response) {
    const ongs = await connection('ONGs').select('*');

    return response.json(ongs);
},

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body; // desestruturado, cada coluna é uma var

    const id = crypto
      .randomBytes(4)
      .toString(
        "HEX"
      ); /*o ID será gerado randomicamente em 4bytes que serão então convertidos para Strings hexadecimais (numeros e digitos). isso será o acesso do User*/

    await connection("ongs").insert({
      /*function para inserção de dados/post/create da tabela, tornada funcao assincrona pois pode demorar a inserção, o await fará aguardar o insert para so então efetuar o return da linha 23*/
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id }); // vai voltar apenas o ID para o User
  },
};
