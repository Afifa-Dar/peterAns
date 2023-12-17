"use client"
import classNames from "classnames"
import Image from "next/image"


type PetitionFcuncType = () => void
const petitionMsg = "Please Unravel the Mystery by answering the following Question"

let answer = ""
let finalAns: string | undefined

let validPerson = false
let magicStart: PetitionFcuncType
const trick = () => {
    let init = -1
    let printPetion: PetitionFcuncType = (ind?: number) => {
        let k
        if (typeof ind == 'undefined') init += 1
        if (init >= petitionMsg.length) k = ""
        else k = petitionMsg[init]
        document.getElementById("petition").value += k
    }
    return printPetion
}

const magic = (e: any) => {
    if (e.key == '/' && document.getElementById("petition").value == "") {
        validPerson = true
        magicStart = trick()
    }
    if (validPerson) {
        if (e.key != 'Backspace' && e.key != 'Enter' && e.key != 'Shift' && e.key != 'Control' && e.key != 'Delete') {
            e.preventDefault()
            answer += e.key
            console.log("answer: ", answer)
            magicStart()
        }
        else if (e.key == "Backspace") {
            answer = answer.substring(0, answer.length - 1)
            magicStart(0)
        }
        else if (e.key == "Enter") document.getElementById('qs')?.focus()
    }

}
const showAnswer = () => {
    if (!validPerson) {
        finalAns = "You are not my boss"

    }
    else {
        finalAns = `${answer.substring(1, answer.length)}`
        answer = ""

    }
    document.getElementById('petition').value = ''
    document.getElementById('qs').value = ''
    validPerson = false
    // document.getElementById('ans').innerHTML = finalAns
    // alert(finalAns

    document.getElementById('ans').classList.remove('hidden')
    document.getElementById('ans').innerHTML = finalAns








}

const MysteryBox = () => {
    return (
        <center>
            <form action="" className='  rounded-xl shadow-xl  w-1/2 m-5 '>
                <input type="text" required name="petitoon" id="petition" placeholder='Enter Petition...' onKeyDown={magic} className='w-10/12 my-10 mx-20 p-5 focus:outline-blue-300 border shadow-xl' /><br />
                <input type="text" required name="Question" id="qs" placeholder='Enter Question...' className='mx-20 w-10/12 p-5  focus:outline-blue-300 border shadow-xl' /><br />
                <input type="button" onClick={showAnswer} className='bg-blue-600 hover:bg-blue-200 text-white text-xl font-bold py-2 px-4 border-b-4 my-10 mx-28 border-blue-700 hover:border-blue-500 rounded' value={"Submit Your Question"} />
            </form>
            <p id="ans" className="p-5 font-bold text-2xl hidden w-1/2 shadow-2xl rounded-xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.500),theme(colors.purple.200),theme(colors.blue.300),theme(colors.slate.400),theme(colors.blue.300),theme(colors.purple.200),theme(colors.purple.500))] bg-[length:200%_auto] animate-gradient"></p>


        </center>

    )
}

export default MysteryBox