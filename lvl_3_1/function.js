import { existsSync } from "fs";
import { writeFile } from "fs/promises";

const createNewFile = (newText) => {
  const fileName = "data.txt";
  if (existsSync(fileName)) {
    return;
  } else {
    writeFile("data.txt", newText);
    console.log(createNewFile);
  }
};
createNewFile("Hello World");
