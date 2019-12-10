function fakeFetch () 
{
  return Promise.resolve([
    {"email": "James", "password": "1111"},
    {"email": "Peter", "passwod": "2222"},
    {"email": "Josh", "password": "3333"}
  ]);
}

export default fakeFetch;