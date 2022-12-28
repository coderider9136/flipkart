const multer = require("multer");
const path = require("path");

function uploads(request, response, filefield, options) {


    options = { options } ? options : {}
    let destination = (options.destination) ? options.destination : './upload-image/';
    let filesize = (options.filesize) ? options.filesize : 1 * 1000 * 1000;
    let fileTypes = (options.fileTypes) ? options.fileTypes : /jpg|jpeg|jfif|xlsx|png/;

    const storage = multer.diskStorage({


        destination: function(request, file, cb) {
            cb(null, destination)
        },
        filename: function(request, file, cb) {


            let fn = file.fieldname + "_" + Date.now() + "-" + Math.round(Math.random() * 1E9)
            cb(null, fn + ".jpg")


        }
    });

    let fileFilter = function(request, file, cb) {
        let filetypes = fileTypes;
        let mimetype = filetypes.test(file.mimetype);
        let extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true)
        }

        cb("error:file upload only support the following fileTypes-" + fileTypes);

    }

    let limit = { filesize: filesize }
    let upload = multer({ storage: storage, limits: limit, fileFilter: fileFilter })

    if (typeof(filefield) == "string") {
        upload = upload.single(filefield)
        return new Promise((resolve, reject) => {
            upload(request, response, function(err) {
                if (err) {
                    reject(err)
                }
                resolve(request.file)
            })
        })
    } else if (typeof(filefield) == "object") {
        upload = upload.fields(filefield)

        return new Promise((resolve, reject) => {

            upload(request, response, function(err) {

                if (err) {
                    reject(err);
                }
                resolve(request.files)
            })

        })
    }
}

module.exports = uploads