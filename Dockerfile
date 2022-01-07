# FROM determina a versão do node
FROM node:alpine
# diretorio dentro da maquina
WORKDIR /usr/app
# copia todos os arquivos que começam com package.json
COPY package*.json ./
# roda no comando npm install
RUN npm install
# copia o resto dos arquivos pra dentro com excessão dos arquivos no dockerignore
COPY . .
# qual porta é exporta
EXPOSE 3000
# única por dockerfile. É o comando de start do arquivo com o node
CMD ["npm", "start"]
# monta a imagem com o comando: docker build -t adriano/dockernode .