# Observer

O Observer funciona como um publish-subscribe, semelhante a assinatura de jornais. Uma entidade conhecida como subject (Aqui chamada de Jornal) exibe eventos (Edições do Jornal) que as outras entidades conhecida como Objects (Assinante A e B) pode se registrar para escutar ou receber notificações quando os eventos acontecem. Eles também podem se desregistrar quando não possuem mais interesse nesses novos eventos.

O Padrão Observer possui um design levemente ligado entre os objetos, ou seja, eles interagem normalmente, porém sabem pouco um do outro. Exemplo do Subject(Jornal) que sabe apenas que um Observer implementa uma interface comum a todos os Observers. Ele não sabe quais são as classes que o implementa e o que fazem.
