import axios from "axios";

const baseUrl = "https://api.binance.com/api/v3";

async function getBinancePrice(symbol: string) {
  const response = await axios.get(`${baseUrl}/avgPrice?symbol=${symbol}`);
  console.log("data", response.data);
}

async function main() {
  const symbol = "BTCUSDT";
  await getBinancePrice(symbol);
}

main();
