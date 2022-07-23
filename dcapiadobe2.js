var obj = JSON.parse($response.body);

obj = 

{
  "edit_pdf_ops" : {
    "remaining" : 99999
  },
  "ocr_pdf_max_file_size" : {
    "limit" : 102400
  },
  "ocr_pdf_conversions" : {
    "remaining" 99999
  },
  "organize_pdf_max_file_size" : {
    "limit" : 102400
  },
  "optimize_pdf_max_file_size" : {
    "limit" : 2097152
  },
  "ipp_create_pdf_conversions" : {
    "remaining" : 99999
  },
  "password_encrypt_ops" : {
    "remaining" : 99999
  },
  "edit_pdf_max_file_size" : {
    "limit" : 102400
  },
  "optimize_pdf_ops" : {
    "remaining" : 99999
  },
  "export_pdf_conversions" : {
    "remaining" : 99999
  },
  "organize_pdf_conversions" : {
    "remaining" : 99999
  },
  "organize_pdf_documents" : {
    "limit" : 100
  },
  "combine_pdf_max_file_size" : {
    "limit" : 102400
  },
  "create_pdf_conversions" : {
    "remaining" : 99999
  },
  "combine_pdf_conversions" : {
    "remaining" : 99999
  },
  "split_pdf_max_split_points" : {
    "limit" : 20
  },
  "password_encrypt_max_file_size" : {
    "limit" : 102400
  },
  "export_pdf_max_file_size" : {
    "limit" : 102400
  },
  "split_pdf_conversions" : {
    "remaining" : 99999
  },
  "create_pdf_max_file_size" : {
    "limit" : 102400
  },
  "split_pdf_max_file_size" : {
    "limit" : 1048576
  },
  "combine_pdf_documents" : {
    "limit" : 100
  }
}

$done({body: JSON.stringify(obj)});
