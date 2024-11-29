/**
 * @implementation :
 * Configuration options for the cors middleware
 *
 * @author
 * @since
 * v1.0.0
 */
export let corsOptions = {
  origin: (origin, callback) => {
    let whitelist = ["http://localhost:3000", "http://localhost:4000"];

    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
