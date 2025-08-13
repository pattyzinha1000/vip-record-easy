import { Button } from '@/components/ui/button';
import fitnessLogo from '@/assets/fitness-doctor-logo.png';

const Index = () => {
  const handleRecord = () => {
    // Record functionality will be implemented
    console.log('Record button clicked');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with logo */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <img 
            src={fitnessLogo} 
            alt="Fitness Doctor Logo" 
            className="h-16 w-auto sm:h-20"
          />
        </div>
      </header>

      {/* Main content container */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left side - Banner and Button */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            {/* VIP Banner */}
            <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                VIP!
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground mt-4 leading-relaxed">
                Make sure to click below to record your video!
              </p>
            </div>

            {/* Record Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                onClick={handleRecord}
                size="lg"
                className="text-2xl sm:text-3xl lg:text-4xl px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Record
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-card border rounded-lg p-4 sm:p-6 shadow-lg">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative">
                {/* Ziggeo Video Player Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4">
                    <svg className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Video Player Ready
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Ziggeo video player will be embedded here
                  </p>
                </div>
                
                {/* Custom Ziggeo Integration Script */}
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      // Add Ziggeo integration when ready
                      // Replace this placeholder with actual Ziggeo embed code
                    `
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
