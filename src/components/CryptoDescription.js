import React, { Component } from 'react'
import axios from 'axios';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core'

export default class CryptoDescription extends Component {

    constructor(){
        super();
        this.state = {
            description: []
        }
    }

    componentDidMount(){
      axios.get(`http://localhost:5000/record/${this.props.match.params.cryptoid}`)
      .then(res => {
        const desc = res.data;
        this.setState({ description: desc})
        console.log(res.data)}
        )
    }
  render() {
 console.log(this.props);
   const {description} = this.state;
    return (
      <div style={{backgroundColor: 'black',height: '100%',width: '100%'}}>
        <h2> Crypto market cap : Currency Description</h2>
        <h3>Product ID: </h3> {description._id}
          <Card style={{ marginLeft: '400px',width: '400px',marginTop: '100px'}}>
      <CardActionArea>
        <CardContent>
            <div>
           <p> <b> name:                                    </b> {description.name} </p>
           <p> <b> circulating_supply:                      </b> {description.circulating_supply} </p>
           <p> <b> max_supply:                              </b> {description.max_supply}    </p>
           <p> <b> cmc_rank:                                </b> {description.cmc_rank}          </p>
           <p> <b> max_supply:                              </b> {description.max_supply}      </p>
           <p> <b> total_supply:                            </b> {description.total_supply}  </p>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
      
      
       
      </div>
    )
  }
}

