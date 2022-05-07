import React,{useState,useEffect} from 'react';
import Product from './Product'
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=2028344fb2f62d7ca4578d6c6ba3e4e5";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=2028344fb2f62d7ca4578d6c6ba3e4e5&query";
function Products() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=2028344fb2f62d7ca4578d6c6ba3e4e5&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        
        {/* <Navbar.Brand href="/home">Trending</Navbar.Brand> */}
        

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button  type="submit">Search</Button>
            </Form>
    

   
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <Product key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>   
    </>
   
  );
}

export default Products;