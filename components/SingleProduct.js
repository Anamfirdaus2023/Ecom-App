
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';



function SingleProduct({ route, navigation }) {
  const {id} = route.params;
  const [data,setData]=useState("hello")
  const [singalData,setSingalData]=useState([])

  const getSingalDetails = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setSingalData(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  useEffect(() => {
   
    getSingalDetails(id)
    console.log("useEffect call")

  }, [id])

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <Card style={{flex:1}}>
     <Card.Cover  style={{hight:'50%'}} source={{ uri: `${singalData.image}` }} />
    <Card.Content>
      <Text variant="titleLarge">{singalData.title}</Text>
      <Text variant="bodyMedium">Description:{singalData.description}</Text>
      <Text variant="titleLarge">Price:{singalData.price}$</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Buy Now</Button>
      <Button>Add To Cart</Button>
    </Card.Actions>
  </Card>
  );
}

export default SingleProduct;
