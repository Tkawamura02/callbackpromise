function generateRandomNumber() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      const error = false;
        if(!error) {
            resolve(
            Math.floor(Math.random() * 1000000));
        } else {
            reject('Error: Something went wrong');
        }
      }, 500);
    });
  }
   
  async function display() {
    console.log("Loading a random number..");
    let results = await generateRandomNumber();
    console.log(results);
  }
  
  display().catch(err => console.log(err));