import axios from "axios";

const baseUrl = "https://api.binance.com/api/v3";

async function getBinancePrice(symbol: string) {
  const response = await axios.get(`${baseUrl}/avgPrice?symbol=${symbol}`);
  return response;
}

async function main() {
  const symbol = "BTCUSDT";
  const response = await getBinancePrice(symbol);
  console.log("Price", response.data.price);
}

main();
