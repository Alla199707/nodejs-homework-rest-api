const Jimp = require("jimp");

const resizeImage = async (path) => {
  const image = await Jimp.read(path);
  await image.resize(250, 250);
  await image.writeAsync(path);

  return image;
};

module.exports = resizeImage;
