# Authentication Example
## Setup

1. md authentication-example
2. cd authentication-example
3. create .vscode/settings.json
### Backend
1. nest new backend
2. npx create-next-app
    - frontend
3. cd backend
4. del .git
5. npm install --save @nestjs/passport passport passport-github2 @nestjs/jwt passport-jwt
6. npm install --save-dev @types/passport-github2 @types/passport-jwt
7. set up routes (app.controller.ts)
8. nest g module users
9. nest g service users
10. nest g module auth
11. nest g service auth
12. create src/auth/github.strategy.ts
13. create src/auth/github.guard.ts
14. create src/auth/jwt.strategy.ts
15. create src/auth/jwt-auth.guard.ts