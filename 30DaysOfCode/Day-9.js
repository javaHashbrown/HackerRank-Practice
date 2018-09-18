// Complete the factorial function below.
function factorial(n) {
  if(n===1)
      return n;
  return n*factorial(n-1);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let result = factorial(n);

  ws.write(result + "\n");

  ws.end();
}