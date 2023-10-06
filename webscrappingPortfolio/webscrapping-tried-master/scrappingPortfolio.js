const puppeteer = require('puppeteer')

const getSummary = async (url) => {
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: 'domcontentloaded',
    })

    const summary = await page.evaluate(() => {
        const para = document.querySelector(".para")
        const data = para.querySelector("span")
        const textData = data.textContent
        return { about: textData }
    })
    summary.about = summary.about.trim()
    console.log(summary)
    await browser.close()
}

getSummary('https://amankumar-six.vercel.app/')