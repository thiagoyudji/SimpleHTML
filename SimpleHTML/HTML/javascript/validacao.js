$(document).ready(function(){

  $("#cpf").mask("999.999.999-99");
  $("#cep").mask("99999-999");
  $("#telefone").mask("(99) 99999-9999");
});

$("#enviar").click(function(){

  var nome = $("#nome").val();
  var cpf = $("#cpf").val();
  var email = $("#email").val();
  var rua = $("#endereco").val();
  var complemento = $("#complemento").val();
  var bairro = $("#bairro").val();
  var cep = $("#cep").val();
  var cidade = $("#cidade").val();
  var estado = $("#estado").val();
  var telefone = $("#telefone").val();
  var numero = $("#numero").val();
  var localidade = {
       rua,
       complemento,
       bairro,
       cep,
       cidade,
       estado,
       numero
   };
   var investidor = {
       nome,
       cpf,
       email,
       localidade,
       telefone
   };
   var investidor = {
           "nome": nome,
           "cpf": cpf,
           "email": email,
           "localidade": {
               "rua": rua,
               "complemento": complemento,
               "bairro": bairro,
               "cep": cep,
               "cidade": cidade,
               "estado": estado,
               "numero": numero
           },
           "telefone": telefone
   };


  $.ajax({
    url: "http://api.webhookinbox.com/i/p4bBbhsw/in/",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    data: JSON.stringify({investidor}),
    success: function(data){
      console.log(investidor);
  },
  error: function(XMLHttpRequest,content, errorThrown){
       console.log("deu ruim",content);
   }
  });
});
