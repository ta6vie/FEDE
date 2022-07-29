var obj = JSON.parse($response.body);

obj = 

{
  "wordpdf" : {
    "mb" : 4000,
    "files" : 10
  },
  "rotateimage" : {
    "mb" : 4000,
    "files" : 120
  },
  "imagepdf" : {
    "mb" : 4000,
    "files" : 80
  },
  "pagenumber" : {
    "mb" : 4000,
    "files" : 10
  },
  "unlock" : {
    "mb" : 4000,
    "files" : 10
  },
  "pdfa" : {
    "mb" : 4000,
    "files" : 10
  },
  "resizeimage" : {
    "mb" : 4000,
    "files" : 120
  },
  "watermarkimage" : {
    "mb" : 4000,
    "files" : 120
  },
  "memeimage" : {
    "mb" : 4000,
    "files" : 1
  },
  "powerpointpdf" : {
    "mb" : 4000,
    "files" : 10
  },
  "compressimage" : {
    "mb" : 4000,
    "files" : 120
  },
  "split" : {
    "mb" : 4000,
    "files" : 1
  },
  "merge" : {
    "mb" : 4000,
    "files" : 500
  },
  "excelpdf" : {
    "mb" : 4000,
    "files" : 10
  },
  "compress" : {
    "mb" : 4000,
    "files" : 10
  },
  "pdfexcel" : {
    "mb" : 4000,
    "files" : 10,
    "pages" : 400
  },
  "pdfjpg" : {
    "mb" : 4000,
    "files" : 10
  },
  "repair" : {
    "mb" : 4000,
    "files" : 10
  },
  "organize" : {
    "mb" : 4000,
    "files" : 20
  },
  "cropimage" : {
    "mb" : 4000,
    "files" : 1
  },
  "rotate" : {
    "mb" : 4000,
    "files" : 80
  },
  "converttojpg" : {
    "mb" : 4000,
    "files" : 120
  },
  "convertfromjpg" : {
    "mb" : 4000,
    "files" : 120
  },
  "editimage" : {
    "mb" : 50,
    "files" : 1
  },
  "editpdf" : {
    "mb" : 100,
    "files" : 1
  },
  "sign" : {
    "mb" : 50,
    "files" : 5
  },
  "watermark" : {
    "mb" : 4000,
    "files" : 10
  },
  "pdfword" : {
    "mb" : 4000,
    "files" : 10
  },
  "pdfoffice" : {
    "mb" : 4000,
    "files" : 10
  },
  "officepdf" : {
    "mb" : 4000,
    "files" : 10
  },
  "pdfpowerpoint" : {
    "mb" : 4000,
    "files" : 10
  },
  "protect" : {
    "mb" : 4000,
    "files" : 80
  }
}
$done({body: JSON.stringify(obj)});