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
    const regex = /\b\d+\b/g;
    const hits = query.match(regex);

    if (hits) { 
      return (parseInt(hits[1])+parseInt(hits[2])).toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {  
    const regex = /\b\d+\b/g;
    const hits = query.match(regex);

    if (hits) { 
      return (parseInt(hits[1])*parseInt(hits[2])).toString();
    }
  }
  
  if (query.toLowerCase().includes("max")) {  
    const regex = /\b\d+\b/g;

    const hits = query.match(regex);
    var max = 0
    if (hits) { 
      for (let i=0; i<hits.length; i++) {
        const num = parseInt(hits[i]);
        max = Math.max(num, max);
      }
      return max.toString();
    }
  }
  
  if (query.toLowerCase().includes("square and a cube")) {  
    const regex = /\b\d+\b/g;

    const hits = query.match(regex);
    
    if (hits) { 
      for (let i=0; i<hits.length; i++) {
        const num = parseInt(hits[i]);
        if (Number.isInteger(Math.sqrt(num)) && Number.isInteger(Math.cbrt(num))) return num.toString();
      }
    }
  }

  


  
  

  

  return "";
}
