const doc1 = {
  name: "doc1",
  content: "doc1 content",
};

const doc2 = {
  name: "doc2",
};

function swap(doc1, doc2) {
  Object.keys(doc1)
    .forEach((key) => {
    console.log(key);
    console.log(doc1[key]);
    console.log(doc2[key]);

    if (doc1[key] === null) {
      delete doc1[key];
      return;
    } else if (!doc2[key]) {
      doc2[key] = doc1[key];
      delete doc1[key];
      return;
    } else {
      const temp = doc1[key];
      doc1[key] = doc2[key];
      doc2[key] = temp;
    }
  });
}

swap(doc1, doc2);
console.log(doc1, doc2);