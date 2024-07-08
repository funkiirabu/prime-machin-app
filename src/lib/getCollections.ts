export async function getCollections() {
    const collections = [];
    const batchSize = 50;
    const totalCollections = 3333;
  
    for (let i = 1; i <= totalCollections; i += batchSize) {
      const endIndex = Math.min(i + batchSize - 1, totalCollections);
      const batchPromises = [];
  
      for (let j = i; j <= endIndex; j++) {
        batchPromises.push(
          fetch(`https://api.sm.xyz/v1/collections/machin/prime/${j}/items/`)
            .then((response) => response.json())
            .then((data) => data.data)
        );
      }
  
      const batchResults = await Promise.all(batchPromises);
      collections.push(...batchResults.flat());
    }
  
    return collections;
  }