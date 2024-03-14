export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "andy"
    );
  }

  if (query.toLowerCase().includes("plus")) {  
    const plusRegex = /(\d+)\s*plus\s*(\d+)/i;
    hits = query.match(plusRegex);

    
    return parseInt(hits[1])+parseInt(hits[2])

  }

  if (query.toLowerCase().includes("largest")) {  
    const plusRegex = /(\d+)\s*plus\s*(\d+)/i;
    hits = query.match(plusRegex);
    return parseInt(hits[1])+parseInt(hits[2])

  }
  


  
  

  

  return "";
}
