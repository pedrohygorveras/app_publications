import helpers from "../helpers/index";

class AuthMiddleware {
  verifyToken() {
    return (req: any, res: any, next: any) => {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .json({ error: "Access denied. No token provided." });
      }

      try {
        const decoded = helpers.oauth.verifyToken(token);
        req.user = decoded;
        next();
      } catch (error: any) {
        return res.status(401).json({
          error: "Invalid token.",
        });
      }
    };
  }
}

export const authMiddleware = new AuthMiddleware().verifyToken();
