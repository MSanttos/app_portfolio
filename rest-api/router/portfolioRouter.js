const express = require('express')
const router = express.Router()
const PortfolioModel = require('../model/portfolio/PortfolioModel')
const RespostaClass = require('../model/RespostaClass')

router.get('/', function(req, res, next) {

  PortfolioModel.getTodos(function(erro, retorno) {

    const resposta = new RespostaClass()

    if (erro) {

      resposta.erro = true
      resposta.msg = 'Erro ao buscar todos os Registros'
      console.log('erro: ',erro)

    } else {

      resposta.dados = retorno
    }
    res.json(resposta)
  })
})

router.get("/:id?", function(req, res, next){

  PortfolioModel.getId(req.params.id ,function(erro, retorno){

    const resposta = new RespostaClass()

    if(erro){

      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro'
      console.log('erro:', erro);
    }else{

      resposta.dados = retorno;

    }
    res.json(resposta);
  })
})

router.post("/?", function(req, res, next){

  PortfolioModel.adicionar(req.body,function(erro, retorno){

    const resposta = new RespostaClass()

    if(erro){

      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro'
      console.log('erro:', erro);

    }else{

      if(retorno.affectedRows > 0){
        resposta.msg = 'Registro adicionado com sucesso';

      }else{

        resposta.erro = true;
        resposta.msg = 'Não foi possível adicionar o registro';

      }
    }
    console.log('resposta: ', resposta)
    res.json(resposta);
  })
})

router.delete("/:id", function(req, res, next){

  PortfolioModel.deletar(req.params.id,function(erro, retorno){

    const resposta = new RespostaClass()

    if(erro){
      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro'
      console.log('erro:', erro);
    }else{

      if(retorno.affectedRows > 0){
        resposta.msg = 'Registro deletado com sucesso';

      }else{

        resposta.erro = true;
        resposta.msg = 'Não foi possível deletar o registro';

      }
    }
    console.log('resposta: ', resposta)
    res.json(resposta);
  })
})

router.put("/", function(req, res, next){
  
  PortfolioModel.editar(req.body,function(erro, retorno){

    const resposta = new RespostaClass()

    if(erro){

      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro'
      console.log('erro:', erro);

    }else{

      if(retorno.affectedRows > 0){
        resposta.msg = 'Registro editado com sucesso';

      }else{

        resposta.erro = true;
        resposta.msg = 'Não foi possível editar o registro';

      }
    }
    console.log('resposta: ', resposta)
    res.json(resposta);
  })
})

module.exports = router