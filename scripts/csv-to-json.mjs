import fs from "node:fs";
import path from "node:path";

const csv = fs.readFileSync("data/sites.csv", "utf8").trim();
const lines = csv.split(/\r?\n/);
const headers = lines.shift().split(",");
const data = lines.map(line => {
  // Simple CSV parser for this template: values should not contain unescaped commas.
  const values = line.split(",");
  return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ""]));
});

fs.writeFileSync("data/sites.json", JSON.stringify(data, null, 2));
console.log(`Generated ${data.length} records -> data/sites.json`);
