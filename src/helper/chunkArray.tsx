const chunkArray = ({ arr, size }: { arr: any[]; size: number }) => {
    if(!arr){
        return []
    }
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };


  export default chunkArray;