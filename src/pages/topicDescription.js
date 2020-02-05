import React from 'react';
import { View, Text,ScrollView,TouchableOpacity,Image } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'  
export default class TopicDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleteAccount : false,
            isMailOptOut: false,
            isSMSOptOut: false,
            isPUSHOptOut: false,
            isDataOptOut: false,
            isIPOptOut: false
            // isLoaded: false
        };
    }
    renderUserProfileButtons(){
        return(
            <View style={{flexDirection:'column',width:'100%'}}>
            <TouchableOpacity style={{height:41,backgroundColor:'#0a9eff',width:'100%',justifyContent:'center',alignItems:'center'}} onPress={()=>{console.log('Pressed Send UserDetails')}}>
                <Text style={{color:'black',fontSize:18}}>Send UserDetails</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:41,backgroundColor:'#ff9999',justifyContent:'center',alignItems:'center',marginVertical:10,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Login/Register')}}>
                <Text style={{color:'white',fontSize:18}}>Login / Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:41,backgroundColor:'#059ed1',justifyContent:'center',alignItems:'center',marginBottom:5,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Update Profile')}}>
                <Text style={{color:'white',fontSize:18}}>Update Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:41,backgroundColor:'transparent',justifyContent:'center',alignItems:'center',marginVertical:5,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Logout')}}>
                <Text style={{color:'#0a9eff',fontSize:18}}>Logout</Text>
            </TouchableOpacity>
        </View>
        )
    }
    renderEventsButtons(){
        return(
            <View style={{flexDirection:'column',width:'100%'}}>
                <View style={{height:41,backgroundColor:'#0a9eff',width:'100%',justifyContent:'center',alignItems:'center'}} >
                    <Text style={{color:'white',fontSize:18}}>Create Event</Text>
                </View>
                <TouchableOpacity style={{height:41,backgroundColor:'#ff9999',justifyContent:'center',alignItems:'center',marginVertical:10,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Home Screen')}}>
                    <Text style={{color:'white',fontSize:16}}>Home Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:41,backgroundColor:'#ff9999',justifyContent:'center',alignItems:'center',marginBottom:10,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Profile Screen')}}>
                    <Text style={{color:'white',fontSize:16}}>Profile Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:41,backgroundColor:'#059ed1',justifyContent:'center',alignItems:'center',marginBottom:10,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Add to cart')}}>
                    <Text style={{color:'white',fontSize:16}}>Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:41,backgroundColor:'#059ed1',justifyContent:'center',alignItems:'center',marginBottom:10,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Purchase')}}>
                    <Text style={{color:'white',fontSize:16}}>Purchase</Text>
            </TouchableOpacity>
        </View>
        )
    }
    renderActionsButtons(){
        return(
            <View style={{flexDirection:'column',width:'100%'}}>
                <View style={{height:41,backgroundColor:'#0a9eff',width:'100%',justifyContent:'center',alignItems:'center'}} >
                    <Text style={{color:'white',fontSize:18}}>Request Activity</Text>
                </View>
                <TouchableOpacity style={{height:41,backgroundColor:'#ff9999',justifyContent:'center',alignItems:'center',marginVertical:10,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Any')}}>
                    <Text style={{color:'white',fontSize:16}}>Any</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:41,backgroundColor:'#ff9999',justifyContent:'center',alignItems:'center',marginVertical:5,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Survey')}}>
                    <Text style={{color:'white',fontSize:16}}>Survey</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:41,backgroundColor:'#ff9999',justifyContent:'center',alignItems:'center',marginVertical:5,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Rating')}}>
                    <Text style={{color:'white',fontSize:16}}>Rating</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:41,backgroundColor:'#ff9999',justifyContent:'center',alignItems:'center',marginVertical:5,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed InApp-Message')}}>
                    <Text style={{color:'white',fontSize:16}}>InApp-Message</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderPushNotificationsButtons(){
        return(
            <View style={{flexDirection:'column',width:'100%'}}>
                <TouchableOpacity style={{height:45,backgroundColor:'#ff9999',justifyContent:'center',alignItems:'center',marginVertical:10,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed OnDemand Push')}}>
                    <Text style={{color:'white',fontSize:16}}>OnDemand Push</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderGEOFenceButtons(){
        return(
            <View style={{flexDirection:'column',width:'100%'}}>
                <TouchableOpacity style={{height:45,backgroundColor:'#ff9999',justifyContent:'center',alignItems:'center',marginVertical:10,marginHorizontal:'5%'}} onPress={()=>{console.log('Pressed Send Location Details')}}>
                    <Text style={{color:'white',fontSize:16}}>Send Location Details</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderRewardsButtons(){
        return(
            <View style={{flexDirection:'column',width:'100%'}}>
                <TouchableOpacity style={{height:42,backgroundColor:'#42d3a6',width:'100%',justifyContent:'center',marginVertical:3,alignItems:'center'}} onPress={()=>{console.log('Pressed Reward Status')}}>
                    <Text style={{color:'white',fontSize:18}}>Reward Status</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:42,backgroundColor:'#cccc52',width:'100%',justifyContent:'center',marginVertical:3,alignItems:'center'}} onPress={()=>{console.log('Pressed Reward Rules')}}>
                    <Text style={{color:'white',fontSize:18}}>Reward Rules</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:42,backgroundColor:'#cc4040',width:'100%',justifyContent:'center',marginVertical:3,alignItems:'center'}} onPress={()=>{console.log('Pressed Reward History')}}>
                    <Text style={{color:'white',fontSize:18}}>Reward History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:42,backgroundColor:'#a0a0a0',width:'100%',justifyContent:'center',marginVertical:3,alignItems:'center'}} onPress={()=>{console.log('Pressed Reward Redeem')}}>
                    <Text style={{color:'white',fontSize:18}}>Reward Redeem</Text>
            </TouchableOpacity>
        </View>
        )
    }
    renderGDPRButtons(){
        return(
            <View style={{flexDirection:'column',width:'100%'}}>
                <View style={{height:41,backgroundColor:'#0a9eff',width:'100%',justifyContent:'center',alignItems:'center'}} >
                    <Text style={{color:'white',fontSize:18}}>Send GDPR Info</Text>
                </View>
                <View style={{height:41,backgroundColor:'transparent',justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:30,marginVertical:5}} >
                    <Text style={{color:'black',fontSize:17}}>Delete Account</Text>
                    <ToggleSwitch
                        isOn={this.state.isDeleteAccount}
                        onColor="#47e070"
                        offColor="grey"
                        label=""
                        labelStyle={{ color: "black", fontWeight: "900",fontSize:17,justifyContent:'space-between' }}
                        size="large"
                        onToggle={isOn => {this.setState({isDeleteAccount: !this.state.isDeleteAccount}),console.log("changed to : ", this.state.isDeleteAccount)}}
                        />
                </View>
                <View style={{height:41,backgroundColor:'transparent',justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:30,marginVertical:5}} >
                    <Text style={{color:'black',fontSize:17}}>Mail OptOut</Text>
                    <ToggleSwitch
                        isOn={this.state.isMailOptOut}
                        onColor="#47e070"
                        offColor="grey"
                        label=""
                        labelStyle={{ color: "black", fontWeight: "900",fontSize:17,justifyContent:'space-between' }}
                        size="large"
                        onToggle={isOn => {this.setState({isMailOptOut: !this.state.isMailOptOut}),console.log("changed to : ", this.state.isMailOptOut)}}
                        />
                </View>
                <View style={{height:41,backgroundColor:'transparent',justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:30,marginVertical:5}} >
                    <Text style={{color:'black',fontSize:17}}>SMS OptOut</Text>
                    <ToggleSwitch
                        isOn={this.state.isSMSOptOut}
                        onColor="#47e070"
                        offColor="grey"
                        label=""
                        labelStyle={{ color: "black", fontWeight: "900",fontSize:17,justifyContent:'space-between' }}
                        size="large"
                        onToggle={isOn => {this.setState({isSMSOptOut: !this.state.isSMSOptOut}),console.log("changed to : ", this.state.isSMSOptOut)}}
                        />
                </View>
                <View style={{height:41,backgroundColor:'transparent',justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:30,marginVertical:5}} >
                    <Text style={{color:'black',fontSize:17}}>PUSH OptOut</Text>
                    <ToggleSwitch
                        isOn={this.state.isPUSHOptOut}
                        onColor="#47e070"
                        offColor="grey"
                        label=""
                        labelStyle={{ color: "black", fontWeight: "900",fontSize:17,justifyContent:'space-between' }}
                        size="large"
                        onToggle={isOn => {this.setState({isPUSHOptOut: !this.state.isPUSHOptOut}),console.log("changed to : ", this.state.isPUSHOptOut)}}
                        />
                </View>
                <View style={{height:41,backgroundColor:'transparent',justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:30,marginVertical:5}} >
                    <Text style={{color:'black',fontSize:17}}>Data OptOut</Text>
                    <ToggleSwitch
                        isOn={this.state.isDataOptOut}
                        onColor="#47e070"
                        offColor="grey"
                        label=""
                        labelStyle={{ color: "black", fontWeight: "900",fontSize:17,justifyContent:'space-between' }}
                        size="large"
                        onToggle={isOn => {this.setState({isDataOptOut: !this.state.isDataOptOut}),console.log("changed to : ", this.state.isDataOptOut)}}
                        />
                </View>
                <View style={{height:41,backgroundColor:'transparent',justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:30,marginVertical:5,marginBottom:10}} >
                    <Text style={{color:'black',fontSize:17}}>IP OptOut</Text>
                    <ToggleSwitch
                        isOn={this.state.isIPOptOut}
                        onColor="#47e070"
                        offColor="grey"
                        label=""
                        labelStyle={{ color: "black", fontWeight: "900",fontSize:17,justifyContent:'space-between' }}
                        size="large"
                        onToggle={isOn => {this.setState({isIPOptOut: !this.state.isIPOptOut}),console.log("changed to : ", this.state.isIPOptOut)}}
                        />
                </View>
        </View>
        )
    }
    renderVisualInboxButtons(){
        return(
            <ScrollView style={{flex:1,backgroundColor:'transparent',width:'100%'}}>
            {
                 this.props.navigation.state.params.ActivityTypes.map((Activity,index)=>{
                     let arr =[]
                    return(
                        <View style={{flexDirection:'column',width:'100%'}}>
                            <View style={{backgroundColor:'rgba(0,0,0,0.2)',justifyContent:'center',alignItems:'flex-start',marginVertical:10,paddingVertical:5,paddingLeft:15}} >
                                <Text style={{color:'black',fontSize:16,fontWeight:'700',letterSpacing:1}}>{Activity.name}</Text>
                            </View>
                        {this.props.navigation.state.params.VisualInboxData.map((Activities,ind)=>{
                        return( 
                            Activities.name.includes(Activity.name) &&
                             Activities.activities.map((actObj,i)=>{
                                Activity.type === actObj.type ? arr.push(Activity.name): null
                                return(
                                    Activity.type === actObj.type ? 
                                    <View >
                                        <Text style={{color:'black',fontSize:16,fontWeight:'normal',letterSpacing:1,paddingLeft:15}}>
                                            { actObj.actName}
                                        </Text>
                                        <View style={{borderBottomColor:'#cccccc',borderBottomWidth:1,marginVertical:10,marginLeft:15}}/>
                                    </View>
                                    :null
                                    )
                                })                             
                              
                                )
                        })}
                    {arr.includes(Activity.name) ? null :
                    <Text style={{color:'black',fontSize:16,fontWeight:'normal',letterSpacing:1,paddingLeft:15}}>
                        {'No '+ Activity.name +' Found'}
                    </Text>
                    }
                        </View>
                        )
                    })}
            </ScrollView>

        )
    }
    renderUserBadgesButtons(){
        return(
            <ScrollView style={{flex:1,backgroundColor:'transparent',width:'100%'}}>
                <View style={{width:'100%'}}>
                    <View style={{backgroundColor:'rgba(0,0,0,0.2)',justifyContent:'center',alignItems:'flex-start',paddingVertical:5,paddingLeft:15}} >
                        <Text style={{color:'black',fontSize:19,fontWeight:'700',letterSpacing:1}}>Achived Badges</Text>
                    </View>
                    {
                        this.props.navigation.state.params.UserBadges["active_list"].length > 0 && this.props.navigation.state.params.UserBadges["active_list"].map((badge,index)=>{
                            return(
                                <View style={{width:'100%',marginHorizontal:'5%'}}>
                                    <View style={{width:'90%',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
                                        <View style={{width:'20%',justifyContent:'flex-end',alignItems:'flex-end'}}>
                                            <Image source={require('../../assets/Badge.jpeg')} style={{height:70,width:70}} resizeMode='contain'/>
                                        </View>
                                        <View style={{width:'70%',justifyContent:'flex-start',alignItems:'flex-start'}}>
                                            <Text style={{color:'black',fontSize:17}}>{badge.title}</Text>
                                            <Text style={{color:'black',fontSize:15}}>{badge.badgeDesc}</Text>
                                        </View>
                                    </View>
                                    <View style={{borderBottomColor:'#cccccc',borderBottomWidth:1,marginTop:10}}/>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={{width:'100%'}}>
                    <View style={{backgroundColor:'rgba(0,0,0,0.2)',justifyContent:'center',alignItems:'flex-start',paddingVertical:5,paddingLeft:15}} >
                        <Text style={{color:'black',fontSize:19,fontWeight:'700',letterSpacing:1}}>Un Achived Badges</Text>
                    </View>
                    {
                        this.props.navigation.state.params.UserBadges["inactive_list"].length > 0 && this.props.navigation.state.params.UserBadges["inactive_list"].map((badge,index)=>{
                            return(
                                <View style={{width:'100%',marginHorizontal:'5%'}}>
                                    <View style={{width:'90%',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
                                        <View style={{width:'20%',justifyContent:'flex-end',alignItems:'flex-end'}}>
                                            <Image source={require('../../assets/Badge.jpeg')} style={{height:70,width:70}} resizeMode='contain'/>
                                        </View>
                                        <View style={{width:'70%',justifyContent:'flex-start',alignItems:'flex-start'}}>
                                            <Text style={{color:'black',fontSize:17}}>{badge.title}</Text>
                                            <Text style={{color:'black',fontSize:15}}>{badge.badgeDesc}</Text>
                                        </View>
                                    </View>
                                    <View style={{borderBottomColor:'#cccccc',borderBottomWidth:1,marginTop:10}}/>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>

        )
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{height:'10%',backgroundColor:'transparent',width:'100%', alignItems: 'center', justifyContent: 'center',flexDirection:'row',backgroundColor:'#0a9eff',alignSelf:'center'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.pop()}} style={{height:'100%',alignItems:'flex-start',justifyContent:'center',position:'absolute',left:10}}>
                <Image source ={require('../../assets/back.png')} style={{height:25,width:25}} resizeMode='contain'/>
            </TouchableOpacity>
            <Text style={{fontSize:18,fontStyle:'normal',fontWeight:'bold',color:'white',alignSelf:'center'}}>{this.props.navigation.state.params.TopicName }{this.props.navigation.state.params.TopicName === "Actions" && ' / Activities'}</Text>
        </View>
        <ScrollView style={{flex:1,backgroundColor:'transparent',width:'100%'}}>
            {
                (this.props.navigation.state.params.TopicData).map((Data,index)=>{
                    return(
                        <View style={[{backgroundColor:'transparent',marginVertical:10,borderRadius:10,marginHorizontal:'3%',alignItems:'center',shadowOffset: {width:2,height: 2},shadowOpacity: 0,shadowRadius: 0}]}>
                            <View style={{alignItems:'center',justifyContent:'flex-start',width:"100%",flex:1}}>
                                <Text style={{height:'100%',width:'100%',alignSelf:'center',justifyContent:'flex-start',fontSize:20,fontWeight:'bold',color:'black'}}>
                                    {Data.header}
                                </Text>
                                
                            </View>
                            <View style={{alignItems:'center',justifyContent:'flex-start',width:"100%",flex:1,marginTop:5}}>
                                <Text style={{height:'100%',width:'100%',alignSelf:'center',justifyContent:'flex-start',fontSize:17,fontWeight:'200',color:'rgba(0,0,0,0.9)',letterSpacing:0.3,opacity:0.8}}>
                                    {Data.message}
                                </Text>
                                
                            </View>
                            <View style={{alignItems:'center',justifyContent:'flex-start',width:"100%",flex:1,marginTop:15, borderBottomColor:'rgba(0,0,0,0.3)',borderBottomWidth:0.4}}></View>
                        </View>
                    )
                })
            }
        </ScrollView>
        {
            this.props.navigation.state.params.TopicName === "User Profile" &&
         this.renderUserProfileButtons()
        }
         {
            this.props.navigation.state.params.TopicName === "Events" &&
            this.renderEventsButtons()
        }
        {
            this.props.navigation.state.params.TopicName === "Actions" &&
            this.renderActionsButtons()
        }
         {
            this.props.navigation.state.params.TopicName === "Push Notifications" &&
            this.renderPushNotificationsButtons()
        }
          {
            this.props.navigation.state.params.TopicName === "GEO Fence" &&
           this.renderGEOFenceButtons()
        }
        {
            this.props.navigation.state.params.TopicName === "Rewards" &&
          this.renderRewardsButtons()
        }
         {
            this.props.navigation.state.params.TopicName === "GDPR" &&
          this.renderGDPRButtons()
        }
         {
            this.props.navigation.state.params.TopicName === "Visual Inbox" &&
            <View style={{height:'68%',width:'100%'}}>
                {this.renderVisualInboxButtons()}
            </View>
        }
        {
            this.props.navigation.state.params.TopicName === "User Badges" &&
            <View style={{height:'68%',width:'100%'}}>
                {this.renderUserBadgesButtons()}
            </View>
        }
      </View>
    );
  }
}