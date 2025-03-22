"use client"

import { useState } from "react"
import QuoteGenerator from "./quote-generator"
import QuoteDisplay from "./quote-display"
import ActionButtons from "./action-buttons"

export default function MainContent() {
  const [quote, setQuote] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const generateQuote = () => {
    setIsLoading(true)
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Sample quotes - in a real implementation, you'd fetch from an API
      const quotes = [
        "Cats are just small women.",
        "Before inspiration comes the slaughter.",
        "Your life is just an abstract representation of your fear of death.",
        "Happiness is just sadness that hasn't happened yet.",
        "The universe is indifferent to your suffering.",
        "Never underestimate the power of denial."
      ]
      
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      setQuote(randomQuote)
      setIsLoading(false)
    }, 1500)
  }
  
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4">
      {!quote && !isLoading && (
        <QuoteGenerator onGenerate={generateQuote} />
      )}
      
      {isLoading && (
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-xl">Generating inspiration...</p>
        </div>
      )}
      
      {quote && !isLoading && (
        <>
          <QuoteDisplay quote={quote} />
          <ActionButtons onGenerate={generateQuote} quote={quote} />
        </>
      )}
    </main>
  )
}