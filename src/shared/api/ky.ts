import ky from "ky";

export const requestKy = ky.create({
  prefixUrl: "http://localhost:8080",
});
