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
