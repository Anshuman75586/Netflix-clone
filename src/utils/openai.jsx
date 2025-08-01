import OpenAI from "openai";
import { OPENAI_key } from "../utils/constants";

const client = new OpenAI({
  apiKey: OPENAI_key,
});
export default client;
