---
title: 'Create your own Create React App template'
date: 2020-03-20
author: 'nubelsondev'
tags: ['cra', 'react', 'dev']
thumbnail: './thumbnail.jpg'
---

## Criando o seu próprio CRA template

### 1- Starting a React project

Para iniciar a construção de um CRA template, precisamos começar gerando um novo projeto com o CRA padrão

```bash
$ yasn create-react-app your-template-name
```

Feito isso, iremos abrir o nosso projeto no **VSCode** e editar o arquivo _package.json_ alterando o name para "_cra-template-your-template-name_".

> É extremamente importante que o name inicie com o prefixo "cra-template-" porque só assim o CRA identificará o seu projeto como um template.

### 2- Remove deps and setting up tools

Remova tudo o que você não precisa do CRA e adicione tudo o que você precisa

> Aqui iremos configurar a nossa aplicação React à nossa maneira, adicionando todas as bibliotecas que queremos que estejam instaladas e configuradas como padrão. Neste tutorial irei criar um template que utilizarei em todos os meus projetos, com Styled-Components, Layout e Theme Switcher configurados.

![image](./thumbnail.jpg)

Veja o código [aqui](htpps://github.com/nubelsondev).

### 3- Create a template

Quando o nosso projeto estiver pronto para se tornar um template, precisamos fazer alguns preparos.

#### 3.1 - Create template folder

Crie na raiz do seu projeto a pasta **`template`**

```bash
$ mkdir template
```

#### 3.2 - Add gitignore file to the template folder

Adicione um arquivo gitignore dentro da pasta template.

> Você pode copiar o arquivo o gitignore padrão criado com o CRA, só não se esqueça de remover o " . "!

```bash
$ cp .gitignore template/gitignore
```

> É importante que o arquivo gitignore dentro da pasta template esteja sem o " . ". Desta forma o CRA saberá que você está criando um template e ele substituirá este asrquivo posteriormente, caso contrário você receberá erros de compilação.

#### 3.3 - Create `template.json` at your project root

Liste todas as suas dependências e scripts que você precisa para o novo aplicativo criado a partir do seu template. Por exemplo:

```json
{
    "dependencies": {
        "styled-components": "^5.0.1"
    },
    "scripts": {}
}
```

#### 3.4 - Copy `src/` and `public/` folders into your `template/` folder

Agora você deve copiar a sua pasta `src` e `public` para dentro de `template`

```bash
$ cp -a ./src/. template/src && cp -a ./public/. template/public
```

#### 3.5 - Copy any configuration files that you might want to include with your template

Aqui você deve copiar e configurar os arquivos isolados que você quer incluir no seu template como por exemplo

```bash
cp .eslintignore .eslintrc .prettierrc tsconfig.json README.md template/
```

Pronto, temos o nosso template criado e corretamente configurado, agora vamos publicá-lo no npm para que seja possível usá-lo.

## Prepare the template for publishing to the NPM

### Prepare your `package.json`

Aqui você irá preparar o seu package.json adicionando a licença, autor, descrição, keywords, URL do repositório, URL para correção de possíveis bugs e etc. Veja o meu...

### Add `main` and `files` properties

É importante mostrar ao CRA onde procurar ao criar a sua aplicação pelo seu template adicionando os pontos 'main' e 'files' aos arquivos adequados.

```json
{
    “main”: “template.json”,
    “keywords”: [
    “react”,
    “create-react-app”,
    “cra-template”,
    “template”,
    “prettier”
    ],
    “files”: [“template”, “template.json”]
}
```

### I’d suggest using a pre-publish script to make it easier for incremental template updates

```json
{
    "clean-files": "rm -rf ./template/public ./template/src",
    "copy-files": "cp -a ./src/. template/src && cp -a ./public/. template/public",
    "prepublishOnly": "yarn clean-files && yarn copy-files"
}
```

### Publishing to the NPM

Quando tudo estiver pronto, você poderá publicar o seu template no NPM

-   Create a npm account
-   Login to npm via terminal in your root project `npm login`
-   Publish your package to the npm with public access `npm publish --access public`

## Usage

```bash
$ npx create-react-app your-project-name --template nubelsondev

$ yarn create react-app your-project-name --template nubelsondev
```

O comando npm instala a versão estável mais recente do CRA a partir do npm

O parámetro —template aponta para o template que você deseja usar, note que o prefixo cra-template- é omitido.
