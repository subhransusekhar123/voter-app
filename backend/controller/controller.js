const {dataModel,voteModel} = require("../models/models");
var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "snapclean",
  api_key: "923722868547732",
  api_secret: "31gOx5FAAEByxYkcuEWLrL5Tq38",
  secure: true,
});

const postRoute = async (req, res) => {
  // console.log(req.files.file.path.split("\\"));

  // const splitArray = req.files.file.path.split("\\");
  // const newArray = splitArray[splitArray.length - 1];
  // console.log(newArray);

  var imageFile = req.files.file.path;
  
  console.log(imageFile)
  cloudinary.uploader.upload(imageFile, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      const user = new dataModel({
        name: req.body.name,
        file:result.url
      });

      user
        .save()
        .then((data) => {
          ///  sendEmail(data.email,"success");
          fs.unlink(newArray, () => {
            console.log("file deleted");

            res.json({
              message: "Successfully registered",
            });
          });
        })
        .catch((err) => {});
    }
  });
};

const getRoute = async (req, res) => {
  let data = await dataModel.find();
  res.send(data);
};

module.exports = {
  postRoute: postRoute,
  getRoute: getRoute,
};
