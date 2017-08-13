function fixLiteralSyntax() {
  // Fix the problems with our object literal
  var hiddenFiguresMovie = {
      name: 'Hidden Figures',
      runtime: '127 mins',
      releaseYear: 2016,
      director: 'Theodore Melfi',
  }

  // return corrected object
  return hiddenFiguresMovie;
}

// call fixLiteralSyntax and console log the return
console.log(fixLiteralSyntax);
