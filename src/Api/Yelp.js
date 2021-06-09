import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:"Bearer WarYUQrhvlfa4XBnuYkJsvCHVYC6OltD33t5trw41vIVtGTgjOpKsdybIA8J5UWTilWodb7jm5aOj1NJU9k7ZvNyN5LMsz_6-Y-Ph3qwWUhg_j9q1THsyNwaY46XYHYx"
    }
})