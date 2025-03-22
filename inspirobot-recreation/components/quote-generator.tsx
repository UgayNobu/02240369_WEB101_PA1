interface QuoteGeneratorProps {
    onGenerate: () => void
  }
  
  export default function QuoteGenerator({ onGenerate }: QuoteGeneratorProps) {
    return (
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Artificial Intelligence<br />Inspirational Quotes
        </h1>
        <button
          onClick={onGenerate}
          className="bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-3 px-8 rounded-full text-xl transition-colors"
        >
          Generate
        </button>
        <p className="mt-4 text-gray-400 max-w-md mx-auto">
          InspiroBot™ runs on Artificial Intelligence. This means that everything 
          you see is created in real-time by a machine.
        </p>
      </div>
    )
  }