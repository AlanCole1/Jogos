const Jogos = require('../models/JogosSchema');

module.exports ={
    listar: async (req, res) => {
        const results = await Jogos.Jogos();
        res.json(results)
    },
    
    listar_id: async (req, res) => {
        const id = parseInt(req.params.id);
        const results = await Jogos.Jogo(id);
        res.json(results);
    },
    
    incluir: async (req, res) =>{
        const jogo = req.body;
        await Jogos.insertJogo(jogo);
        res.sendStatus(201); 
     },
    
    alterar: async (req, res) => {
        const id = parseInt(req.params.id);
        const jogo = req.body;
        await Jogos.atualizaJogo(id, jogo);
        res.sendStatus(200)
    },
    
    excluir: async (req, res) => {
        const id = parseInt(req.params.id);
        Jogos.excluiJogo(id);
        res.sendStatus(204);
    }
}
