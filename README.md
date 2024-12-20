# AA Sponsor Chat Assistant

[![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Hugging Face](https://img.shields.io/badge/Hugging%20Face-Inference%20API-yellow?style=flat&logo=huggingface)](https://huggingface.co/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

A RAG-based chatbot leveraging Hugging Face models to provide responses based on AA literature and materials. This project aims to assist in understanding AA principles and literature through advanced natural language processing.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Hugging Face Inference API
- Vector Embeddings (sentence-transformers)
- Tailwind CSS for styling
- Vector similarity search

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm
- Hugging Face API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/tony-42069/aa-sponsor.git
cd aa-sponsor
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add:
```env
HUGGINGFACE_API_KEY=your-api-key-here
```

4. Run the development server
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure
```
src/
  ├── app/             # Next.js app router
  │   ├── api/         # API routes
  │   └── page.tsx     # Main page
  ├── lib/             # Core utilities
  │   ├── huggingface.ts  # HF API integration
  │   ├── utils.ts        # Helper functions
  │   └── vectorStore.ts  # Vector storage
  ├── components/      # React components
  └── data/           # AA literature documents
```

## Features
- Document chunking and embedding generation
- Semantic search using vector similarity
- Context-aware responses based on AA literature
- Real-time chat interface
- Document processing and management
- Response generation using state-of-the-art language models

## Models Used
- **Embeddings**: sentence-transformers/all-MiniLM-L6-v2
- **Text Generation**: mistralai/Mistral-7B-Instruct-v0.2

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- AA literature and materials
- Hugging Face for providing the model infrastructure
- Next.js team for the amazing framework