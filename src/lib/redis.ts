import { Redis } from '@upstash/redis';

// Initialize the Upstash Redis client using environment variables
// UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
export const redis = Redis.fromEnv();
