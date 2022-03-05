$npm init -y
$npm install express pg pg-hstore ejs sequelize
jalanin npx sequelize-cli init untuk menginisiasi fitur config,migrasi,models,seders;
bikin entry point app.js
    masukin yang diperlukan require express, port

    masukin app.use dan app.listen
    masukin endpoint ('/')

membuat first model (migration)

    $npx sequelize-cli model:generate --name User --attributes firstName: string, lastName: string, email: string
    $npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,email:string

dengan menajalankan first model migration baru terjadi di local
untuk mehubungkannya ke dalam database kita diperlukan migratenya lagi

panggil db:migrate
$npx sequelize-cli db:migrate

cek di pgAdmin4 direfresh database yang dimaksudkan,
schema > tables. jika berhasil maka muncul sequelize meta dan tabel "users"

//memodifikasi kolom yang dibuat
misalnya terjadi kesalahan dalam mebuat tabel bida diundo
cara mengundo migrasi yang udah dibuat
$npx sequelize-cli db:migrate:undo

pada case ini bagian kode migrasi diubah CreatedAt dan updatedAt diganti menjadi created_ad dan updated_at nya.

//apakah ketika mengedit bagian migrasi di models>users harus diubah juga???

models digunakan untuk berkomunikasi dengan database, meghubungkan logic dan keinginannya.
misalnya mau create data, delete data dsb. yang menghubungkan logicnya ini adalah models.
    gimana biar models nya ini memiliki setinggannya sama dengan migrations?

models>user.js
    baris 21
    sequlize,
    modelName:'user'
    underscored: true

    underscored berfungsi untuk memisahkan dengan underscore bila ada kata yang berupa camelCase

Seeders:
kita bisa menyiapkan data dumy ke dalam database kita
jadi kita ingin memasukan data sementara di dalam database kita supaya ada datanya

menggunakan seeders

$npx sequelize-cli seed:generate --name demo-user
    jika berhasil akan terbentuk file js demo user

kita bisa mengcopy templatenya
    {
      id: sekian,
      firstName: 'Faisal',
      lastName: 'Faruq',
      email: 'faisal@gmail.com',
      created_at: new Date(),
      updated_at: new Date()
    }

untuk ngepush data seeder ke dalam database dengan menggunakan 
$npx sequelize-cli db:seed:all

untuk melihat data dummy dapat melihat pada pgadmin, buka query tools database/tabel
    SELECT * FROM users 
jika berhasil maka isi data dari seeder yg dibuat akan muncul (fauzi dan Faisal)


mau ngeshow controllernya
buka folder controller bikin file userController.js

yang perlu dilakukan adalah mengimport database yang dimaksudkan (chapter 5 -> node Js menggunakan require dan modul import/export)
pada userController.js panggil dengan require dan export

bikin file userRoute.js pada folder route lalu diexport
    panggil express dan router dan bentuk rutenya ('/user', user.all)

ke bagian app.js panggil routenya (apus yang sebelumnya hello world) 

lalu di run dengan 
    $node app.js

untuk cek berhasil atau gak localhost://3000/user
muncul
    "status":"fail",
    "error":[
        "column\first_name\"does not exist
    ]hal tersebut terjadi error dikarenakan adanya dampak dari underscored sehingga harus mengubah model levelnya

ke bagian user.js> hapus salah satu bagian modelnya yaitu underscored
muncul
    // 20220306015550
// http://localhost:3000/users

{
  "status": "fail!",
  "error": [
    "column \"createdAt\" does not exist"
  ]

model bisa diubah maka diedit 
    createdAt: 'created_at',
    updateAt: 'update_at'
cek kembali dengan node app.js

setelah berhasil cek di local host maka data fauzi dan faizal akan muncul dalam tampilan json