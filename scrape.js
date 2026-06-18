const fs = require('fs');

const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY;
if (!FIRECRAWL_API_KEY) {
  console.error('Missing FIRECRAWL_API_KEY environment variable. Set it before running (e.g. in a .env file or your shell).');
  process.exit(1);
}

async function scrape() {
  try {
    console.log("Starting scrape...");
    const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${FIRECRAWL_API_KEY}`
      },
      body: JSON.stringify({
        url: 'http://www.lucabistro.com',
        formats: ['markdown', 'html']
      })
    });
    const data = await response.json();
    fs.writeFileSync('scrape_result.json', JSON.stringify(data, null, 2));
    console.log("Scrape completed!");
  } catch (error) {
    console.error("Error during scrape:", error);
  }
}
scrape();
