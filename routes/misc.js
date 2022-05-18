require("dotenv").config();

const postFile = async () => {
  try {
    const data = await fetch(
      `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.IMGBB_API_KEY}`
    );
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
