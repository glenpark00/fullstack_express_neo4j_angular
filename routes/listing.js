const express = require('express');
const router = express.Router();
const neo4jCalls = require('../neo4j_api');

// router.get('/:id', async function (req, res) {
//   let result = await neo4jCalls.getListing(req.params.id);
//   res.status(200).send({ result })    //Can't send just a Number; encapsulate with {} or convert to String.     
//   return { result };
// })

router.get('/', async function(req, res) {
  let listings = await neo4jCalls.getListings().then(data => {
    res.status(200).send(data);
  })
  .catch(err => {
    console.log(err)
    res.status(444).send(err);
  })
  return listings;
})

router.get('/search/:fragment', async function(req, res) {
  let listings = await neo4jCalls.searchListings(req.params.fragment);
  res.status(200).send(listings)
  return listings;
})

router.post('/', async function (req, res) {
  // console.log(req.body)
  let listing = await neo4jCalls.createListing(req.body);
  res.status(200).send("Listing named " + listing + " created")
  return 700000;
})

router.post('/seed', async function(req, res) {
  let listings = await neo4jCalls.populateListings().then(() => {
    neo4jCalls.populateReviews();
  })
    .then(() => {
      res.status(200).send("Database seeded")
    })
    .catch(err => {
      console.log(err);
    })
})

router.delete('/drop', async function (req, res) {
  let listings = await neo4jCalls.wipeDatabase();
  res.status(200).send("Database dropped")
})

module.exports = router;