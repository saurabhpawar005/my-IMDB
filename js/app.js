const cl = console.log;


const changeBg = document.getElementById('changeBg');
const allBox = [...document.querySelectorAll('.all')];


onChangeEvent = (eve) =>{
    cl(eve.target.value)
    let getValue = eve.target.value
    allBox.forEach(aro => aro.classList.add('d-none'))
    let getDiv = [...document.querySelectorAll(`.${getValue}`)]
    cl(getDiv)
    getDiv.forEach(aro => aro.classList.remove('d-none'))


}







changeBg.addEventListener('change', onChangeEvent)