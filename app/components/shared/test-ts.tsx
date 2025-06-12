import React, { useState } from "react";

const testTs = () => {
  //   const [theme, setTheme] = useState<ThemeTypes>("black");
  //   type OnlyStrings<T> = {
  //     [P in keyof T]?: string;
  //   };

  //   type ObjType = {
  //     name: string;
  //     lastName: string;
  //     age: number;
  //   };

  //   const obj: OnlyStrings<ObjType> = {
  //     name: "valeri",
  //     lastName: "kuzmini",
  //   } as const;

  // ================================================================================================================================================================

  //   type ThemeTypes = "white" | "black";

  //   type ReadonlyTypesObj<T> = {
  //     readonly [P in keyof T]: T[P];
  //   };

  //   type ObjectKeys = {
  //     name: string;
  //     city: string;
  //     age: number;
  //     theme: ThemeTypes;
  //   };

  //   const obj: ReadonlyTypesObj<ObjectKeys> = {
  //     name: "valeri",
  //     city: "tbilisi",
  //     age: 26,
  //     theme: theme,
  //   };

  // ================================================================================================================================================================

  //   const obj = {
  //     create: "can_create",
  //     read: "can_read",
  //     update: "can_update",
  //     delete: "can_delete",
  //   } as const;

  //   type ObjType = typeof obj;

  //   type ReversedObjtype<T> = {
  //     [K in keyof T as Extract<T[K], string | number | symbol>]?: K;
  //   };

  //   const reversed: ReversedObjtype<ObjType> = {
  //     can_create: "create",
  //     can_read: "read",
  //     can_update: "update",
  //     can_delete: "delete",
  //   };

  // ================================================================================================================================================================

  const routes = {
    home: "/",
    about: "/about",
    profile: "/profile",
  } as const;

  const goToRoute = <T extends typeof routes, K extends keyof T>(
    routes: T,
    pathKey: K
  ): T[K] => {
    return routes[pathKey];
  };

  goToRoute(routes, "profile");

  return <div>test-ts</div>;
};

export default testTs;
