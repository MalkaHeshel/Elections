

export async function getDateResults(setter) {
  debugger;
  try {
    let result = await fetch("http://localhost:3014/api/data/date"); //, {mode: 'no-cors', method:'GET'}
    result = await result.json();
    let todayTmp = new Date()
      .toISOString()
      .slice(0, new Date().toISOString().lastIndexOf("T"));

    if (todayTmp < result.date) setter(false);
    else setter(true);
  } catch (error) {
    console.warn(error);
  }
}

export async function getDateSets(setter) {
  debugger;
  try {
    let result = await fetch("http://localhost:3014/api/data/date"); //, {mode: 'no-cors', method:'GET'}
    result = await result.json();
    let todayTmp = new Date()
      .toISOString()
      .slice(0, new Date().toISOString().lastIndexOf("T"));

    if (todayTmp <=result.date) setter(false);
    else setter(true);
  } catch (error) {
    console.warn(error);
  }
}

export async function getDatenow(setter) {
  debugger;
  try {
    let result = await fetch("http://localhost:3014/api/data/date"); //, {mode: 'no-cors', method:'GET'}
    result = await result.json();
    let todayTmp = new Date()
      .toISOString()
      .slice(0, new Date().toISOString().lastIndexOf("T"));

    if (todayTmp === result.date) setter(true);
    else setter(false);
  } catch (error) {
    console.warn(error);
  }
}
