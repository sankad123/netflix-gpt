import OpenAI from 'openai';
import { Open_APIKey } from './constants';

const openai = new OpenAI({
  apiKey: Open_APIKey,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;