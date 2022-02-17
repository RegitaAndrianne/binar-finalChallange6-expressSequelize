# binar-finalChallange6-expressSequelize


1. npm init -y
2. npm install `pg express sequlize ejs`
3. npm install -D `sequelize-cli`
4. untuk inisiasi project express menggunakan config sequelize, menggunakan command
   `npx sequelize init`
5. nanti ke generate folder config, migrations, dan models
6. ubah configuration si config.json
7. bikin database dengan command
   `npx sequelize db:create`
   kalau mau ngapus database
   `npx sequelize db:drop`
   kalau mau pake environment yang beda
   `npx sequelize db:create --env=test`

8. untuk generate table 
table user_game Tabel User
`npx sequelize-cli model:generate --name User --attributes username:string,password:string`

table user_game_biodata Tabel Biodata
`npx sequelize-cli model:generate --name Biodata --attributes first_name:string,last_name:string,email:string,gender:string,birthdate:date`

table user_game_history Tabel History
`npx sequelize-cli model:generate --name History --attributes username:string,first_name:string,last_name:string,score:integer`

9. npx sequelize db:migrate >< npx sequelize db:migrate:undo:all

10 bikin folder data
`cd data`
`touch users.json biodata.json histories.json`

11. npx sequelize seed:create --name User
12. npx sequelize db:seed:all
