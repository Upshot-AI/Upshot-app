import React from 'react';
import { View, Text,ScrollView,TouchableOpacity } from 'react-native';
import Instructions from './Instructions.json';
import SplashScreen from 'react-native-splash-screen'

const dataKeys = Object.keys(Instructions)
export default class Topics extends React.Component {
    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    navigateToDescription (TopicData,TopicName){
        this.props.navigation.navigate({
            routeName: 'TopicDescription',
            params: {
              TopicData: TopicData,
              TopicName: TopicName,
              BadgesData: Instructions["BadgesData"],
              VisualInboxData: Instructions["InboxSampleResponse"],
              ActivityTypes: Instructions["ActivityTypes"],
              UserBadges: Instructions.BadgesData
            }
            })
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{height:'10%',backgroundColor:'transparent',width:'100%', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:20,fontStyle:'normal',fontWeight:'bold',color:'black',alignSelf:'center'}}>TOPICS</Text>
        </View>
        <ScrollView style={{height:'90%',backgroundColor:'transparent',width:'100%'}}>
            {
                (Instructions.topics).map((Topic,index)=>{
                    return(
                        <TouchableOpacity style={[{backgroundColor:Instructions.topicColors[index],height:95,marginVertical:5,borderRadius:10,marginHorizontal:'4%',alignItems:'center',shadowOffset: {width:2,height: 2},shadowOpacity: 1,shadowRadius: 1}]} onPress = {()=>{this.navigateToDescription(Instructions[dataKeys[2+index]],Topic)}}>
                            <View style={{alignItems:'center',justifyContent:'flex-start',width:"100%",height:90}}>
                                <Text style={{height:'100%',width:'100%',alignSelf:'center',justifyContent:'flex-start',fontSize:20,fontWeight:'bold',position:'absolute',top:30,left:10}}>
                                    {Topic}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
           
            
        </ScrollView>
      </View>
    );
  }
}