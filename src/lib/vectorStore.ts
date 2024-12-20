type Document = {
    id: string;
    content: string;
    embedding: number[];
  };
  
  export class SimpleVectorStore {
    private documents: Document[] = [];
  
    async addDocument(id: string, content: string, embedding: number[]) {
      this.documents.push({ id, content, embedding });
    }
  
    async findSimilar(queryEmbedding: number[], limit: number = 3): Promise<Document[]> {
      return this.documents
        .map(doc => ({
          ...doc,
          similarity: this.cosineSimilarity(queryEmbedding, doc.embedding)
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, limit);
    }
  
    private cosineSimilarity(vecA: number[], vecB: number[]): number {
      const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
      const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
      const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
      return dotProduct / (magA * magB);
    }
  }