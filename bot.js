// varibael html
const pertanyaan =document.getElementById("pertanyaan")
const jawaban=document.getElementById("jawaban")
let init=0
// Paramteter data
const botSay=(data) => {
    return ['perkenalkan nama saya botmal,siapa nama kamu?',
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohh ${data?.usia}, hobi kamu apa ya?`,
    `waww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
    `${data?.pacar}, ya udah kalau gitu, udahan yaaa?`,
    ` ${data?.gabut}, terimakasih saya pergi dulu yaaa :D ?`,
]
}
// Pemanggilan Function setiap variabel
pertanyaan.innerHTML=botSay()[0]
function botStart(){
    init++
    if(init === 1){
       setTimeout(botDelay({nama: jawaban.value}), 1500)
    }else if(init === 2){
        setTimeout(botDelay({usia: jawaban.value}), 1500)
    }else if(init === 3){
        setTimeout(botDelay({hobi: jawaban.value}), 1500)
    }
    else if(init === 4){
        setTimeout(botDelay({pacar: jawaban.value}), 1500)
    }else if(init === 5){
        setTimeout(botDelay({gabut: jawaban.value}), 1500)
    }   else if(init === 6){
        alert("terimkasih telah mencoba bot sederhana dari ikmal")
        alert("siuu next time")
       finishing()
    }    else{
        botEnd()
    }
}
function botDelay(jawabanUser){
  pertanyaan.innerHTML=botSay(jawabanUser)[init]
}
// Berhenti
function finishing(){
    console.log("finising...")
}
// Selesai
function botEnd(){
    console.log("bot end")
}