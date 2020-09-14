const fs = require('fs');
const generate  = require('showdown');
const converter = new generate.Converter();
const convertHTMLToPDF = require('pdf-puppeteer');

const text = fs.readFileSync('./src/resume.md', 'utf8');

const live_reload_header = "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1\"></' + 'script>')</script> \n\n";

const html = live_reload_header + converter.makeHtml(text);

const result = fs.existsSync('out');
if (!result) {
    fs.mkdirSync('out');
}

convertHTMLToPDF(html, pdf => fs.writeFileSync('./out/resume.pdf', pdf), { format: 'Letter', scale: 0.72 }, {
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
    ]
});

fs.writeFileSync('./out/index.html', html, 'utf8');

fs.copyFileSync('./src/resume.md', './out/resume.md');
