const conn = require("mysql2/promise");

const client = conn.createPool(process.env.CONNECTION_STRING);

async function Jogos(){
    const results = await client.query('SELECT * FROM jogos');
    return results[0];
}

async function Jogo(id){
    const results = await client.query('SELECT * FROM jogos WHERE id=?', [id]);
    return results[0];
}

async function insertJogo(jogo){
    await client.query('INSERT INTO jogos(nome, descricao) VALUES (?, ?)', [jogo.nome, jogo.descricao]);
}

async function atualizaJogo(id, jogo){
    await client.query('UPDATE jogos SET nome=?, descricao=? WHERE id = ?', [jogo.nome, jogo.descricao, id] );
}

async function excluiJogo(id){
    await client.query("DELETE FROM jogos WHERE id=?",[id]);
}
module.exports = {
    Jogos,
    Jogo,
    insertJogo,
    atualizaJogo,
    excluiJogo
}


