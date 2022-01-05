const arr=[1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
}
for (const key in arr) {
 const element = arr[key];
        console.log(element);
    
}

for (const val of arr) {
     var element = val
     console.log(element);
}
 const task = arr.forEach((number)=>console.log(number));

 // Create your own resume data in JSON format
 
const Resume = {
    "basics": {
      "name": "Mukesh",
      "email": "mr.mukeh462@gmail.com",
      "phone": "9715165290",
      "degree": "B.com",
      "location": {
        "address": "13/25 vetthikadu perumanallur Tirupur",
        "postalCode": "641-666",
        "city": "Tiruppur",
        "countryCode": "India",
      },
    "work": [
      {
        "company": "Km-knitwear",
        "position": "Accounting",
        "startDate": "12_04_21",
        "endDate": "05_12_2021",        "highlights": [
        ]
      }
    ],
    "education": [
      {
        "institution": "Loyola-college of Arts & science",
        "studyType": "Full-Time",
        "startyear": "2018",
        "endyear": "2021",
        "courses": ["B.com General"]
      }
    ],
    "skills": [
      {
        "name": "sysyem- Work",
        "keywords": ["Ms-office,video-editing,accounting"]
      }
    ],
    "languages": [
      {
        "language": "English,Tamil",
        "fluency": "Tamil"
      }
    
    ]
  }
}