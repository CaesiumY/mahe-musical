import { getDatabase } from "firebase/database";
import { app } from "./firebaseConfig";

export const realtime = getDatabase(app);
