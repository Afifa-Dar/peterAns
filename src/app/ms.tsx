import React, { useState } from 'react';
import classNames from 'classnames';

type PetitionFcuncType = () => void;

const MysteryBox = () => {
  const [isDivVisible, setDivVisibility] = useState(false);
  const [finalAns, setFinalAns] = useState<string | undefined>(undefined);
  const [answer, setAnswer] = useState('');
  const [validPerson, setValidPerson] = useState(false);

  const magicStart = () => {
    let init = -1;

    const printPetition: PetitionFcuncType = (ind?: number) => {
      let k;
      if (typeof ind === 'undefined') init += 1;
      if (init >= petitionMsg.length) k = '';
      else k = petitionMsg[init];
      document.getElementById('petition').value += k;
    };

    return printPetition;
  };

  const trick = magicStart();

  const magic = (e: any) => {
    if (e.key === '/' && document.getElementById('petition').value === '') {
      setValidPerson(true);
      trick();
    }

    if (validPerson) {
      if (
        e.key !== 'Backspace' &&
        e.key !== 'Enter' &&
        e.key !== 'Shift' &&
        e.key !== 'Control' &&
        e.key !== 'Delete'
      ) {
        e.preventDefault();
        setAnswer((prevAnswer) => prevAnswer + e.key);
        trick();
      } else if (e.key === 'Backspace') {
        setAnswer((prevAnswer) => prevAnswer.slice(0, -1));
        trick(0);
      } else if (e.key === 'Enter') document.getElementById('qs')?.focus();
    }
  };

  const showAnswer = () => {
    if (!validPerson) {
      setFinalAns("you are not my boss");
    } else {
      setFinalAns(`Answer\n ${answer.substring(1, answer.length)}`);
      setAnswer('');
    }
    document.getElementById('petition').value = '';
    document.getElementById('qs').value = '';
    setValidPerson(false);
    setDivVisibility(true);
  };

  return (
    <form action="" className="rounded-xl shadow-xl w-1/2 m-10">
      <input
        type="text"
        required
        name="petitoon"
        id="petition"
        placeholder="Enter Petition..."
        onKeyDown={magic}
        className="w-10/12 my-10 mx-20 p-5 focus:outline-blue-300 border shadow-xl"
      />
      <br />
      <input
        type="text"
        required
        name="Question"
        id="qs"
        placeholder="Enter Question..."
        className="mx-20 w-10/12 p-5  focus:outline-blue-300 border shadow-xl"
      />
      <br />
      <input
        type="button"
        onClick={showAnswer}
        className="bg-blue-400 hover:bg-blue-200 text-white text-xl font-bold py-2 px-4 border-b-4 my-10 mx-28 border-blue-700 hover:border-blue-500 rounded"
        value="Submit Your Question"
      />
      <div
        id="hide"
        className={classNames({
          'hidden': !isDivVisible,
          'text-lg font-bold bg-black text-white flex': true,
        })}
      >
        <p id="ans">{finalAns}</p>
      </div>
    </form>
  );
};

export default MysteryBox;
