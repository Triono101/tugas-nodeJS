const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'File-Biodata.csv',
  header: [
    {id: 'nama', title: 'Nama'},
    {id: 'hobi', title: 'Hobi'}
  ]
});

const moment = require('moment');
const data = [
  {
    nama: 'Triono',
    hobi: 'Membaca Manga'
  }
];

csvWriter.writeRecords(data)
  .then(() => {
    console.log(`Data file Csv sudah ditambahkan pada ${moment().format('LTS')}`);
    });