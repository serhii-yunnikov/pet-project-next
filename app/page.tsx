import React from 'react'

function Home() {
  // const user_key = 'I-lfdocc0hT92t16OE9VqnJvBSNeatEJZcFOVSwnVZA';
  // const getPhotos = async () => {
  //   const resp = await fetch(`https://api.unsplash.com/photos/?client_id=${user_key}`);

  //   return resp.json();
  // }

  return (
    <main>
      <div>home page</div>
    </main>
  )
}

// const accessKey = 'I-lfdocc0hT92t16OE9VqnJvBSNeatEJZcFOVSwnVZA';
// const apiUrl = 'https://api.unsplash.com';

// fetch(`${apiUrl}/photos/random?count=10`, {
//     headers: {
//     Authorization: `Client-ID ${accessKey}`
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     // Array of photos
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

export default Home;