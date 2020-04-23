
/*
//PARA SABER SE ESTA CONECTADO COM O BANCO DE DADOS OU NÃO
sequelize.authenticate().then(function(){
    console.log('conectado com sucesso!!');
}).catch(function(erro){
    console.log('Falha ao se conectar: '+ erro)
})
*/
const Postagem = sequelize.define('postagens',{
     titulo:{
         type: Sequelize.STRING
     },
     conteudo:{
         type: Sequelize.TEXT
     }
})

Postagem.create({
    titulo: "Viagem",
    conteudo:"De ferias em fortaleza"
})