import { config } from "dotenv";

// Load environment variables from your .env file
config();

export default {
  datasource: {
    url: process.env.DATABASE_URL,
  },
};
