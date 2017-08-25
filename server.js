let sass = require('node-sass');
let fs = require('fs');

let result = sass.renderSync({
  file: './reset.scss',
  outputStyle: 'compressed'
});

fs.writeFileSync('./build/reset.min.css', result.css.toString(), 'utf-8');

console.log('\n build done 😘 \n');