const pdfconvert = require('pdf-parse');
const multer = require('multer');

const test = (req, res) => {
    res.json("Test is working");
}

const getdocx = async (req, res) => {
    try {
        const pdfpath = req.file.path;
        pdfconvert(pdfpath).then((data) => {
            console.log(data.text);
            res.json(data.text);
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    test,
    getdocx
}