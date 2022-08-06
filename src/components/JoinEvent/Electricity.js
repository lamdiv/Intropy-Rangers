import React from 'react'

function Electricity(props) {
  const SubmitFormHandler = (e) =>  {
    e.preventDefault();

    // REQUEST SAMPLE
    const sample_json = {
      "source_location_lon": 0,
      "destination_event_lat": 0,
      "source_airport_lon": 0,
      "destination_airport_lat": 0,
      "category_home_to_airport": "private",
      "vechicle_home_to_airport": "car",
      "size_home_to_airport": "string",
      "unit_home_to_airport": "string",
      "factor_home_to_airport": 0,
      "source_airport_to_airport": "domestic",
      "class_airport_to_airport": "average",
      "unit_airport_to_airport": "string",
      "distance_airport_to_airport": "string",
      "factor_airport_to_airport": 0,
      "category_airport_to_event": "private",
      "vechicle_airport_to_event": "car",
      "unit_airport_to_event": "string",
      "size_airport_to_event": "string",
      "factor_airport_to_event": 0,
      "source_diet": "vegan",
      "factor_diet": 0,
      "unit_diet": "string",
      "source_electricity": "renewable",
      "factor_electricity": 0,
      "unit_electricity": "string",
      "event_id": 0,
      "participants_id": 0
    }

    fetch('http://localhost:8000/calculators/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(sample_json)
    }).then(() =>  {
        console.log('New Caculator Posted!');
        // history.go(-1)
        // history.push('/event')
    }

    )
  }


  return (
    <>
    <div className="mt-12 flex flex-col">
      <h1 className="text-2xl font-semibold text-dark">Choose Method</h1>
      <p className="text-md text-dark">
        Lorem ipsum dolor sit amet, onsectetur adipiscing elit.{" "}
      </p>
      <div className="flex space-x-5 mt-10 ">
        <div className="flex flex-col items-center space-y-2 p-10 rounded-xl border border-dark ">
          <svg
            width="20"
            height="25"
            viewBox="0 0 41 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.59375 50.375H33.4062C34.6354 50.375 35.25 51.0104 35.25 52.2812C35.25 53.5521 34.6354 54.1875 33.4062 54.1875H7.59375C6.36458 54.1875 5.75 53.5521 5.75 52.2812C5.75 51.0104 6.36458 50.375 7.59375 50.375Z"
              fill="black"
            />
            <path
              d="M37.0938 21.7812C37.0937 17.2311 35.3455 12.8674 32.2336 9.64995C29.1216 6.43253 24.9009 4.625 20.5 4.625C16.0991 4.625 11.8784 6.43253 8.76645 9.64995C5.65451 12.8674 3.90625 17.2311 3.90625 21.7812C3.90625 28.8191 9.35269 37.992 20.5 48.9796C31.6473 37.992 37.0938 28.8191 37.0938 21.7812ZM20.5 54.1875C6.97794 41.4804 0.21875 30.6758 0.21875 21.7812C0.21875 16.22 2.35552 10.8865 6.15899 6.95411C9.96246 3.0217 15.1211 0.8125 20.5 0.8125C25.8789 0.8125 31.0375 3.0217 34.841 6.95411C38.6445 10.8865 40.7812 16.22 40.7812 21.7812C40.7812 30.6758 34.0221 41.4804 20.5 54.1875Z"
              fill="black"
            />
            <path
              d="M20.5 27.5C21.967 27.5 23.3739 26.8975 24.4112 25.825C25.4485 24.7525 26.0312 23.298 26.0312 21.7812C26.0312 20.2645 25.4485 18.81 24.4112 17.7375C23.3739 16.665 21.967 16.0625 20.5 16.0625C19.033 16.0625 17.6261 16.665 16.5888 17.7375C15.5515 18.81 14.9687 20.2645 14.9687 21.7812C14.9687 23.298 15.5515 24.7525 16.5888 25.825C17.6261 26.8975 19.033 27.5 20.5 27.5ZM20.5 31.3125C18.055 31.3125 15.7102 30.3083 13.9814 28.5209C12.2525 26.7334 11.2813 24.3091 11.2812 21.7812C11.2813 19.2534 12.2525 16.8291 13.9814 15.0416C15.7102 13.2542 18.055 12.25 20.5 12.25C22.945 12.25 25.2898 13.2542 27.0186 15.0416C28.7475 16.8291 29.7187 19.2534 29.7187 21.7812C29.7187 24.3091 28.7475 26.7334 27.0186 28.5209C25.2898 30.3083 22.945 31.3125 20.5 31.3125Z"
              fill="black"
            />
          </svg>
          <p>Onsite</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-10 rounded-xl border border-dark ">
          <svg
            width="20"
            height="25"
            viewBox="0 0 41 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.59375 50.375H33.4062C34.6354 50.375 35.25 51.0104 35.25 52.2812C35.25 53.5521 34.6354 54.1875 33.4062 54.1875H7.59375C6.36458 54.1875 5.75 53.5521 5.75 52.2812C5.75 51.0104 6.36458 50.375 7.59375 50.375Z"
              fill="black"
            />
            <path
              d="M37.0938 21.7812C37.0937 17.2311 35.3455 12.8674 32.2336 9.64995C29.1216 6.43253 24.9009 4.625 20.5 4.625C16.0991 4.625 11.8784 6.43253 8.76645 9.64995C5.65451 12.8674 3.90625 17.2311 3.90625 21.7812C3.90625 28.8191 9.35269 37.992 20.5 48.9796C31.6473 37.992 37.0938 28.8191 37.0938 21.7812ZM20.5 54.1875C6.97794 41.4804 0.21875 30.6758 0.21875 21.7812C0.21875 16.22 2.35552 10.8865 6.15899 6.95411C9.96246 3.0217 15.1211 0.8125 20.5 0.8125C25.8789 0.8125 31.0375 3.0217 34.841 6.95411C38.6445 10.8865 40.7812 16.22 40.7812 21.7812C40.7812 30.6758 34.0221 41.4804 20.5 54.1875Z"
              fill="black"
            />
            <path
              d="M20.5 27.5C21.967 27.5 23.3739 26.8975 24.4112 25.825C25.4485 24.7525 26.0312 23.298 26.0312 21.7812C26.0312 20.2645 25.4485 18.81 24.4112 17.7375C23.3739 16.665 21.967 16.0625 20.5 16.0625C19.033 16.0625 17.6261 16.665 16.5888 17.7375C15.5515 18.81 14.9687 20.2645 14.9687 21.7812C14.9687 23.298 15.5515 24.7525 16.5888 25.825C17.6261 26.8975 19.033 27.5 20.5 27.5ZM20.5 31.3125C18.055 31.3125 15.7102 30.3083 13.9814 28.5209C12.2525 26.7334 11.2813 24.3091 11.2812 21.7812C11.2813 19.2534 12.2525 16.8291 13.9814 15.0416C15.7102 13.2542 18.055 12.25 20.5 12.25C22.945 12.25 25.2898 13.2542 27.0186 15.0416C28.7475 16.8291 29.7187 19.2534 29.7187 21.7812C29.7187 24.3091 28.7475 26.7334 27.0186 28.5209C25.2898 30.3083 22.945 31.3125 20.5 31.3125Z"
              fill="black"
            />
          </svg>
          <p>Onsite</p>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-between">
      <h3
        onClick={props.prevStep}
        className="font-bold justify-end text-dark cursor-pointer text-lg"
      >
        Back
      </h3>
      <button
      onClick={SubmitFormHandler}
        className="font-bold justify-end text-primary cursor-pointer text-lg"
      >
        Calculate Now
      </button>
    </div>
  </>
  )
}

export default Electricity