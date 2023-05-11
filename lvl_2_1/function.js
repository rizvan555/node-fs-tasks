import { writeFile, readFile } from "fs/promises";

try {
  const filePath = new URL("./data.json", import.meta.url);
  console.log(filePath);
  const content = await readFile(filePath, "utf-8");
  console.log(content);
  const newFile = JSON.parse(content);
  console.log(newFile);
  await writeFile("data.txt", JSON.stringify(newFile, null, 2));
  newFile.map((file) => {
    return (
      console.log(`${file.id}-${file.title}`), console.log(file.description)
    );
  });
} catch (error) {
  console.error(error);
}
