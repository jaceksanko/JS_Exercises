const text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
let dinosaur = 'triceratops'.toLocaleUpperCase();

console.log(dinosaur);

text = text.replace("Velociraptor", dinosaur);

console.log(text.substr(0,text.length/2));
