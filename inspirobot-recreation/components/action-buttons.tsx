import { Share2, Download, RefreshCw } from 'lucide-react'

interface ActionButtonsProps {
  onGenerate: () => void
  quote: string
}

export default function ActionButtons({ onGenerate, quote }: ActionButtonsProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Inspirobot Quote',
        text: quote,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(quote)
        .then(() => alert('Quote copied to clipboard!'))
        .catch(err => console.error('Failed to copy: ', err))
    }
  }
  
  const handleDownload = () => {
    // In a real implementation, you would generate an image
    // For this demo, we'll just alert
    alert('In a real implementation, this would download the quote as an image')
  }
  
  return (
    <div className="flex space-x-4">
      <button
        onClick={onGenerate}
        className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
        aria-label="Generate new quote"
      >
        <RefreshCw className="h-5 w-5" />
      </button>
      
      <button
        onClick={handleShare}
        className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
        aria-label="Share quote"
      >
        <Share2 className="h-5 w-5" />
      </button>
      
      <button
        onClick={handleDownload}
        className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
        aria-label="Download quote as image"
      >
        <Download className="h-5 w-5" />
      </button>
    </div>
  )
}