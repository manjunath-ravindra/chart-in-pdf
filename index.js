const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("file://" + process.cwd() + "/index.html");
    await page.waitForSelector("#myChart", { visible: true });

    const pdf = await page.pdf({
      format: "A4",
      margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px",
      },
      printBackground: true,
    });

    await browser.close();

    console.log("PDF generated successfully!");

    fs.writeFileSync("chart.pdf", pdf);
  } catch (err) {
    console.error(err);
  }
})();
