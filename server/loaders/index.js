import expressLoader from "./express.js";
import mongooseLoader from "./mongoose.js";
import Logger from "./logger.js";

export default async (expressApp) => {
  const mongoConnection = await mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  //   const userModel = {
  //     name: "userModel",
  //     // Notice the require syntax and the '.default'
  //     model: require("../models/user").default,
  //   };

  await expressLoader(expressApp);
  Logger.info("✌️ Express loaded");
};
