import { Button } from '@/components/ui/button';
import fitnessLogo from '/lovable-uploads/61fed94a-a633-4865-bc7a-d9cca8d59de8.png';

const Index = () => {
  const handleRecord = () => {
    // Record functionality will be implemented
    console.log('Record button clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Header with logo */}
      <header className="w-full py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
            <img 
              src={fitnessLogo} 
              alt="The Fitness Doctor Logo" 
              className="h-20 w-auto sm:h-24 lg:h-28"
            />
          </div>
        </div>
      </header>

      {/* Main content container */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left side - Banner and Button */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-10">
            {/* VIP Banner */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl blur-sm opacity-75"></div>
              <div className="relative bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl p-8 sm:p-10 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-wider">
                    VIP!
                  </h1>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-relaxed">
                  Make sure to click below to record your video!
                </p>
                <div className="absolute top-4 right-4 opacity-20">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Record Button */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <Button 
                  onClick={handleRecord}
                  size="lg"
                  className="relative text-3xl sm:text-4xl lg:text-5xl px-12 sm:px-16 lg:px-20 py-8 sm:py-10 lg:py-12 font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white border-0 transform hover:scale-105 hover:-translate-y-1"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  RECORD
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Video Player */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-30"></div>
                      <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-6 shadow-xl">
                        <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                      Video Player Ready
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
                      Ziggeo video player will be embedded here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating decoration elements */}
      <div className="fixed top-1/4 left-4 opacity-10 pointer-events-none">
        <div className="w-32 h-32 bg-blue-600 rounded-full blur-xl"></div>
      </div>
      <div className="fixed bottom-1/4 right-4 opacity-10 pointer-events-none">
        <div className="w-40 h-40 bg-red-600 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default Index;