import { chromium } from 'playwright';

const brouser = await chromium.launch(
    { heddless: true }
);

const page = await brouser.newPage();

await page.goto(
    'https://www.cemaco.com/?utm_source=Google_Ads&utm_medium=Shopping&utm_campaign=2024_Jugueton_ShoppingAds_PerformanceMax&utm_content=JuguetonAds_ShoppingAds_PerformanceMax&gad_source=1&gclid=EAIaIQobChMI3ajl_fqviwMV2_LjBx1LLBdGEAAYASAAEgJdZPD_BwE'
);

///* 
const productos = await page.$$eval(
    //'.pa0 .items-stretch .vtex-flex-layout-0-x-stretchChildrenWidth',
    //.cemacogt-cemaco-components-0-x-sliderTrack cemacogt-cemaco-components-0-x-sliderTrack--sliderProducts flex justify-around relative pa0 ma0
    '.pr0 .items-stretch .vtex-flex-layout-0-x-stretchChildrenWidth .flex',
    (results) => (
        results.map((el) => {
            const item = el
                .querySelector('.vtex-product-summary-2-x-nameContainer .flex .items-start .justify-center .pv6')
                ?.innerText

            if (!item) return null

            const image = el
                .querySelector('img')
                .getAttribute('src')

            const price = el
                .querySelector('.vtex-product-price-1-x-sellingPriceValue vtex-product-price-1-x-sellingPriceValue--summary')
                ?.innerText

            const link = el
                .querySelector('.product--a-PD')
                .getAttribute('href')

            return (item, image, price, link);
        })
    )
)
//*/

console.log(productos);
await brouser.close();

/* 

            // const categoria = el
            //     //vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--sliderProductstitle
            //     //.querySelector('lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--sliderProductstitle')
            //     .querySelector('p')
            //     ?.innerText


const productos = await page.$$eval
    ('.pr0 .items-stretch .vtex-flex-layout-0-x-stretchChildrenWidth .flex',
        elements => {
            return elements.map(el => el.textContent.trim());
        });


const productos = await page.$$eval
    ('.pr0 .items-stretch .vtex-flex-layout-0-x-stretchChildrenWidth .flex',
        (elements) => {
            elements.map(el => {
                const item = el
                    .querySelector('.vtex-product-summary-2-x-nameContainer .flex .items-start .justify-center .pv6')
                    ?.innerText
                return item
            })
        }
    );

*/
