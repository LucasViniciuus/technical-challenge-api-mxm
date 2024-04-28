#Desafio Técnico MXM Sistemas#
Este projeto visa criar um sistema completo de gerenciamento de estoque, incluindo funcionalidades de cadastro de produtos, fornecedores e comunicação integrada por e-mail para os destinatários. A aplicação é desenvolvida utilizando Angular, C# ASP.NET e Node-RED para integração.

Funcionalidades
Cadastro de Produtos: Permite aos usuários cadastrar novos produtos no sistema, incluindo informações como nome, preço, quantidade, categoria, data de validade, entre outros. Além disso, o sistema oferece visibilidade sobre os produtos próximos ao vencimento e aqueles que já estão vencidos.
Cadastro de Fornecedores: Os usuários podem cadastrar informações dos fornecedores, como nome, telefone, e-mail, CNPJ, tipo de fornecedor, representante legal, entre outros. Isso facilita o gerenciamento de relacionamentos com os fornecedores e permite uma melhor gestão de compras.
Envio de Mensagens Integradas: Após o cadastro de produtos, o sistema envia automaticamente mensagens integradas por e-mail para os destinatários informados, utilizando o Node-RED como intermediário para o envio das mensagens. Isso inclui notificações sobre produtos próximos ao vencimento, vencidos, entre outras informações relevantes.
Desenvolvimento do Projeto
O projeto foi desenvolvido utilizando Angular CLI na versão 17.3.1 para a construção da interface do usuário. Componentes foram criados para a visualização e cadastro de produtos e fornecedores, além de funcionalidades para exibir alertas sobre produtos próximos ao vencimento e vencidos.

No lado do servidor, foi utilizado C# ASP.NET para criar controladores que gerenciam as operações CRUD para produtos e fornecedores. Um banco de dados real seria implementado para armazenar os dados dos produtos, fornecedores e outras informações relevantes.

O Node-RED foi utilizado como um intermediário para o envio de mensagens por e-mail. Ele recebe os dados dos produtos cadastrados e, em seguida, utiliza um nó de e-mail para enviar as mensagens integradas para os destinatários, incluindo informações sobre produtos próximos ao vencimento e vencidos.

Executando o Projeto
Angular Frontend: Execute ng serve para iniciar o servidor de desenvolvimento Angular. Navegue para http://localhost:4200/ para acessar a aplicação.
C# ASP.NET Backend: Implemente um banco de dados para armazenar os dados dos produtos e fornecedores e execute o servidor ASP.NET.
Node-RED Integration: Configure o Node-RED para receber os dados dos produtos e fornecedores cadastrados e configurar o nó de e-mail para enviar as mensagens integradas para os destinatários.
Próximos Passos
Implementar testes unitários e de integração para garantir a qualidade do código.
Melhorar a interface do usuário com recursos de usabilidade e design.
Adicionar autenticação e autorização para proteger as operações CRUD.
Implementar funcionalidades adicionais, como filtros de pesquisa avançados, gestão de estoque, relatórios e análises.
Este projeto é um exemplo de como integrar diferentes tecnologias para criar uma solução completa de gerenciamento de estoque com funcionalidades avançadas de comunicação por e-mail e gestão de fornecedores.
