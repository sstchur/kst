import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();
const uri = "mongodb+srv://sstchur:8eeKbr6vbVAFDnok@cluster0.gon1mvl.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
let client;
let clientPromise;
if (process.env["NODE_ENV"] === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}
const clientPromise$1 = clientPromise;
const schoolCodes = /* @__PURE__ */ new Map([
  ["skyline", 912873],
  ["liberty", 102938],
  ["redmond", 564738]
]);
export {
  clientPromise$1 as c,
  schoolCodes as s
};
