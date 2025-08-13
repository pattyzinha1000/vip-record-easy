import { ZiggeoPlayer } from 'react-ziggeo';
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

          {/* Right side - Video Player */}
          <div className="order-1 lg:order-2">
            <div className="bg-card border rounded-lg p-4 sm:p-6 shadow-lg">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <ZiggeoPlayer
                  apikey="YOUR_ZIGGEO_API_KEY"
                  video="YOUR_VIDEO_TOKEN"
                  width="100%"
                  height="100%"
                  theme="modern"
                  themecolor="blue"
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
