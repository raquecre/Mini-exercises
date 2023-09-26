import { useState } from "react"
import TitleH1 from "../components/Titles"
import NavBar from "../components/navBar"
import GithubLink from "../components/Github";
import PreviousInfo from "../components/PreviousInfo";

const BizzBuzz = () => {
    const [userNumber, setUserNumber] = useState(0);
    const isMultiply3 = number => parseInt(number) % 3 === 0 ? true : false;
    const isMultiply5 = number => parseInt(number) % 5 === 0 ? true : false;

    function filter(number) {
        let result;
        if (isMultiply3(number)) {
            if (isMultiply5(number)) {
                return "fizzbuzz"
            } else {
                return "fizz"    
            }    
        } else if (isMultiply5(number)) {
            return "buzz"
        }
        return number
    }

    function FizzBuzzApp(userNumber) {
        const number = parseInt(userNumber);
        const finalList = []
        for (let i = 1; i <= number; i++) {
            finalList.push(filter(i))
        }

        return finalList
    }


    return (
        <div className=" bg-stone-200">
            <NavBar />
            <div className="flex flex-col items-center">
                <TitleH1 title="Bizz Buzz Challenge" />
                <PreviousInfo previousInfo=" Hacer un programa que muestre una lista de números hasta el introducido.
                Los múltipos del 3 tiene que cambiarse por bizz, los múltiplos de 5 buzz, y los múltipos de 3 y 5 por bizzbuzz."/>
                <GithubLink nameProyect="Bizz buzz Challenge"
                    linkProyect="https://github.com/raquecre/Mini-exercises/blob/main/src/pages/BizzBuzz.jsx" />


                <label for="name" className="m-10">
                    Introduce un número:
                    <input value={userNumber} type="number" name="name" id="name" onChange={e => setUserNumber(e.target.value)} />
                </label>

                <ul className="ulfizzbuzzresults">
                    {FizzBuzzApp(userNumber).map((number) => <li ke className="lifizzbuzzresults">{number}</li>)}
                </ul>


            </div>

        </div>
    )

}

export default BizzBuzz