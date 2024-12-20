export function chunkDocument(text: string, maxChunkSize: number = 500) {
    const chunks: string[] = [];
    const sentences = text.split(/(?<=[.!?])\s+/);
    let currentChunk = '';
  
    for (const sentence of sentences) {
      if ((currentChunk + sentence).length <= maxChunkSize) {
        currentChunk += (currentChunk ? ' ' : '') + sentence;
      } else {
        if (currentChunk) chunks.push(currentChunk);
        currentChunk = sentence;
      }
    }
    if (currentChunk) chunks.push(currentChunk);
  
    return chunks;
  }
  
  export function createSearchPrompt(question: string, context: string) {
    return `Context: ${context}\n\nQuestion: ${question}\n\nAnswer the question based on the context provided. If the answer cannot be found in the context, say "I don't have enough information to answer that question."\n\nAnswer:`;
  }