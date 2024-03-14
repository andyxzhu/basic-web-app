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
    var out = 0;
    if (hits) { 
      for (let i=0; i<hits.length; i++) {
        const num = parseInt(hits[i]);
        out += num;
      }
    }
    return out.toString();
  }

  if (query.toLowerCase().includes("minus")) {  
    const regex = /\b\d+\b/g;
    const hits = query.match(regex);

    if (hits && hits.length == 2) { 
      return (parseInt(hits[0])-parseInt(hits[1])).toString();
    }
  }

  if (query.toLowerCase().includes("power")) {  
    const regex = /\b\d+\b/g;
    const hits = query.match(regex);

    if (hits && hits.length == 2) { 
      return (parseInt(hits[0])**parseInt(hits[1])).toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {  
    const regex = /\b\d+\b/g;
    const hits = query.match(regex);

    if (hits && hits.length == 2) { 
      return (parseInt(hits[0])*parseInt(hits[1])).toString();
    }
  }
  
  if (query.toLowerCase().includes("largest")) {  
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




  function isPrime(num: number) { // returns boolean
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    const s = Math.sqrt(num); // store the square to loop faster
    for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
        if(num % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
  }
  
  if (query.toLowerCase().includes("primes")) {  
    const regex = /\b\d+\b/g;

    const hits = query.match(regex);
    const out = [];
    if (hits) { 
      for (let i=0; i<hits.length; i++) {
        const num = parseInt(hits[i]);
        if (isPrime(num)) out.push(num);
      }
    }
    return out.join(', ');
  }

  


  
  

  

  return "";
}
