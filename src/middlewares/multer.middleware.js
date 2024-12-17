import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp');
    },
    filename: function (req, file, cb) {
        //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname); // not proper way that filename with original name which is the name of file when it is uploaded by the user because what if multiple files come then it will be overridden. But in rare case because once file is uploaded it remains on local server for tiny amount of time and then unlink or removed so if the another file comes at that time then that first file was removed.
    }
});

export const upload = multer({
    storage,
});
