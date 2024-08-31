import axios  from "axios";

import { IUser } from "../types/user.interface";

const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  users: {
    async getAll(): Promise<IUser[]> {
      const response = await httpClient.get("/users");

      return response.data;
    },
  },
};
