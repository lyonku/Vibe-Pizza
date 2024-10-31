// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import type { UserRole } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      provider: string;
      id: string;
      role: UserRole;
      name: string;
      image: string;
    };
  }

  interface User extends DefaultUser {
    role: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: UserRole;
  }
}