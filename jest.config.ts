import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm", // ✅ use ESM preset
  roots: ["<rootDir>/tests"], // ✅ point to tests folder
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  extensionsToTreatAsEsm: [".ts"], // ✅ treat .ts files as ESM
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
  testEnvironment: "node",
  clearMocks: true,
  verbose: true,
};

export default config;
