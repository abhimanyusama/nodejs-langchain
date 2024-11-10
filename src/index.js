import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import fetch, { Headers } from 'node-fetch';  // Import fetch and Headers from node-fetch

dotenv.config(); 

// Add the global fetch polyfill if necessary
globalThis.fetch = fetch;  // Make fetch available globally
globalThis.Headers = Headers;  // Make Headers available globally

// Initialize the GoogleGenerativeAI instance with the API key
const genAI = new GoogleGenerativeAI(process.env.gemini_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Define the prompt
const prompt = "who measured it first?";

async function generate() {
  try {
    // Generate content using the model
    const result = await model.generateContent(prompt);
    
    // Log the response text (await it since it's a promise)
    console.log(await result.response.text());
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

// Call the generate function
generate();
