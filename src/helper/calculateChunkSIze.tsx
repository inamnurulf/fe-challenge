function calculateChunkSize(windowWidth: number): number {
    if (windowWidth < 768) {
      return 2;
    } else if (windowWidth < 1024) {
      return 4; 
    } else {
      return 6; 
    }
  }
  
  export default calculateChunkSize;