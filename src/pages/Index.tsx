import { Button } from '@/components/ui/button';
import { Video, Star, Play } from 'lucide-react';
import fitnessLogo from '/lovable-uploads/61fed94a-a633-4865-bc7a-d9cca8d59de8.png';
const Index = () => {
  const handleRecord = () => {
    // Record functionality will be implemented
    console.log('Record button clicked');
  };
  return <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Clean header */}
      <header className="w-full py-6 px-4 border-b border-gray-100 dark:border-gray-800">
        <div className="flex justify-center">
          <img src={fitnessLogo} alt="The Fitness Doctor Logo" className="h-16 w-auto" />
        </div>
      </header>

      {/* Hero section */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center space-y-16">
          
          {/* VIP Section */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg">
              <Star className="w-6 h-6 text-yellow-300 fill-current" />
              <span className="text-2xl font-bold tracking-wide">VIP ON DEMAND AND INTERACTIVE</span>
              <Star className="w-6 h-6 text-yellow-300 fill-current" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Make sure to click below to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Record your video!</span>
            </h1>
            
            <p className="text-xl max-w-2xl mx-auto leading-relaxed text-stone-950">Click the Red Start Recording button below to begin recording yourself, then click Click to Play to start your training session. Have fun, VIP!</p>
          </div>

          {/* Record Button and Video Player - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Record Button */}
            <div className="space-y-8">
              <Button onClick={handleRecord} size="lg" className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-16 py-8 text-2xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 w-full">
                <Play className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform" />
                START RECORDING
              </Button>
              
              <p className="text-sm text-gray-500 dark:text-gray-400">Your video will be securely processed and reviewed by your Neuro-Biomechanical Analysis Expert!</p>
            </div>

            {/* Video Player Section */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Training Video
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Click to play your workout session
                </p>
              </div>
              
              <div className="aspect-video bg-black rounded-2xl relative overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="/placeholder.svg"
                >
                  <source src="" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all">
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default Index;