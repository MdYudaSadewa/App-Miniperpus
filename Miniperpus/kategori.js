import React from 'react'; 
import { View,FlatList, StyleSheet } from 'react-native' 
import { ListItem } from 'react-native-elements' 
import axios from 'axios';
import Header from "./header";

class Kategori extends React.Component{ 
    constructor(props) { 
      super(props); 
        this.state = { 
             data: [], 
        }; 
    } 
    componentDidMount(){ 
    axios.get("https://apiperpus.000webhostapp.com/API/getKategoriBuku.php").then((response)=>{ 
        console.log(response.data); 
        this.setState({ data:response.data }); 
        }) 
        .catch(function (error) { 
            console.log(error); 
        }); 
    } 
    
    render() { 
        return ( 
            <View style={styles.containerMain}> 
                <Header HeaderInfo={"KATEGORI BUKU"}/>
                <FlatList
                    keyExtractor={(item, index) => index.toString()} 
                    data={this.state.data} 
                    renderItem={({ item }) => ( 
                    <ListItem  onPress={()=> this.props.navigation.navigate('Layar2',{id_kategori: item.id_kategori})}
                        title={item.NamaKategori} 
                        leftAvatar={{source: { uri:"https://apiperpus.000webhostapp.com/GambarBuku/"+ item.gambar},}} 
                    /> 
                    )} 
                /> 
                
            </View> 
        ) 
    } 
} 



const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: 'white',
      flex: 1,
    
     },
})
export default Kategori; 