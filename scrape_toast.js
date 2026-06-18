const fs = require('fs');

const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY;
if (!FIRECRAWL_API_KEY) {
  console.error('Missing FIRECRAWL_API_KEY environment variable. Set it before running (e.g. in a .env file or your shell).');
  process.exit(1);
}

async function scrapeToast() {
  try {
    console.log("Starting scrape for Toasttab...");
    const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${FIRECRAWL_API_KEY}`
      },
      body: JSON.stringify({
        url: 'https://www.toasttab.com/luca-bistro/v3',
        formats: ['markdown', 'html']
      })
    });
    
    const data = await response.json();
    fs.writeFileSync('toast_result.json', JSON.stringify(data, null, 2));
    console.log("Scrape completed! Results saved to toast_result.json");
  } catch (error) {
    console.error("Error during scrape:", error);
  }
}

scrapeToast();
