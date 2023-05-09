import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddWorker = (props) => {
  const [error, setError] = useState();
  const nameInfoRef = useRef();
  const wageInputRef=useRef();

  const minimumWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    const enteredName=nameInfoRef.current.value;
    const enteredWage=wageInputRef.current.value;
    if (nameInfoRef.current.value.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur !",
        message: "Lütfen Bir İsim Giriniz !",
      });
      return;
    }

    if (+wageInputRef.current.value < minimumWage) {
      setError({
        title: "Maaş Alanı Zorunludur !",
        message: `Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz !`,
      });
      return;
    }
    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    nameInfoRef.current.value="";
    wageInputRef.current.value="";
   
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium ">
            Çalışan İsmi
          </label>

          <input
            type="text"
            className="max-w-[40rem] w-full ms-auto border p-2"
            placeholder="Çalışan ismi yazınız..."
            id="name"
            
            ref={nameInfoRef}
            
          />

          <label htmlFor="wage" className="font-medium ">
            Maaş Miktarı
          </label>

          <input
            type="number"
            className="max-w-[40rem] w-full ms-auto border p-2"
            placeholder="Maaş miktarını yazınız..."
            id="wage"
            
            ref={wageInputRef}
          />

          <Button className="mt-2" type="submit">
            EKLE
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddWorker;
