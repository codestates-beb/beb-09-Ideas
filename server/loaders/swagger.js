// Swagger 스펙을 작성한 주석 파일의 경로
const options = {
  definition: {
    openapi: "3.0.0", // Swagger 버전
    info: {
      title: "API 문서", // 문서 제목
      version: "1.0.0", // 문서 버전
    },
  },
  apis: ["./path/to/your/routes.js"], // 주석 파일이 위치한 경로
};

export default options;
