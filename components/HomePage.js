
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import TabNavigation from './TabNavigation';


function HomePage({ navigation }) {

  const [products, setProduct] = useState()
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});


  const getSingleDetails = async (id) => {
    navigation.navigate('SingleProduct', { id })

  }
  console.log(products)

  const handleInput = (e) => {
    console.log(e)
    setSearchQuery(e)
    const filteredItems = products.filter((item) =>
      item.title.toLowerCase().includes(e.toLowerCase())

    );
    console.log(filteredItems)
    setFilteredData(filteredItems);

    setSearchQuery(e);
  }

  const getDetails = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setProduct(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }
  useEffect(() => {
    getDetails()

    console.log("useEffect call")

  }, [])



  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text; // If the text is shorter than the maxLength, no need to truncate.
    }
    return text.slice(0, maxLength) + '...'; // Truncate and add ellipses.
  };



  return (

    <View style={styles.container}>
      <TextInput style={{ marginBottom: 10, backgroundColor: "white", zIndex: 1, top: 0, position: "sticky" }}
        value={searchQuery}
        onChangeText={handleInput}
        placeholder="Search Products"

        right={<TextInput.Icon icon="card-search" />}
      />
      {
        filteredData.length === 0 && searchQuery.length > 0 ?
          (
            <Text>No products found</Text>
          )
          : (
            <FlatList
              data={filteredData.length > 0 ? filteredData : products}
              renderItem={({ item }) =>
                <Pressable onPress={() => getSingleDetails(item.id)} >
                  <View>

                    {/* <Image source={require(item.image)} style={{width:50,height:50}}/> */}
                    <View style={styles.card}>
                      <Image
                        source={{ uri: item.image }} // Assuming item.image contains the image URL
                        style={{ width: 150, height: 150, marginTop: 20 }}
                      />
                      <View style={styles.cardContent}>
                        {/* <Text style={styles.item}>{item.title}</Text> */}
                        <Text style={styles.item}>{truncateText(item.title, 10)}</Text>
                        {/* <Text style={styles.item}>{item.discription}</Text> */}
                        {/* <Text style={styles.item}>{item.category}</Text> */}
                        <Text style={styles.itemPrice}>Price:{item.price}$</Text>



                      </View>




                    </View>

                  </View>
                </Pressable>
              }

            />

          )

      }

    </View>


  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    padding: 20
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 0,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  cardContent: {
    alignItems: 'center', // Center-align the text content within the card
  },
  item: {
    padding: 10,
    fontSize: 25,
    height: 44,
  },
  itemPrice: {
    paddingButtom: 10,
    fontSize: 25,
    height: 44,
  },
});

export default HomePage;
