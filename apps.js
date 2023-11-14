window.addEventListener('load',(e)=>{
    e.preventDefault()
    getData()
})

function getData(){
    const url = fetch('data.json')
    .then(res => res.json())
    .then(data => dataFetching(data))
    .catch(err => console.log(err))
}


const btnTextValue = ['daily']
const className = ['one','two','three','four','five','six']

const rightContainer = document.querySelector('.right-container')
const btnDaily = document.querySelector('.btn-daily')
const btnWeekly = document.querySelector('.btn-weekly')
const btnMonthly = document.querySelector('.btn-monthly')

btnDaily.addEventListener('click',()=>{
    btnTextValue.push(btnDaily.value)
    getData()
})

btnWeekly.addEventListener('click',()=>{
    btnTextValue.push(btnWeekly.value)
    getData()
})

btnMonthly.addEventListener('click',()=>{
    btnTextValue.push(btnMonthly.value)
    getData()
})

function dataFetching(data){
    let lastItem = btnTextValue[btnTextValue.length -1]
    let indexIncrement = 0;
    let htmlContent = ""
    data.forEach(data => {
        const { title, timeframes:{ daily , weekly , monthly } } = data;
        htmlContent +=`<div class="work-details-container">
            <div class="top-section ${className[indexIncrement]}">
            </div>
            <div class="bottom-section">
                    <div class="report-details">
                        <p>${title}</p>
                        <img src="/images/icon-ellipsis.svg" alt="ellipsis">
                    </div>
                <h1>${lastItem === 'daily' ? daily.current : lastItem === 'weekly' ? weekly.current : monthly.current} hrs</h1>
                <p class="hours">last week - <span>${lastItem === 'daily' ? daily.current : lastItem === 'weekly' ? weekly.current : monthly.previous}hrs</span></p>
            </div>
      </div>`   
      indexIncrement++;

    })
    rightContainer.innerHTML = htmlContent;
}






