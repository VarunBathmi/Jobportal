const multer = require('multer');

//Configure storage
const storage = multer.diskStorage({
    destination: (req, filr, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

//File Filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg','image/png','image/jpg','application/pdf'];
    if(allowedTypes.includes(file.minetype)){
        cb(null, true);
    } else {
        cb(new Error('Only .jpeg, .jpg, .png, and .pdf formats are allowed'), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;