function OfflineAlert() {
  return (
    <div className="fixed top-10 right-10 left-10 flex rounded-lg bg-red-100 p-4 dark:bg-red-200 z-[9999]" role="alert">
      <svg className="h-5 w-5 flex-shrink-0 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
      </svg>
      <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">Anda Sedang Offline !!!</div>
    </div>
  );
}

export default OfflineAlert;
