const LoadingScreen: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen text-4xl font-semibold">
      <span className="animate-pulse">
        Loading...
      </span>
    </div>
  );
};

export default LoadingScreen;