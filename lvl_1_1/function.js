import fs from "fs";

fs.writeFile("blog1.txt", "Hello World", (err) => {
  if (err) throw err;
  console.log("blog1.txt wurde erstellt");
});

fs.writeFile("blog1.txt", "My New Text", (err) => {
  if (err) throw err;
  console.log("blog1.txt wurde aktualisiert");
});

fs.writeFile("blog2.txt", "my-new-blog2 text", (err) => {
  if (err) throw err;
  console.log("created blog2.txt with text");
});

if (fs.existsSync("assets")) {
  fs.rmdirSync("assets");
  console.log("assets-removed");
}
fs.mkdir("assets", (err) => {
  if (err) throw err;
  console.log("created new assets");
});

if (fs.existsSync("delete.txt")) {
  fs.unlinkSync("delete.txt");
  console.log("delete-txt is removed");
}
fs.writeFile("delete.txt", "this is removed file", (err) => {
  if (err) throw err;
  console.log("delete.txt is ready.");
});

fs.writeFile("hello.txt", "I am text file", (err) => {
  if (err) throw err;
  console.log("hello.txt file is ready");
});
fs.rename("Hello.txt", "HelloWorld.txt", (err) => {
  if (err) throw err;
  console.log("I changed my file name to HelloWorld");
});
