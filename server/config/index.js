import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * server port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * mongoDB
   */
  databaseURL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ideascluster.917vce4.mongodb.net/ideas`,

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },

  /**
   * bcrypt
   */
  bcryptConfig: {
    saltRounds: process.env.SALT_ROUNDS,
    accessToken: process.env.ACCESS_SECRET,
  },
};
