import { Router } from "express";

import ApiRoutes from "./Api";
// import OAuthRoutes from "./OAuth";
// import UserRoutes from "./User";
// import GenerateContentRoutes from "./GenerateContent";
// import CourseRoutes from "./Course";
// import UserCourseRoutes from "./UserCourse";
// import ModuleRoutes from "./Module";
// import LessonRoutes from "./Lesson";
// import LogsRoutes from "./Logs";

class Routes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this.endpoints();
  }

  private endpoints(): void {
    this.routes.use("/", ApiRoutes);
    // this.routes.use("/oauth", OAuthRoutes);
    // this.routes.use("/user", UserRoutes);
    // this.routes.use("/content-generator", GenerateContentRoutes);
    // this.routes.use("/course", CourseRoutes);
    // this.routes.use("/user-course", UserCourseRoutes);
    // this.routes.use("/module", ModuleRoutes);
    // this.routes.use("/lesson", LessonRoutes);
    // this.routes.use("/logs", LogsRoutes);
  }
}

export default new Routes().routes;
