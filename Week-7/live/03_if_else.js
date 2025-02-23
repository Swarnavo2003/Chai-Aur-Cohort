function checkTruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

checkTruthyValue(1);
checkTruthyValue(0);
checkTruthyValue("Swarnavo");
checkTruthyValue("");
checkTruthyValue([]);
checkTruthyValue([1, 2, 3]);
