const readXlsxFile = require('read-excel-file/node');
const readline = require('readline');
const fs = require('fs');
const resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("qual o caminho?\n", function(answer){
    const files = answer;


    //fs.readdir(files , (err, arquivos) => {
        //arquivos.forEach(arquivo => {
            //console.log(arquivo);
          //});
      //});

      const schema = {
        'Nome': {
            prop: 'Nome',
            type: String
        },
        'Texto': {
            prop: 'Texto',
            type: String
        }
    }
    
    readXlsxFile(files, { schema }).then(({ rows, errors }) => {
        console.log(rows);
    });

    leitor.close();
});


