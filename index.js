// Jonathan.e
let APIResponse = {
  status: "success",
  message: {
    affenpinscher: [],
    african: [],
    airedale: [],
    akita: [],
    appenzeller: [],
    basenji: [],
    beagle: [],
    bluetick: [],
    borzoi: [],
    bouvier: [],
    boxer: [],
    brabancon: [],
    briard: [],
    bulldog: ["boston", "french"],
    bullterrier: ["staffordshire"],
    cairn: [],
    cattledog: ["australian"],
    chihuahua: [],
    chow: [],
    clumber: [],
    cockapoo: [],
    collie: ["border"],
    coonhound: [],
    corgi: ["cardigan"],
    cotondetulear: [],
    dachshund: [],
    dalmatian: [],
    dane: ["great"],
    deerhound: ["scottish"],
    dhole: [],
    dingo: [],
    doberman: [],
    elkhound: ["norwegian"],
    entlebucher: [],
    eskimo: [],
    frise: ["bichon"],
    germanshepherd: [],
    greyhound: ["italian"],
    groenendael: [],
    hound: ["afghan", "basset", "blood", "english", "ibizan", "walker"],
    husky: [],
    keeshond: [],
    kelpie: [],
    komondor: [],
    kuvasz: [],
    labrador: [],
    leonberg: [],
    lhasa: [],
    malamute: [],
    malinois: [],
    maltese: [],
    mastiff: ["bull", "tibetan"],
    mexicanhairless: [],
    mix: [],
    mountain: ["bernese", "swiss"],
    newfoundland: [],
    otterhound: [],
    papillon: [],
    pekinese: [],
    pembroke: [],
    pinscher: ["miniature"],
    pointer: ["german", "germanlonghair"],
    pomeranian: [],
    poodle: ["miniature", "standard", "toy"],
    pug: [],
    puggle: [],
    pyrenees: [],
    redbone: [],
    retriever: ["chesapeake", "curly", "flatcoated", "golden"],
    ridgeback: ["rhodesian"],
    rottweiler: [],
    saluki: [],
    samoyed: [],
    schipperke: [],
    schnauzer: ["giant", "miniature"],
    setter: ["english", "gordon", "irish"],
    sheepdog: ["english", "shetland"],
    shiba: [],
    shihtzu: [],
    spaniel: [
      "blenheim",
      "brittany",
      "cocker",
      "irish",
      "japanese",
      "sussex",
      "welsh"
    ],
    springer: ["english"],
    stbernard: [],
    terrier: [
      "american",
      "australian",
      "bedlington",
      "border",
      "dandie",
      "fox",
      "irish",
      "kerryblue",
      "lakeland",
      "norfolk",
      "norwich",
      "patterdale",
      "russell",
      "scottish",
      "sealyham",
      "silky",
      "tibetan",
      "toy",
      "westhighland",
      "wheaten",
      "yorkshire"
    ],
    vizsla: [],
    weimaraner: [],
    whippet: [],
    wolfhound: ["irish"]
  }
};


/*Create a new array, `breedList`. This array should contain each of the breeds, _including sub-breeds_. When there is a list of sub-breeds, append each one to the beginning of the primary breed name. Capitalize the first letter of each word.

For example, the `Bulldog` entry in the breed list, which reads: `bulldog: ["boston", "french"]` should be converted into `"Boston Bulldog, French Bulldog"`. By contrast, the entry `chihuahua: []` can be converted into simply `"Chihuahua"`.*/



let breedList =[];

let dogsObj = APIResponse.message

for(let key in dogsObj){
   let key1 = key[0].toUpperCase() + key.slice(1);
  if(dogsObj[key].length){
    dogsObj[key].forEach(dog => {
      let dog1 = dog[0].toUpperCase() + key.slice(1);
      //let key1 = key[0].toUpperCase() + key.slice(1);
      breedList.push(`${dog1} ${key1}`)
    })

  }
  else {

    breedList.push(key1)
  }
  console.log(breedList)
}




/*let breedList =[];

let dogsObj = APIResponse.message

for(let key in dogsObj){
  if(dogsObj[key].length){
    console.log(key,"this is the key")
    dogsObj[key].forEach(dog => {
      breedList.push(`${dog} ${key}`)
    })
    console.log(breedList, "this is the breedlist");
  }
  else {
    breedList.push(key)
  }
}*/
