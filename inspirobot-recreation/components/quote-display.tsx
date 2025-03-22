interface QuoteDisplayProps {
    quote: string
  }
  
  export default function QuoteDisplay({ quote }: QuoteDisplayProps) {
    return (
      <div className="max-w-md w-full bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg mb-8">
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <p className="text-2xl font-serif italic text-center">
            "{quote}"
          </p>
        </div>
      </div>
    )
  }