import * as mysql from "mysql2/promise";
import { Connection } from "mysql2/promise";

export namespace MySQL {
  export let instance: Connection;

  export const connect = async () => {
    instance = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root_password",
      database: "sevenBastards",
      port: 6000,
    });
  };
}
