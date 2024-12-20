import { HfInference } from '@huggingface/inference';

if (!process.env.HUGGINGFACE_API_KEY) {
  throw new Error('Missing Hugging Face API key');
}

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Function to generate embeddings
export async function generateEmbedding(text: string) {
  const response = await hf.featureExtraction({
    model: 'sentence-transformers/all-MiniLM-L6-v2',
    inputs: text
  });
  return response;
}

// Function to generate text responses
export async function generateResponse(prompt: string) {
  const response = await hf.textGeneration({
    model: 'mistralai/Mistral-7B-Instruct-v0.2',
    inputs: prompt,
    parameters: {
      max_new_tokens: 512,
      temperature: 0.7,
      top_p: 0.95,
      return_full_text: false
    }
  });
  return response;
}