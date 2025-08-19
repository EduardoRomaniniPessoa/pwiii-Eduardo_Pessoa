# pwiii-Eduardo_Pessoa
Aulas de Programação Web III com o professor João Siles

Documentação

# Aula de Laravel pt.2


![enter image description here](https://snipboard.io/abi1qv.jpg)

OOIIIi OIIIIIIIIIIIIIII, essa aula foi no dia 11/08/2025, bem legal com o Prof° João, e nessa aula aprendemos a DOCUMENTAR DE VRDADE um projeto, utilizando o site "stackedit.io".
















Primeiro começamos conectando minha conta do Github no Git Bash.

![exemplo dos comandos](https://snipboard.io/tFK7R3.jpg)

após isso, foi clonado o repositório, e seguimos para as instruções do professor.

> "Vocês tem 5 à 10 minutos para criar uma 'aula 02' com o Laravel"

Ficamos um pouco perdidos, esbarramos em erros e nos esquecemos do passo-a-passo, porém seguimos as instruções logo depois de acabar o tempo.

## Passos para criar um aplicativo com Laravel

    1° passo: Pré-instalações.

![enter image description here](https://snipboard.io/jKDco0.jpg)

O documento explica "Antes de prosseguir a criação de uma aplicação no Laravel, devemos ter PHP, Composer e o Laravel installer instalados."

No caso do PHP, simplesmente ativamos a opção "Apache e MySQL" no XAMPP.

![enter image description here](https://snipboard.io/MsjIZQ.jpg)

Logo em seguida, ele pede o "Composer", aplicativo que organiza as dependências do PHP. No caso da Camargo Aranha, o aplicativo já vem por padrão, e o professor disponibiliza o setup na pasta pública. Mas o link para o aplicativo reside na página já mostrada. Seguindo este caminho, podemos instalar o Composer:

 1. Clicar no Link " Composer ", na documentação do Laravel;
 2. Seguir para a página "Download";
 3. Instalar o "Composer-Setup-exe", no primeiro link disponível na página.

Após esses passos, é só prosseguir na instalação e capiche.

O Laravel Installer, a última pré-etapa, pode ser instalada através deste código, em um terminal inicializado como administrador:

 -   # Run as administrator... 
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))

__________________

Desta forma ficará no terminal:

![enter image description here](https://snipboard.io/2SXJ4f.jpg)

    2° passo: Mudança de localização / Clonagem de Repositório.

Após a instalação, devemos colocar o repositório em "htdocs" assim como o exemplo seguinte:

![enter image description here](https://snipboard.io/NJcGv6.jpg)

e inicializado um terminal dentro do repositório, o que deixará em uso o PHP, Composer e Laravel já pré-instalados. Como por exemplo:

![enter image description here](https://snipboard.io/St7iaF.jpg)

**

# UM DETALHE IMPORTANTÍSSIMO!!!

**

Você pode simplesmente clonar o seu repositório **dentro** do htdocs, o que já corta um puta caminhoo. ;D


Chegamos no finalzinho das etapas. Aproveite!!

    3°passo: Instalação do Laravel.

Utilizar do código presente na documentação do Laravel:

 - composer global require laravel/installer

O que instala VERDADEIRAMENTE o Laravel que precisamos tanto e tanto almejamos.

    4° passo: Dando nome ao seu Filho.

Agora, utilizamos um código bem legal como referência.

 - laravel new example-app

Muita atenção no " example-app ", que será substituído pelo nome do seu precioso filhinho (não é seu filho de vrdd plmds, não leva tão a sério :P).

## Após isso !!!!!!!!!

Essa lindíssima tela vai aparecer:

![enter image description here](https://snipboard.io/EKQr93.jpg)

Se nada de errado acontecer, parabéns, já estamos no final do processo.

    5°passo: escolhas padrões.

Mantemos o padrão "none" e "sqlite", para criar um aplicativo comum, e PRONTO.










# Como rodar um projeto Laravel ( depois de clona-lo do Git Hub ).


![enter image description here](https://snipboard.io/BUn9bA.jpg)

OIIIIII GENTE, na aula de hj vamos colocar um projeto em Laravel pra funcionar logo depois de clonar no Git Hubbb. 


## Passo-a-Passo:

    1

> duplicar o arquivo ***.env.example*** > alterar o nome de
> "***copy.env.example***" para "***.env***".

Lá no vscode, depois de dar aquela ***clonada maldita*** no arquivo com Laravel, vai existir um arquivo escrito ".env.example", que funciona como um backup do nosso espaço de programação.
Duplicamos ele (pode ser com Ctrl + C e Ctrl + V msm) e alteramos seu nome para ".env".

DEPOIS DISSO JÁ VAI TER DADO AQUELA TURBINADA MONSTRA NO PROCESSO
TEU COMPUTADOR TA AGRADECENDO JÁ, POMBO GRÁVIDO.

    2

> rodar o comando "composer install" em um powershell na pasta do
> projeto desejado.

Num terminal dentro da pasta do seu arquivo ***Laravelius***, escrever o "composer install" e dar aquele Enter legal e bonito. Vão ser instaladas as dependências do PHP no seu compiuter, o que por consequência também gera um VENDOR (fornecedor do PHP kkkkkkj), parte fundamental do seu Laravell.

Tudo isso é feito pela internet e com os pré-requisitos já instalados né bb, dql jeitão (XAMPP, Composer e Laravel).

    3

> digitar "npm install" para instalar as dependências do javascript.

Mesma coisa pro npm, que instala o restinho de javascript, do teu projeto. ou pro restinho de javascript que tem nele né po.

    4

> "npm run build" transforma os arquivos de forma que o computador
> entenda.

esse ai builda bem legal p ser legal


    5

> " php artisan key:generate " cria a chave de criptografia para o
> projeto rodar.

    6

> " php artisan migrate" cria um banco de dados para o projeto,
> utilizando de ORM.

--------------------

**arquivo de config de ambiente:    .env**   <<<MUITO IMPORTANTE

Por quê?

 - cria um ambiente para cada usuário
 - proteção de dados
 - mexe com laravel, e é base no projeto (MAS não sobe junto)

(enveiroment/ambiente)


.env d um projeto no laravel trás informações essenciais


Após copiar um repositório, é preciso existir um arquivo **".env"** para dar continuidade em um projeto.

# Como rodar um projeto Laravel ( depois de clona-lo do Git Hub ).


![enter image description here](https://snipboard.io/BUn9bA.jpg)

OIIIIII GENTE, na aula de hj vamos colocar um projeto em Laravel pra funcionar logo depois de clonar no Git Hubbb. 


## Passo-a-Passo:

    1

> duplicar o arquivo ***.env.example*** > alterar o nome de
> "***copy.env.example***" para "***.env***".

Lá no vscode, depois de dar aquela ***clonada maldita*** no arquivo com Laravel, vai existir um arquivo escrito ".env.example", que funciona como um backup do nosso espaço de programação.
Duplicamos ele (pode ser com Ctrl + C e Ctrl + V msm) e alteramos seu nome para ".env".

DEPOIS DISSO JÁ VAI TER DADO AQUELA TURBINADA MONSTRA NO PROCESSO
TEU COMPUTADOR TA AGRADECENDO JÁ, POMBO GRÁVIDO.

    2

> rodar o comando "composer install" em um powershell na pasta do
> projeto desejado.

Num terminal dentro da pasta do seu arquivo ***Laravelius***, escrever o "composer install" e dar aquele Enter legal e bonito. Vão ser instaladas as dependências do PHP no seu compiuter, o que por consequência também gera um VENDOR (fornecedor do PHP kkkkkkj), parte fundamental do seu Laravell.

Tudo isso é feito pela internet e com os pré-requisitos já instalados né bb, dql jeitão (XAMPP, Composer e Laravel).

    3

> digitar "npm install" para instalar as dependências do javascript.

Mesma coisa pro npm, que instala o restinho de javascript, do teu projeto. ou pro restinho de javascript que tem nele né po.

    4

> "npm run build" transforma os arquivos de forma que o computador
> entenda.

esse ai builda bem legal p ser legal


    5

> " php artisan key:generate " cria a chave de criptografia para o
> projeto rodar.

    6

> " php artisan migrate" cria um banco de dados para o projeto,
> utilizando de ORM.

--------------------

**arquivo de config de ambiente:    .env**   <<<MUITO IMPORTANTE

Por quê?

 - cria um ambiente para cada usuário
 - proteção de dados
 - mexe com laravel, e é base no projeto (MAS não sobe junto)

(enveiroment/ambiente)


.env d um projeto no laravel trás informações essenciais


Após copiar um repositório, é preciso existir um arquivo **".env"** para dar continuidade em um projeto.



![enter image description here](https://i.postimg.cc/W46khRfm/Captura-de-tela-2025-08-18-200817.png)


@vite('resources/css/app.css') ==


![enter image description here](https://i.postimg.cc/KzWvYJFr/Captura-de-tela-2025-08-18-201240.png)
isso ai são as telas " view"

![enter image description here](https://i.postimg.cc/6q0Kvcxm/Captura-de-tela-2025-08-18-201656.png)
esse ai é o comando pra criar um view novo !!!!!! "php artisan make:view testelegal"

![enter image description here](https://i.postimg.cc/4NSMFqP1/Captura-de-tela-2025-08-18-202053.png)
esse aí é o equivalente do href, e posso dar o nome no que eu quiser, tornando-a muito mais segura 

    Route::get('/', function () {  == 

**substituir o '/' pelo apelido da sua pagina bem segurinha legal**

     return  view('welcome'); == 

**substituir o '/welcome' pelo nome do arquivo em vs**

![enter image description here](https://i.postimg.cc/1tr2Cz7g/Captura-de-tela-2025-08-18-202006.png)
ficou assim bem legalzaoooo

**

# Aula de Tailwind
**
![vite](https://i.postimg.cc/KvLKjkjS/image.png)

Vite = Compila arquivos, evitando um bundle completo e acelerando o desenvolvimento.

> Vite usa o **ES Modules nativo** do navegador para carregar arquivos
> sob demanda durante o desenvolvimento. Isso elimina a necessidade de fazerum bundle completo toda vez que o código muda, o que torna o processo **extremamente rápido**, mesmo em projetos grandes.
 -Palavras do chatgpt

 - Tailwind Documentation

![enter image description here](https://i.postimg.cc/rFSSbYSr/image.png)

Essencial e rica de informações



## Glossário

 - Clube FullStack = caras boens
 - Tailwind css = biblioteca legal de laravel
 - @vite = web bundle
 -