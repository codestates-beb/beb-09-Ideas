import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import config from "../config/index.js";

// Swagger 스펙을 작성한 주석 파일의 경로
const options = {
  definition: {
    openapi: "3.0.0", // Swagger 버전
    info: {
      title: "Ideas API 문서", // 문서 제목
      version: "1.0.0", // 문서 버전
    },
    servers: [
      {
        url: `http://127.0.0.1:${config.port}`, // 요청 URL
      },
    ],
  },
  apis: ["../api/routes/*.js"], // @Swagger 주석이 포함된 파일 경로
};

const specs = swaggerJSDoc(options);

export { swaggerUi, specs };
