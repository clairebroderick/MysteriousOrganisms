// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specNum, dnaArray) => {
  return {
    specimenNum : specNum,
    dna: dnaArray
  };
}

const strand = mockUpStrand();
const creature = pAequorFactory(1, strand);

function mutate (secondCreature) {
  const dnaArray = secondCreature.dna;
  newBase = returnRandBase ();
  arrayPosition = Math.floor(Math.random()*dnaArray.length);
  oldBase = dnaArray[arrayPosition];
  while (newBase === oldBase) {
    arrayPosition = Math.floor(Math.random()*dnaArray.length);
    oldBase = dnaArray[arrayPosition];
  }
  dnaArray[arrayPosition] = newBase 
  return dnaArray;
}
function compareDna (secondCreature) {
  let total = 0;
  dna1 = creature.dna;
  dna2 = secondCreature.dna;
  for (let i = 0; i < dna1.length; i++) {
    if (dna1[i] === dna2[i]) {
      total += 25;
    }
  }
  console.log("The percentage of common DNA is", total, "%.");
};

function willLikelySurvive(creature) {
  total = 0
  const dna = creature.dna;
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "C" || dna[i] === "G") {
      total += 1;
    }
  }
  let percentage = (100/dna.length)*total;
  if (percentage >= 60) {
    return true;
  } else {
    return false;
  }
}

function complimentStrand(creature) {
  const dna = creature.dna;
  newDna = [];
  for (let i = 0; i < dna.length; i++) {
    base = dna[i];
    switch(base) {
      case "A":
        newDna.push("T");
        break;
      case "T":
        newDna.push("A");
        break;
      case "C":
        newDna.push("G");
        break;
      case "G":
        newDna.push("C");
        break;
    }
  }
  console.log("Old DNA: ", dna)
  console.log("Complimentatry Dna", newDna);
}

function createArray () {
  const newArray = [];
  idNumber = 0;
  while (newArray.length < 30 ) {
    newDna = mockUpStrand();
    newCreature = pAequorFactory(idNumber, newDna);
    
    if(willLikelySurvive(newCreature)) {
      newArray.push(newCreature);
      idNumber += 1
    }

  }
}


createArray();