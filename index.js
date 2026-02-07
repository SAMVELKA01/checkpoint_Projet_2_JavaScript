/* ================================
   Fonctions de manipulation
   de chaînes de caractères
================================ */

// 1. Inverser une chaîne de caractères
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 2. Compter le nombre de caractères
function countCharacters(str) {
  return str.length;
}

// 3. Mettre la première lettre de chaque mot en majuscule
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/* ================================
   Fonctions sur les tableaux
================================ */

// 4. Trouver le maximum dans un tableau
function findMax(arr) {
  return Math.max(...arr);
}

// 5. Trouver le minimum dans un tableau
function findMin(arr) {
  return Math.min(...arr);
}

// 6. Somme des éléments d'un tableau
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// 7. Filtrer un tableau selon une condition
function filterArray(arr, condition) {
  return arr.filter(condition);
}

/* ================================
   Fonctions mathématiques
================================ */

// 8. Factorielle d'un nombre
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 9. Vérifier si un nombre est premier
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 10. Suite de Fibonacci
function fibonacci(n) {
  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence.slice(0, n);
}

/* ================================
   Exemples de tests (optionnel)
================================ */

console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("Samuel")); // 6
console.log(capitalizeWords("bonjour le monde")); // "Bonjour Le Monde"

console.log(findMax([1, 5, 9, 2])); // 9
console.log(findMin([1, 5, 9, 2])); // 1
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(filterArray([1, 2, 3, 4], n => n > 2)); // [3, 4]

console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]
