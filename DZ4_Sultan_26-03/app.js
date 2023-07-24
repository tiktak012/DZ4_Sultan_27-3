const btn =document.querySelector('.btn')
const wrapper =document.querySelector('.wrapper')
btn.onclick =()=>{
    const reguest=new XMLHttpRequest()
    reguest.open('GET','data.json')
    reguest.setRequestHeader('Content-type', 'application/json')
    reguest.send()
    reguest.onload=()=>{
        const data=JSON.parse(reguest.response)
        data.forEach(function (i){
            const div=document.createElement('div')
            div.classList.add('block')
            wrapper.append(div)
            div.innerHTML = i.name + '-' + i.age + 'y.o'

        })
    }
}

///////////////////////////////////////

const goods=new XMLHttpRequest()
goods.open('GET','goods.json')
goods.setRequestHeader('Content-type', 'application/json')
goods.send()
goods.onload=()=>{
    const resp = JSON.parse(goods.response)
    console.log( resp)

}