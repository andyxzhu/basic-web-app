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
    const hits = query.match(plusRegex);

    if (hits) { 
      return (parseInt(hits[1])+parseInt(hits[2])).toString();
    }
  }

  if (query.toLowerCase().includes("max")) {  
    const regex = /\b\d+\b/g;

    const hits = query.match(regex);
    const max = 0
    if (hits) { 
      for (let i=0; i<hits.length; i++) {
        const num = parseInt(hits[i]);
        max = Math.max(num, max);
      }
      return max;
    }
  }
  
  if (query.toLowerCase().includes("square and a cube")) {  
    const regex = /\b\d+\b/g;;

    const hits = query.match(regex);
    
    if (hits) { 
      for (let i=0; i<hits.length; i++) {
        const num = parseInt(hits[i]);
        if (Math.sqrt(num).isInteger() && Math.cbrt(num).isInteger()) return num.toString();
      }
    }
  }

  


  
  

  

  return "";
}
