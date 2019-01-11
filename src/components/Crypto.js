import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {Grid,Row,Col} from 'react-bootstrap';
import Navbars from './Navbar';
import {Link} from 'react-router-dom';
import CryptoDescription from './CryptoDescription';
class Crypto extends Component {
 
  constructor(){
    super();
    this.state = {
      crypto: [],
      currencydesc: []
        }
  }

  componentWillMount(){
    axios.get('http://localhost:5000/record/getrecord')
    .then( res => {
      this.setState({ crypto : res.data})
      console.log(res.data)})
  }

  getdescription(obj,id){
    let {currencydesc} = this.state;
    currencydesc.push(obj);
     this.setState({ currencydesc})
   console.log(currencydesc);
  }
  render() {
    const {crypto} = this.state; 
    return (
      <div className="App">

      <h1> CRYPTO MARKET CAP </h1> 

<Navbars/>
      <h2> Top 100 Cryptocurrencies by Market Capitalization </h2>

   <Grid>
  <Row style={{color: 'black' , fontSize: '40'}}> 
      <Col lg={2} style={{ paddingLeft: '100px'}}>  <h4> name </h4></Col>
      <Col lg={2} style={{ paddingLeft: '200px'}}>  <h4> cicrculating supply </h4>  </Col>
      <Col lg={2} style={{ paddingLeft: '300px'}}>  <h4> total supply  </h4> </Col>
      <Col lg={2} style={{ paddingLeft: '250px'}}>  <h4> cmc rank      </h4> </Col>
    </Row> 
    <br/><br/>
{crypto.map(obj=>{
  return(
    <Row className="show-grid">
     <Col lg={3}>
     <h5>
       <Link to={`/record/${obj._id}`} onClick={()=>this.getdescription(obj)} params={this.state.currencydesc}>  {obj.name} </Link>
       </h5> 
      </Col> 
        
      <Col lg={3}>
    {obj.circulating_supply}
      </Col> 

     <Col lg={3}>
    {obj.total_supply}
      </Col> 

     <Col lg={3}>
    {obj.cmc_rank}
      </Col> 

      </Row>
  )
})}

  </Grid>
       </div>
    );
  }
}

export default Crypto;
