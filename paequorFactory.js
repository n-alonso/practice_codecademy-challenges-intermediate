/* INSTRUCTIONS 
Look over the starter code. There are two helper functions.
Tasks:
 1. Create a factory function that creates instances of pAequor accepting 2 parameters for a unique identifier and a DNA array
 2. Create a mutate method that changes one base of the DNA at random to a different one
 3. Compare the DNA of 2 specimens and return the percentage of bases that are the same base at the same position
 4. Specimens are likely to survive in their environment if their DNA contains at least 60% of 'C' and 'G', create a method for this
*/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Add your code below
const pAequorFactory = (uniqueNumber, dnaArray) => {
  return {
    _specimenNum: uniqueNumber,
    _dna: dnaArray,
    mutate() {
      const randomNumber = Math.floor(Math.random() * 4);
      let newBase = "";
      do {
        newBase = returnRandBase()
      } while (newBase === this._dna[randomNumber])
      this._dna[randomNumber] = newBase;
    },
    compareDNA(anotherPAequor) {
      let counter = 0;
      this._dna.forEach((base, index) => {
        if (base === anotherPAequor[index]) counter++
      })
      const percentage = (counter / 15) * 100
      console.log(`Specimen #${this._specimenNum} and specimen #${anotherPAequor._specimenNum} have ${percentage} of their DNA bases in common`)
    },
    willLikelySurvive() {
      let counter = 0;
      this._dna.forEach(base => {
        if (base === 'C' || base === 'G') counter++
      })
      const percentage = (counter / 15) * 100
      return percentage >= 60 ? true : false
    }
  }
}

// Tests
let counter = 0
const thirySurvivingPAequors = []
do {
  const specimenNumber = (Math.floor(Math.random()) * 1000)
  const specimen = pAequorFactory(specimenNumber, mockUpStrand())
  if (specimen.willLikelySurvive() === true) {
    thirySurvivingPAequors.push(specimen)
    counter++
  }
} while (counter < 30)
if (thirySurvivingPAequors.length === 30) {
  console.log(`30 instances of pAequor that can survive in their natural environment have been created for study`)
}
