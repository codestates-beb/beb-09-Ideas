import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import config from "./../config/index.js";
import routes from "./../api/index.js";

export default (app) => {
  /**
   * Health Check endpoints
   */
  // app.get("/status", (req, res) => {
  //   res.status(200).end();
  // });
  // app.head("/status", (req, res) => {
  //   res.status(200).end();
  // });

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  // Transforms the raw string of req.body into JSON
  app.use(express.json());
  app.use(cookieParser());

  // Load API routes
  app.use(routes());

  // Catch 404 and forward to the error handler
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  // Error handlers
  //   app.use((err, req, res, next) => {
  //     /**
  //      * Handle 401 thrown by express-jwt library
  //      */
  //     if (err.name === "UnauthorizedError") {
  //       return res.status(err.status).send({ message: err.message }).end();
  //     }
  //     return next(err);
  //   });
  //   app.use((err, req, res, next) => {
  //     res.status(err.status || 500);
  //     res.json({
  //       errors: {
  //         message: err.message,
  //       },
  //     });
  //   });
};
