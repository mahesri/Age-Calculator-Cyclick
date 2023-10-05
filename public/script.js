function calculate() {
    setInterval(() => {
      let birthdate = new Date(document.getElementById('birthdate').value);
      let now = new Date();
      let ageInMs = now.getTime() - birthdate.getTime();
  
      let ageInS = ageInMs / 1000; // to seconds
      let ageinMins = ageInS / 60; // to minutes
      let ageinHrs = ageinMins / 60; // to hours
      let ageInDays = ageinHrs / 24; // to Days
      let ageInMonths = ageInDays / 30.4375; // to months
      let ageInYears = ageInMonths / 12; // to years
  
      document.querySelector('#years').innerHTML = Math.floor(ageInYears);
      document.querySelector('#months').innerHTML = Math.floor(ageInMonths % 12);
      document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375);
      document.querySelector('#hours').innerHTML = Math.floor(ageinHrs % 24);
      document.querySelector('#minutes').innerHTML = Math.floor(ageinMins % 60);
      document.querySelector('#seconds').innerHTML = Math.floor(ageInS % 60);
      document.querySelector('#seconds').style.borderBottom = '1px grey solid';
    }, 1000);
  }
  
  function reset() {
    window.location.reload();
  }
  