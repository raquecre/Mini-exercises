import { useState } from "react"
import TitleH1 from "../components/Titles"
import NavBar from "../components/navBar"
import GithubLink from "../components/Github";

const BizzBuzz = () => {
    const [userNumber, setUserNumber] = useState(0);
    const isMultiply3 = number => parseInt(number) % 3 === 0 ? true : false;
    const isMultiply5 = number => parseInt(number) % 5 === 0 ? true : false;

    function filter(number) {
        if (isMultiply3(number) && isMultiply5(number)) {
            return "fizzbuzz"

        } else if (isMultiply3(number) && !isMultiply5(number)) {
            return "fizz"

        } else if (!isMultiply3(number) && isMultiply5(number)) {
            return "buzz"

        } else {

            return number
        }

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
                <GithubLink nameProyect="Bizz buzz Challenge" 
                linkProyect="" />


                <label for="name" className="m-10">
                    Introduce un número:
                    <input value={userNumber} type="number" name="name" id="name" onChange={e =>setUserNumber(e.target.value)}/>
                </label>

                <ul className="ulfizzbuzzresults">
                    {FizzBuzzApp(userNumber).map((number) => <li ke className="lifizzbuzzresults">{number}</li>)}
                </ul>


            </div>

        </div>
    )

}

export default BizzBuzz