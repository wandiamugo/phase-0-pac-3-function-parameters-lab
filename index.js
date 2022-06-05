function introduction(name) {
    return `Hi,my name is ${name}.`;
  
  }

  introduction ("Hi, my name is Aki");

  //Use two Parameters
  function introductionWithLanguage(name, language="Ember.js") {
    return `Hi, my name is ${name} and I am Learning to program in ${language}.`
  }

  introductionWithLanguage("Hi, my name is Aki and I am learning to program in Ember.js");

  //Optional parameters

  function introductionWithLanguageOptional(name, language ="Javascript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }
  introductionWithLanguageOptional("Hi, my name is Gracie and I am learning to program in JavaScript");