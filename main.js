
        $(document).ready(function () {
            $('#carousel-img').slick({
                autoplay: true,
                arrows: false
            });

            // Máscaras para os campos
            $('#telefone').mask('(00) 00000-0000', {
                placeholder: '(DDD) 12345-6789'
            });

            $('#cpf').mask('000.000.000-00', {
                placeholder: '123.456.789-00'
            });

            $('#cep').mask('00000-000', {
                placeholder: '01234-567'
            });

            // Validação do formulário
            $('#form').validate({
                rules: {
                    nome: { required: true },
                    email: { required: true, email: true },
                    telefone: { required: true },
                    endereco: { required: true },
                    cep: { required: true },
                    cpf: { required: true }
                },
                messages: {
                    nome: 'Por favor, preencha o seu nome!',
                    email: 'Por favor, preencha o seu e-mail!',
                    telefone: 'Por favor, preencha o seu telefone!',
                    cpf: 'Por favor, preencha o seu CPF!',
                    endereco: 'Por favor, preencha o seu endereço!',
                    cep: 'Por favor, preencha o seu CEP!'
                },
                errorPlacement: function (error, element) {
                    // Coloca a mensagem de erro no span dentro de cada campo
                    error.appendTo(element.next("span.error"));
                },
                submitHandler: function (form) {
                    alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
                    console.log(form); // Aqui você pode substituir pelo envio real
                },
                invalidHandler: function (event, validator) {
                    let camposIncorretos = validator.numberOfInvalids();
                    if (camposIncorretos) {
                        alert("Por favor, preencha os campos para prosseguir com a compra!");
                    }
                }
            });
        });