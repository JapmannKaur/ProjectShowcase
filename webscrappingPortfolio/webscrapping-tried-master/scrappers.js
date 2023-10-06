const puppeteer = require('puppeteer')

const scrapeQuotes = async (url) => {
  // get the browser
  const browser = await puppeteer.launch({
    headless: false,
  })
  // get the page
  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: 'domcontentloaded',
  })

//   get quotes data
  const quotes = await page.evaluate(() => {
    // Fetch the first element with class "quote"
    const quoteList = document.querySelectorAll('.quote')

    return Array.from(quoteList).map((quote) => {
      // get text ad author
      const text = quote.querySelector('.text').innerText
      const author = quote.querySelector('.author').innerText
      const tags = quote.querySelector('.tags')
      const tagList = []

      const tagAnchors = tags.querySelectorAll('a')
      Array.from(tagAnchors).forEach((tag) => {
        const linkText = tag.textContent
        tagList.push(linkText)
      })

      return { text, author, tags: tagList }
    })
  })
  console.log(quotes)

  await browser.close()
}

scrapeQuotes('http://quotes.toscrape.com/')

// const getTopTags = async (url) => {
//     // start the browser
//     const browser =  await puppeteer.launch({
//         headless: false
//     });
//     // get new page
//     const page = await browser.newPage();
//     await page.goto(url, {
//         waitUntil: 'domcontentloaded',
//     })

//     // get top 10 tags
//     const tags = await page.evaluate(()=> {
//         const list = document.querySelectorAll(".tag-item")
//         const topTenTagList = []
//         Array.from(list).map((tag) => {
//             const tagLink = tag.getElementsByTagName('a')[0]
//             const tagText = tagLink.textContent
//             topTenTagList.push(tagText)
//         })
//         return topTenTagList
//     })
//     console.log(tags)
//     await browser.close()
// }

// getTopTags('http://quotes.toscrape.com/')